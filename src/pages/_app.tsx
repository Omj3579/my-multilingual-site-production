import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from 'next-seo';
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactElement, ReactNode, useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useAnalytics } from '@/lib/analytics/useAnalytics';
import SEO from '@/lib/seo/next-seo.config';
import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function AnalyticsWrapper({ children }: { children: ReactNode }) {
  useAnalytics();
  
  // Core Web Vitals tracking for SEO performance monitoring
  useEffect(() => {
    // Function to send metrics to analytics
    function sendToAnalytics(metric: Metric) {
      console.log('Core Web Vital:', metric.name, metric.value);
      
      // Send to Google Analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', metric.name, {
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          event_category: 'Web Vitals',
          event_label: metric.id,
          non_interaction: true
        });
      }
      
      // Also send to Vercel Analytics
      if (typeof window !== 'undefined' && (window as any).va) {
        (window as any).va('track', 'Core Web Vitals', {
          metric: metric.name,
          value: metric.value,
          id: metric.id
        });
      }
    }

    // Track all Core Web Vitals
    onCLS(sendToAnalytics);
    onINP(sendToAnalytics);  // INP replaced FID in web-vitals v3
    onFCP(sendToAnalytics);
    onLCP(sendToAnalytics);
    onTTFB(sendToAnalytics);
  }, []);
  
  return <>{children}</>;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  
  // Check if current page is a resources page or admin page
  const isResourcesPage = router.pathname.startsWith('/resources');
  const isAdminPage = router.pathname.startsWith('/admin');
  
  // Use the layout defined at the page level, or fall back to the default layout
  const getLayout = Component.getLayout ?? ((page) => page);
  
  return (
    <LanguageProvider>
      <CartProvider>
        <AnalyticsWrapper>
          <DefaultSeo {...SEO} />
          {!isResourcesPage && !isAdminPage && <Header />}
          {getLayout(<Component {...pageProps} />)}
          {!isResourcesPage && !isAdminPage && <Footer />}
          <Analytics />
          <SpeedInsights />
        </AnalyticsWrapper>
      </CartProvider>
    </LanguageProvider>
  );
}

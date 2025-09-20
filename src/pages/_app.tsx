import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from 'next-seo';
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { useAnalytics } from '@/lib/analytics/useAnalytics';
import SEO from '@/lib/seo/next-seo.config';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function AnalyticsWrapper({ children }: { children: ReactNode }) {
  useAnalytics();
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

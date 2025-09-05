import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter();
  
  // Check if current page is a resources page
  const isResourcesPage = router.pathname.startsWith('/resources');
  
  // Use the layout defined at the page level, or fall back to the default layout
  const getLayout = Component.getLayout ?? ((page) => page);
  
  return (
    <LanguageProvider>
      <CartProvider>
        {!isResourcesPage && <Header />}
        {getLayout(<Component {...pageProps} />)}
        {!isResourcesPage && <Footer />}
      </CartProvider>
    </LanguageProvider>
  );
}

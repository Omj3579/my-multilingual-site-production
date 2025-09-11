import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
    type?: string;
  };
}

export function useSEO(props: SEOProps = {}) {
  const router = useRouter();
  const currentUrl = `https://flairplastic.com${router.asPath}`;

  return {
    NextSeoComponent: (
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.canonical || currentUrl}
        noindex={props.noindex}
        nofollow={props.nofollow}
        openGraph={{
          url: currentUrl,
          title: props.openGraph?.title || props.title,
          description: props.openGraph?.description || props.description,
          images: props.openGraph?.images || [
            {
              url: 'https://flairplastic.com/images/og-image-main.jpg',
              width: 1200,
              height: 630,
              alt: 'Flair Plastic Manufacturing',
            },
          ],
          type: props.openGraph?.type || 'website',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
    ),
  };
}

// Product Category SEO Hook
interface ProductData {
  id: string;
  name?: string;
  description?: string;
  image?: string;
}

export function useProductCategorySEO(category: {
  name: string;
  description: string;
  slug: string;
  products: ProductData[];
}) {
  const seo = useSEO({
    title: `${category.name} Products - Premium Plastic Manufacturing Solutions`,
    description: `Discover our premium ${category.name.toLowerCase()} products. ${category.description} Professional injection molding and contract manufacturing by Flair Plastic.`,
    openGraph: {
      title: `${category.name} Products - Flair Plastic`,
      description: category.description,
      images: [
        {
          url: `https://flairplastic.com/products/categories/${category.slug}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${category.name} Products by Flair Plastic`,
        },
      ],
    },
  });

  return seo;
}

// Industry SEO Hook
export function useIndustrySEO(industry: {
  name: string;
  description: string;
  slug: string;
  services: string[];
  benefits: string[];
}) {
  const seo = useSEO({
    title: `${industry.name} Manufacturing Solutions - Contract Manufacturing & Injection Molding`,
    description: `${industry.description} Professional plastic manufacturing services for ${industry.name.toLowerCase()} industry. ISO certified quality and sustainable solutions.`,
    openGraph: {
      title: `${industry.name} Solutions - Flair Plastic`,
      description: industry.description,
      images: [
        {
          url: `https://flairplastic.com/industries/${industry.slug}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `${industry.name} Manufacturing Solutions`,
        },
      ],
    },
  });

  return seo;
}

// Main Products Page SEO Hook
export function useProductsMainSEO() {
  const seo = useSEO({
    title: 'Premium Plastic Products - Injection Molding & Contract Manufacturing',
    description: 'Explore our comprehensive range of premium plastic products manufactured using advanced injection molding technology. From kitchen essentials to garden solutions, discover quality that exceeds expectations.',
    openGraph: {
      title: 'Premium Plastic Products - Flair Plastic Manufacturing',
      description: 'Comprehensive range of premium plastic products manufactured using advanced injection molding technology.',
      images: [
        {
          url: 'https://flairplastic.com/products/og-image-main.jpg',
          width: 1200,
          height: 630,
          alt: 'Flair Plastic Products Overview',
        },
      ],
    },
  });

  return seo;
}

// lib/metadata.ts
import type { Metadata } from "next";

interface MetaOptions {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  keywords?: string[];
}

export function generateMetadata({
  title = "Amazing Recipe - Recipes.com",
  description = "Find the best recipes in the world on this website.",
  image = "https://recipes.com/og-image.jpg",
  path = "",
  keywords = ["recipes", "food", "best recipes"],
}: MetaOptions = {}): Metadata {
  const baseUrl = "https://recipes.com";
  const url = `${baseUrl}${path}`;

  return {
    title: {
      default: title,
      template: "%s | Recipes.com",
    },
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: "Recipes.com",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: "@recipes_official",
      images: [image],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

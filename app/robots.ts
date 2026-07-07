import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://capuccino.pet/sitemap.xml",
    host: "https://capuccino.pet",
  };
}

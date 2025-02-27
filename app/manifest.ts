import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "XO Starter",
    short_name: "XO",
    description: "An easy-to-deploy Next.js 15 starter template!",

    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#000000",
    background_color: "#000000",
    display: "standalone",
    start_url: "/",
  };
}

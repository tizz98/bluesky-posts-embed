// main.ts
import { serve } from "https://deno.land/std@0.203.0/http/server.ts";

serve((req: Request) => {
  const url = new URL(req.url);

  // Handle /oembed endpoint
  if (url.pathname === "/oembed") {
    const targetUrl = url.searchParams.get("url") || "";
    const params = new URL(targetUrl).searchParams;

    const handle = params.get("handle") ?? "example.bsky.social";
    const hashtags = params.get("hashtags") ?? "";
    const count = params.get("count") ?? "10";
    const width = parseInt(params.get("width") ?? "600", 10);
    const height = parseInt(params.get("height") ?? "400", 10);

    const iframeSrc =
      `https://tizz98.github.io/bluesky-posts-embed/?handle=${encodeURIComponent(handle)}&hashtags=${encodeURIComponent(hashtags)}&count=${encodeURIComponent(count)}`;

    const response = {
      version: "1.0",
      type: "rich",
      provider_name: "Bluesky Posts Widget",
      provider_url: "https://tizz98.github.io/bluesky-posts-embed/",
      title: `${handle}'s Bluesky Posts`,
      author_name: handle,
      author_url: `https://bsky.app/profile/${handle}`,
      html: `<iframe src="${iframeSrc}" width="${width}" height="${height}" frameborder="0" scrolling="yes"></iframe>`,
      width,
      height,
    };

    return new Response(JSON.stringify(response), {
      headers: { "content-type": "application/json" },
    });
  }

  // Default: simple homepage
  return new Response("Bluesky oEmbed endpoint. Try /oembed?url=https://tizz98.github.io/bluesky-posts-embed/?handle=elijah.soy");
});

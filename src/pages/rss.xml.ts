import rss from "@astrojs/rss";
import config from "../config/config.json";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const GET: APIRoute = async (context) => {
  const posts = await getCollection("posts", ({ data }) => {
    return data.draft !== true && !!data.date;
  });
  posts.sort(
    (a, b) =>
      new Date(b.data.date!).getTime() - new Date(a.data.date!).getTime(),
  );
  return rss({
    title: config.site.title,
    description: config.metadata.meta_description,
    site: context.site ?? config.site.base_url,
    items: posts.map((post) => ({
      stylesheet: "/rss/styles.xsl",
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      categories: post.data.categories,
      link: "/" + post.slug,
    })),
  });
};

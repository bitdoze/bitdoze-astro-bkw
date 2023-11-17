import { type CollectionEntry } from "astro:content";

export type PostItem = CollectionEntry<"posts">;

// similer products
const similerItems = (currentItem: PostItem, allItems: PostItem[]) => {
  const {
    data: { tags = [] },
    slug,
  } = currentItem;

  // filter by tags
  const filterByTags = allItems.filter((item) =>
    item.data.tags.some((tag) => tags.includes(tag)),
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByTags])];

  // filter by slug
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);

  return filterBySlug;
};

export default similerItems;

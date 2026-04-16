import wordpressXml from './wataco.WordPress.2026-04-16.xml?raw';

type TocItem = {
  id: string;
  label: string;
};

type ProjectPost = {
  slug: string;
  category: string;
  title: string;
  metaDescription: string;
  heroImage: string;
  tags: string[];
  contentHTML: string;
  toc: TocItem[];
};

const DEFAULT_HERO_IMAGE =
  'https://images.unsplash.com/photo-1566093097221-ac2335b09e70?auto=format&fit=crop&q=80&w=2000';

const getNodeText = (parent: Element, tagName: string): string =>
  parent.getElementsByTagName(tagName)[0]?.textContent?.trim() ?? '';

const toSlug = (value: string): string =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const buildTocAndHtml = (rawHtml: string): { contentHTML: string; toc: TocItem[] } => {
  const htmlDoc = new DOMParser().parseFromString(`<article>${rawHtml}</article>`, 'text/html');
  const article = htmlDoc.body.firstElementChild as HTMLElement | null;

  if (!article) {
    return { contentHTML: rawHtml, toc: [] };
  }

  const headings = Array.from(article.querySelectorAll('h2'));
  const toc = headings.map((heading, index) => {
    const headingText = heading.textContent?.trim() ?? '';
    const generatedId = toSlug(headingText) || `section-${index + 1}`;
    const id = heading.id || generatedId;

    heading.id = id;

    return {
      id,
      label: headingText || `Mục ${index + 1}`
    };
  });

  return {
    contentHTML: article.innerHTML.trim(),
    toc
  };
};

const extractMetaDescription = (rawHtml: string): string => {
  const htmlDoc = new DOMParser().parseFromString(`<article>${rawHtml}</article>`, 'text/html');
  const plainText = htmlDoc.body.textContent?.replace(/\s+/g, ' ').trim() ?? '';

  if (plainText.length <= 200) {
    return plainText;
  }

  return `${plainText.slice(0, 197).trimEnd()}...`;
};

const parseProjectPostsFromWordPressXml = (xmlContent: string): ProjectPost[] => {
  const xmlDoc = new DOMParser().parseFromString(xmlContent, 'application/xml');
  if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
    return [];
  }

  const allItems = Array.from(xmlDoc.getElementsByTagName('item'));
  const attachmentById = new Map<string, string>();
  const attachmentByParentPostId = new Map<string, string>();

  allItems.forEach((item) => {
    const postType = getNodeText(item, 'wp:post_type');
    if (postType !== 'attachment') {
      return;
    }

    const attachmentId = getNodeText(item, 'wp:post_id');
    const parentPostId = getNodeText(item, 'wp:post_parent');
    const attachmentUrl = getNodeText(item, 'wp:attachment_url');

    if (attachmentId && attachmentUrl) {
      attachmentById.set(attachmentId, attachmentUrl);
    }

    if (parentPostId && parentPostId !== '0' && attachmentUrl) {
      attachmentByParentPostId.set(parentPostId, attachmentUrl);
    }
  });

  return allItems
    .filter((item) => getNodeText(item, 'wp:post_type') === 'post')
    .filter((item) => getNodeText(item, 'wp:status') === 'publish')
    .map((item) => {
      const categoryNodes = Array.from(item.getElementsByTagName('category'));
      const categoryTexts = categoryNodes
        .map((node) => node.textContent?.trim() ?? '')
        .filter(Boolean);

      const categoryNicenames = categoryNodes
        .map((node) => node.getAttribute('nicename')?.trim() ?? '')
        .filter(Boolean);

      const belongsToProjectCategory = categoryNicenames.includes('du-an');
      if (!belongsToProjectCategory) {
        return null;
      }

      const postId = getNodeText(item, 'wp:post_id');
      const title = getNodeText(item, 'title');
      const slug = getNodeText(item, 'wp:post_name') || toSlug(title);
      const rawContentHtml = getNodeText(item, 'content:encoded');
      const { contentHTML, toc } = buildTocAndHtml(rawContentHtml);
      const metaDescription = extractMetaDescription(rawContentHtml) || getNodeText(item, 'description');

      const postMetaNodes = Array.from(item.getElementsByTagName('wp:postmeta'));
      const thumbnailId = postMetaNodes
        .map((metaNode) => ({
          key: getNodeText(metaNode, 'wp:meta_key'),
          value: getNodeText(metaNode, 'wp:meta_value')
        }))
        .find((meta) => meta.key === '_thumbnail_id')?.value;

      const heroImage =
        (thumbnailId ? attachmentById.get(thumbnailId) : undefined) ??
        attachmentByParentPostId.get(postId) ??
        DEFAULT_HERO_IMAGE;

      return {
        slug,
        category: 'Dự Án',
        title,
        metaDescription: metaDescription || title,
        heroImage,
        tags: Array.from(new Set(categoryTexts)),
        contentHTML,
        toc
      } satisfies ProjectPost;
    })
    .filter((post): post is ProjectPost => post !== null && post.slug.length > 0);
};

export const wordpressProjectPosts = parseProjectPostsFromWordPressXml(wordpressXml);
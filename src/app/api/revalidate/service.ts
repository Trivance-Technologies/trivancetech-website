import { revalidateTag, revalidatePath } from 'next/cache';
import { RevalidationResult } from './types';

export async function revalidateBlogArticle(slug: string, tags?: string): Promise<RevalidationResult> {
  const cleanSlug = slug.startsWith('/blog/') ? slug.replace('/blog/', '') : slug;

  const revalidatedTags: string[] = [];

  try {
    // Always revalidate the homepage data because it shows the latest articles
    revalidateTag('homepage-data', {});
    revalidatedTags.push('homepage-data');

    if (tags) {
      revalidateTag(tags, {});
      revalidatedTags.push(tags);

      return {
        success: true,
        message: `Successfully revalidated tags: ${tags} and homepage-data`,
        revalidatedTags,
      };
    }

    // Revalidate the specific article tag (if you use one)
    revalidateTag(`blog-article-${cleanSlug}`, {});
    revalidatedTags.push(`blog-article-${cleanSlug}`);

    // Revalidate the article page path
    revalidatePath(`/blog/${cleanSlug}`);
    revalidatedTags.push(`path:/blog/${cleanSlug}`);

    return {
      success: true,
      message: `Successfully revalidated blog article: ${cleanSlug} and homepage-data`,
      revalidatedTags,
    };
  } catch (error) {
    console.error(`Revalidation failed for ${cleanSlug}:`, error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Unknown error',
      revalidatedTags,
    };
  }
}
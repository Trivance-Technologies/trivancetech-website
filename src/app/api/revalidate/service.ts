import { revalidateTag, revalidatePath } from 'next/cache';
import { RevalidationResult } from './types';

export async function revalidateBlogArticle(slug: string, tags?: string): Promise<RevalidationResult> {
  // Extract just the slug if full path is provided
  const cleanSlug = slug.startsWith('/blog/') ? slug.replace('/blog/', '') : slug;
  
  console.log(`Revalidating blog article: ${cleanSlug}`, tags ? `with tags: ${tags}` : '');
  
  const revalidatedTags: string[] = [];

  try {
    if (tags) {
      revalidateTag(tags);
      revalidatedTags.push(tags);
      
      console.log(`Revalidated tags: ${tags}`);
      return {
        success: true,
        message: `Successfully revalidated tags: ${tags}`,
        revalidatedTags,
      };
    }
    // Only revalidate the specific article and its page - don't touch other articles
    revalidateTag(`blog-article-${cleanSlug}`);
    revalidatedTags.push(`blog-article-${cleanSlug}`);

    revalidatePath(`/blog/${cleanSlug}`);
    revalidatedTags.push(`path:/blog/${cleanSlug}`);

    console.log(`Revalidation completed for ${cleanSlug}`);

    return {
      success: true,
      message: `Successfully revalidated blog article: ${cleanSlug}`,
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
import { revalidateTag, revalidatePath } from 'next/cache';
import { RevalidationResult } from './types';

export async function revalidateBlogArticle(slug: string, tags?: string): Promise<RevalidationResult> {
  const cleanSlug = slug.startsWith('/blog/') ? slug.replace('/blog/', '') : slug;
    
  const revalidatedTags: string[] = [];

  try {
    if (tags) {
      revalidateTag(tags, {});
      revalidatedTags.push(tags);
      
      return {
        success: true,
        message: `Successfully revalidated tags: ${tags}`,
        revalidatedTags,
      };
    }

    revalidateTag(`blog-article-${cleanSlug}`, {});
    revalidatedTags.push(`blog-article-${cleanSlug}`);

    revalidatePath(`/blog/${cleanSlug}`); 
    revalidatedTags.push(`path:/blog/${cleanSlug}`);

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
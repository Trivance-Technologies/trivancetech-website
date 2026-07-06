import { NextRequest, NextResponse } from 'next/server';
import { getAllArticles, getArticlesByTag, getArticlesBySearch, getAllTags } from '@/libs/articles';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const action = searchParams.get('action');
  const tag = searchParams.get('tag');
  const query = searchParams.get('query');
  const start = parseInt(searchParams.get('start') || '0', 10);
  const limit = parseInt(searchParams.get('limit') || '10', 10);

  try {
    let result;

    switch (action) {
      case 'getAllArticles':
        result = await getAllArticles(start, limit);
        break;
      case 'getArticlesByTag':
        if (!tag) throw new Error('Tag is required');
        result = await getArticlesByTag(tag, start, limit);
        break;
      case 'getArticlesBySearch':
        if (!query) throw new Error('Query is required');
        result = await getArticlesBySearch(query, tag || 'All Posts', start, limit);
        break;
      case 'getAllTags':
        result = await getAllTags();
        break;
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
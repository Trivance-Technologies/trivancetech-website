import { NextRequest, NextResponse } from 'next/server';
import { RevalidationRequest } from './types';
import { setCorsHeaders } from './cors';
import { revalidateBlogArticle } from './service';

/**
 * Handle OPTIONS requests (CORS preflight)
 */
export async function OPTIONS() {
  const headers = setCorsHeaders();
  return new NextResponse(null, { status: 204, headers });
}

/**
 * Handle POST requests for revalidation
 */
export async function POST(request: NextRequest) {
  const headers = setCorsHeaders();

  try {
    const body: RevalidationRequest = await request.json();
    const { token, slug, tags } = body;

    // Basic validation
    if (!token || !slug) {
      return NextResponse.json(
        { message: 'Token and slug are required' },
        { status: 400, headers }
      );
    }

    const expectedToken = process.env.REVALIDATE_TOKEN || 'token';
    if (token !== expectedToken) {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 401, headers }
      );
    }

    // Perform revalidation
    const result = await revalidateBlogArticle(slug, tags);

    if (!result.success) {
      return NextResponse.json(
        {
          message: 'Revalidation failed',
          error: result.message,
        },
        { status: 500, headers }
      );
    }

    return NextResponse.json(
      {
        message: result.message,
        success: result.success,
        revalidatedTags: result.revalidatedTags,
        timestamp: new Date().toISOString(),
      },
      { status: 200, headers }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Server error',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 500, headers }
    );
  }
}
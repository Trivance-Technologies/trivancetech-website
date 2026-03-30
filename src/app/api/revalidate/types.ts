export interface RevalidationRequest {
  token: string;
  slug: string;
  tags?: string;
}

export interface RevalidationResult {
  success: boolean;
  message: string;
  revalidatedTags: string[];
}
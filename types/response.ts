export interface Pageable {
  hasNext: boolean;
  hasPrevious: boolean;
  cursor: string;
  nextCursor?: string;
  prevCursor?: string;
}

export interface PageableResponse<T> {
  items: T[];
  pageInfo: Pageable;
}

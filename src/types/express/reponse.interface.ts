export interface PaginateResponse<T> {
  data: T[];
  pagination: {
    count: number;
    currentPage: number;
    nextPage: number | null;
    prevPage: number | null;
    lastPage: number;
  };
}

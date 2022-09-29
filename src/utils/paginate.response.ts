export function paginateResponse(
  data: any,
  page: number | string,
  limit: number | string
) {
  const [result, total] = data;

  page = parseInt(page.toString());
  limit = parseInt(limit.toString());

  const lastPage = Math.ceil(total / limit);

  const nextPage = page + 1 > lastPage ? null : page + 1;
  const prevPage = page - 1 < 1 ? null : page - 1;
  return {
    data: [...result],
    pagination: {
      count: total,
      currentPage: page,
      nextPage: nextPage,
      prevPage: prevPage,
      lastPage: lastPage,
    },
  };
}

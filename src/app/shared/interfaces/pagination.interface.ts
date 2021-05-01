export interface Pagination<T>{
    content: T[],
    totalRecords: number;
    totalPages: number;
    page: number;
    itemsPerPage: number;
}
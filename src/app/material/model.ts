export interface CustomerParams {
  filter: string;
  sortDirection: 'asc' | 'desc' | '';
  sortField: string;
  pageIndex: number;
  pageSize: number;
}
export interface Customer {
  id: string;
  role: string;
  firstName: string;
  lastName: string;
  amount: number;
}

export interface CustomerResponse {
  total: number;
  customers: Customer[];
}

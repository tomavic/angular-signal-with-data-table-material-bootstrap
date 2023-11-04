import * as customer from './actions';
import { createReducer, on } from '@ngrx/store';
import { customerAdapter, initialCustomerState } from './state';

export const customerReducer = createReducer(
  initialCustomerState,
  on(customer.loadingCustomers, (state) => ({ ...state, loading: true })),
  on(customer.loadCustomersSuccess, (state, { response }) =>
    customerAdapter.setAll(response.customers, {
      ...state,
      error: false,
      loading: false,
      total: response.total,
    })
  ),
  on(customer.loadCustomersFailure, (state) =>
    customerAdapter.removeAll({
      ...state,
      error: true,
      loading: false,
      total: 0,
    })
  )
);

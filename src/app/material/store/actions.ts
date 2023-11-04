import { createAction, props } from '@ngrx/store';
import { CustomerParams, CustomerResponse } from '../model';

enum CustomerActionType {
  getList = '[Customer] Get List',
  getListSuccess = '[Customer] Get List Success',
  getListFailure = '[Customer] Get List Failure',
}
export const loadingCustomers = createAction(
  CustomerActionType.getList,
  props<{ params: CustomerParams }>()
);
export const loadCustomersSuccess = createAction(
  CustomerActionType.getListSuccess,
  props<{ response: CustomerResponse }>()
);
export const loadCustomersFailure = createAction(
  CustomerActionType.getListFailure,
  props<{ error: any }>()
);

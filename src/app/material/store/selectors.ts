import { createSelector } from '@ngrx/store';
import { GlobalState } from 'src/app/state';
import { customerAdapter } from './state';

export const {
  selectIds: _selectCustomerDataIds,
  selectEntities: _selectCustomerEntities,
  selectAll: _selectAllCustomer,
  selectTotal: _selectCustomerTotal,
} = customerAdapter.getSelectors();

export const selectCustomersFeature = (state: GlobalState) => state.customer;

export const selectCustomerLoading = createSelector(
  selectCustomersFeature,
  (state) => state.loading
);
export const selectCustomerError = createSelector(
  selectCustomersFeature,
  (state) => state.error
);
export const selectCustomerTotal = createSelector(
  selectCustomersFeature,
  _selectCustomerTotal
);

export const selectCustomerIds = createSelector(
  selectCustomersFeature,
  _selectCustomerDataIds
);

export const selectCustomerEntities = createSelector(
  selectCustomersFeature,
  _selectCustomerEntities
);

export const selectAllCustomer = createSelector(
  selectCustomersFeature,
  _selectAllCustomer
);

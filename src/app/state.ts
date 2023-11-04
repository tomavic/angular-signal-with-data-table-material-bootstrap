import { ActionReducerMap } from '@ngrx/store';
import { CustomerState, initialCustomerState } from './material/store/state';
import { customerReducer } from './material/store/reducers';

export interface GlobalState {
  customer: CustomerState;
}

export const initialGlobalState: GlobalState = {
  customer: initialCustomerState,
};

export const reducers: ActionReducerMap<GlobalState> = {
  customer: customerReducer,
};

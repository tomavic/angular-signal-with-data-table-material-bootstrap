import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { CustomerService } from '../customer.service';
import { CustomerParams, CustomerResponse } from '../model';
import {
  loadCustomersFailure,
  loadCustomersSuccess,
  loadingCustomers,
} from './actions';

@Injectable()
export class CustomerEffects {
  constructor(private actions$: Actions, private service: CustomerService) {}

  loadCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadingCustomers),
      switchMap((payload: { params: CustomerParams }) =>
        this.service.getCustomers(payload.params).pipe(
          map((response: CustomerResponse) =>
            loadCustomersSuccess({ response })
          ),
          catchError((error: HttpErrorResponse) =>
            of(loadCustomersFailure({ error }))
          )
        )
      )
    )
  );
}

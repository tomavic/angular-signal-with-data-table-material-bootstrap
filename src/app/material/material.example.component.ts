import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store, select } from '@ngrx/store';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  merge,
  startWith,
  tap,
} from 'rxjs';
import { GlobalState } from '../state';
import { Customer } from './model';
import { loadingCustomers } from './store/actions';
import {
  selectAllCustomer,
  selectCustomerError,
  selectCustomerLoading,
  selectCustomerTotal,
} from './store/selectors';

@Component({
  selector: 'app-material-example',
  templateUrl: './material-example.component.html',
})
export class MaterialExampleComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  public displayedColumns: string[] = [
    'id',
    'role',
    'firstName',
    'lastName',
    'amount',
  ];

  public total$!: Observable<number>;
  public loading$!: Observable<boolean>;
  public error$!: Observable<boolean>;

  public dataSource!: MatTableDataSource<Customer>;
  public noData: Customer[] = [<Customer>{}];
  public filterSubject = new Subject<string>();
  public defaultSort: Sort = { active: 'role', direction: 'asc' };

  private filter: string = '';

  constructor(public store: Store<GlobalState>) {}

  public ngOnInit(): void {
    this.store
      .pipe(select(selectAllCustomer))
      .subscribe((customers) => this.initializeData(customers));

    this.loading$ = this.store.pipe(select(selectCustomerLoading));
    this.total$ = this.store.pipe(select(selectCustomerTotal));
    this.error$ = this.store.pipe(select(selectCustomerError));
  }

  public ngAfterViewInit(): void {
    const filter$ = this.filterSubject.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap((value: string) => {
        // we should reset page index
        this.paginator.pageIndex = 0;
        this.filter = value;
      })
    );
    const sort$ = this.sort.sortChange.pipe(
      // we should reset page index
      tap(() => (this.paginator.pageIndex = 0))
    );

    merge(filter$, sort$, this.paginator.page)
      .pipe(
        startWith(true),
        tap(() => this.loadCustomers())
      )
      .subscribe();
  }

  private initializeData(customers: Customer[]): void {
    this.dataSource = new MatTableDataSource(
      customers.length ? customers : this.noData
    );
  }
  public ngOnDestroy(): void {}

  public retry(): void {
    this.loadCustomers();
  }

  private loadCustomers(): void {
    this.store.dispatch(
      loadingCustomers({
        params: {
          filter: this.filter.toLocaleLowerCase(),
          pageIndex: this.paginator.pageIndex,
          pageSize: this.paginator.pageSize,
          sortDirection: this.sort.direction,
          sortField: this.sort.active,
        },
      })
    );
  }
}

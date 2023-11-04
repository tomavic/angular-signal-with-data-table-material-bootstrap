import {
  Component,
  OnInit,
  QueryList,
  ViewChildren,
  signal,
} from '@angular/core';
import {
  SortEvent,
  SortableHeaderDirective,
  compare,
} from '../sortable-header.directive';
import { Country, dataset } from '../data';

@Component({
  selector: 'app-bootstrap-example',
  templateUrl: './bootstrap-example.component.html',
})
export class BootstrapExampleComponent implements OnInit {
  constructor() {}
  @ViewChildren(SortableHeaderDirective)
  headers!: QueryList<SortableHeaderDirective>;
  private filter = signal('');
  private countries = signal<Array<Country>>(dataset);
  private data = signal<Array<Country>>(dataset);

  $countries = this.countries.asReadonly();
  $filter = this.filter.asReadonly();

  updateFilterCountry(e: any) {
    const value = e.target.value;
    this.filter.set(value);
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    // sorting countries
    if (direction === '' || column === '') {
      this.countries = this.data;
    } else {
      this.countries.mutate((value) =>
        value.sort((a, b) => {
          const res = compare(a[column], b[column]);
          return direction === 'asc' ? res : -res;
        })
      );
    }
  }
  ngOnInit(): void {}
}

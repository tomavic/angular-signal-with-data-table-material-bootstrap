import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';
import { ComplexCounterService } from './complex.counter.service';

@Component({
  selector: 'app-counter2',
  template: `
    <div class="container">
      <h2>Component 2</h2>
      <div class="d-flex flex-column">
        <button class="btn btn-success" (click)="click()">+</button>

        <p>Count is {{ count$ | async }}</p>
        <p>Double is {{ double$ | async }}</p>
        <p>Triple is {{ triple$ | async }}</p>
        <p>Combined is {{ combined$ | async }}</p>
        <p>Message is {{ message$ | async }}</p>
      </div>
    </div>
  `,
})
export class CounterTwoComponent implements OnInit {
  count$ = this.complexCounterService.count$;
  double$ = this.complexCounterService.double$;
  triple$ = this.complexCounterService.triple$;
  combined$ = this.complexCounterService.combined$;
  message$ = this.complexCounterService.message$;

  constructor(
    private counterService: CounterService,
    private complexCounterService: ComplexCounterService
  ) {}

  ngOnInit(): void {}

  click() {
    this.complexCounterService.increment();
  }
}

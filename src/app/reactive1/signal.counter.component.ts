import { Component, OnInit } from '@angular/core';
import { SignalCounterService } from './signal.counter.service';

@Component({
  selector: 'app-signal-counter',
  template: `
    <div class="container">
      <h2>Counter with Singal</h2>
      <div class="d-flex flex-column">
        <button class="btn btn-warning" (click)="click()">+</button>

        <p>Count is {{ count$() }}</p>
        <p>Double is {{ double$() }}</p>
        <p>Triple is {{ triple$() }}</p>
        <p>Combined is {{ combined$() }}</p>
        <p>Message is {{ message$() }}</p>
      </div>
    </div>
  `,
})
export class SignalCounterComponent implements OnInit {
  count$ = this.counterService.count;
  double$ = this.counterService.double;
  triple$ = this.counterService.triple;
  combined$ = this.counterService.combined;
  message$ = this.counterService.message;

  constructor(private counterService: SignalCounterService) {}

  ngOnInit(): void {}

  click() {
    this.counterService.increment();
  }
}

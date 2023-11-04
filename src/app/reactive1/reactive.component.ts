import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactive-example',
  template: `
    <div class="container">
      <div class="d-flex justify-content-center gap-3">
        <!-- <app-counter1></app-counter1>
        <app-counter2></app-counter2> -->

        <hr />

        <app-signal-counter></app-signal-counter>
      </div>
    </div>
  `,
})
export class ReactiveExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

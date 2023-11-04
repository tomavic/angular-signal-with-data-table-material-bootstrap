import { Component, OnInit, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
    <!-- <h1>Hola!</h1>
    <p>{{ z() }}</p>

    <button (click)="update()" class="btn btn-primary">+</button> -->
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // x = signal(5);
  // y = signal(8);
  // z = computed(() => this.x() + this.y());
  // update() {
  //   this.x.set(10);
  // }
  // ngOnInit(): void {}
}

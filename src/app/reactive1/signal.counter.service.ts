import { Injectable, computed, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalCounterService {
  count = signal(1000);

  double = computed(() => this.count() * 2);
  triple = computed(() => this.count() * 3);

  combined = computed(() => {
    console.log('Calculating double', this.double());
    console.log('Calculating triple', this.triple());
    return this.double() + this.triple();
  });

  over9000 = computed(() => {
    console.log('Calculating combined', this.combined());
    return this.combined() > 9000;
  });

  message = computed(() => {
    console.log('Calculating over9000', this.over9000());
    this.over9000() ? "It's over 9000!" : "It's under 9000.";
  });

  increment() {
    this.count.update((value) => value + 500);
  }
}

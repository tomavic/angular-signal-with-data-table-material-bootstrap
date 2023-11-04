import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComplexCounterService {
  count$ = new BehaviorSubject(1000);

  double$ = this.count$.pipe(map((count) => count * 2));
  triple$ = this.count$.pipe(map((count) => count * 3));

  combined$ = combineLatest([this.double$, this.triple$]).pipe(
    map(([double, triple]) => {
      console.log('Calculating double$', double);
      console.log('Calculating triple$', triple);
      return double + triple;
    })
  );

  over9000$ = this.combined$.pipe(
    map((combined) => {
      console.log('Calculating combined$', combined);
      return combined > 9000;
    })
  );

  message$ = this.over9000$.pipe(
    map((over9000) => {
      console.log('Calculating message$', over9000);
      return over9000 ? "It's over 9000!" : "It's under 9000.";
    })
  );

  increment() {
    this.count$.next(this.count$.value + 500);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BootstrapExampleComponent } from './bootstrap/bootstrap-example.component';
import { MaterialExampleComponent } from './material/material.example.component';
import { ReactiveExampleComponent } from './reactive1/reactive.component';

const routes: Routes = [
  {
    component: AppComponent,
    path: '',
    children: [
      {
        component: BootstrapExampleComponent,
        path: 'bootstrap',
      },
      {
        component: MaterialExampleComponent,
        path: 'material',
      },
      {
        component: ReactiveExampleComponent,
        path: 'reactive',
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/reactive',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

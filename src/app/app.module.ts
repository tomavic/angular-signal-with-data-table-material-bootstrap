import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapExampleComponent } from './bootstrap/bootstrap-example.component';
import { CountryPipe } from './country.pipe';
import { MaterialExampleComponent } from './material/material.example.component';
import { SortableHeaderDirective } from './sortable-header.directive';
import { StorageModule } from './storage.module';
import { CounterOneComponent } from './reactive1/counter1.component';
import { CounterTwoComponent } from './reactive1/counter2.component';
import { ReactiveExampleComponent } from './reactive1/reactive.component';
import { SignalCounterComponent } from './reactive1/signal.counter.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapExampleComponent,
    MaterialExampleComponent,
    CountryPipe,
    SortableHeaderDirective,
    CounterOneComponent,
    CounterTwoComponent,
    ReactiveExampleComponent,
    SignalCounterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    StorageModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

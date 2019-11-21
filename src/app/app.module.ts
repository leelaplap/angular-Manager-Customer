import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { StarComponent } from './stars/star/star.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    StarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

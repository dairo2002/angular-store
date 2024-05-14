import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './domains/products/pages/list/list.component';
import { ProductComponent } from './domains/products/components/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    // ListComponent,
    // ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

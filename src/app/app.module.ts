import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllBillsComponent } from './components/all-bills/all-bills.component';
import { BillDetailsComponent } from './components/bill-details/bill-details.component';
import { HomeComponent } from './components/home/home.component';
import { AddBillsComponent } from './components/add-bills/add-bills.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AllBillsComponent,
    BillDetailsComponent,
    HomeComponent,
    AddBillsComponent,
    MenuComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

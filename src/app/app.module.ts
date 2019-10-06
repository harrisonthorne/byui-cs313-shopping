import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowseItemsComponent } from './browse-items/browse-items.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ConfirmationPageComponent } from './confirmation-page/confirmation-page.component';
import { MatIconModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        BrowseItemsComponent,
        ViewCartComponent,
        CheckoutComponent,
        ConfirmationPageComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

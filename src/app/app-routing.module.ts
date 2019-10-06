import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseItemsComponent } from 'src/app/browse-items/browse-items.component';
import { CheckoutComponent } from 'src/app/checkout/checkout.component';
import { ConfirmationPageComponent } from 'src/app/confirmation-page/confirmation-page.component';
import { ViewCartComponent } from 'src/app/view-cart/view-cart.component';


const routes: Routes = [
    {
        path: 'browse',
        component: BrowseItemsComponent
    },
    {
        path: 'checkout',
        component: CheckoutComponent
    },
    {
        path: 'confirm',
        component: ConfirmationPageComponent
    },
    {
        path: 'cart',
        component: ViewCartComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'browse'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

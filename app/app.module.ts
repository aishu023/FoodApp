import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { AdminWorkComponent } from './admin-work/admin-work.component';
import { BillAdminWorkComponent } from './bill-admin-work/bill-admin-work.component';
import { BillViewComponent } from './bill-view/bill-view.component';
import { ItemAdminWorkComponent } from './item-admin-work/item-admin-work.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ReviewAddComponent } from './review-add/review-add.component';
import { SubmitComponent } from './submit/submit.component';
import { UserItemViewComponent } from './user-item-view/user-item-view.component';
import { UserComponent } from './user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewRestaurantitemsComponent } from './view-restaurantitems/view-restaurantitems.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReviewViewComponent } from './review-view/review-view.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterComponent } from './register/register.component';


const allLinks:Routes = [
  {path:'launchrestuarant',component:AdminWorkComponent},
  {path:'restaurants',component:UserComponent},
  {path:'launchitems',component:ItemAdminWorkComponent },
  {path:'viewItems',component:ItemViewComponent },
  {path:'viewBills',component:BillViewComponent},
  {path:'admin/:name',component:AdminWorkComponent},
  {path:'submit',component:SubmitComponent},
  {path:'review',component:ReviewAddComponent},
  {path:'aboutUs',component:AboutUsComponent},
  
  {path:'viewItem',component:UserItemViewComponent},  
  {path:'payment',component:PaymentComponent},
  {path:'viewreview',component:ReviewViewComponent}
  
  
]

@NgModule({
  declarations: [
    AppComponent,
    AdminViewComponent,
    AdminWorkComponent,
    BillAdminWorkComponent,
    BillViewComponent,
    ItemAdminWorkComponent,
    ItemViewComponent,
    ReviewAddComponent,
    SubmitComponent,
    UserItemViewComponent,
    UserComponent,
    ViewRestaurantitemsComponent,
    AboutUsComponent,
    ReviewViewComponent,
    PaymentComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(allLinks),
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

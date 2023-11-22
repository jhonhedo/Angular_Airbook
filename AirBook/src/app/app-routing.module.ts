import { NgModule } from '@angular/core';
import { ShowflightComponent } from './showflight/showflight.component';
import { BodyComponent } from './search/body.component';
import { LoginComponent } from './login/login.component';
 import { RouterModule, Routes } from '@angular/router';
import { ReviewbookingComponent } from './reviewbooking/reviewbooking.component';
import { SeatselectionComponent } from './seatselection/seatselection.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { AdmindashbordComponent } from './admindashbord/admindashord.component';
import { TicketComponent } from './ticket/ticket.component';
import { PaymentComponent } from './cardpayment/payment.component';
import { PaymentreviewComponent } from './paymentreview/paymentreview.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AddflightComponent } from './addflight/addflight.component';
import { EditflightsComponent } from './editflights/editflights.component';
import { AddpassengerComponent } from './addpassenger/addpassenger.component';
import { NavComponent } from './nav/nav.component';



const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'login', component: LoginComponent },
  { path: 'userRegister', component: UserregisterComponent },
  { path: 'showflight', component: ShowflightComponent },
  { path: 'review', component: ReviewbookingComponent },
  { path: 'seatselection', component: SeatselectionComponent },
  { path: 'resetpass', component: ResetpassComponent },
  { path: 'admindash', component: AdmindashbordComponent },
  { path: 'ticket', component: TicketComponent },
  { path: 'cardpayment', component: PaymentComponent },
  { path: 'paymentreview', component: PaymentreviewComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'adminregister', component: AdminRegisterComponent },
  { path: 'addflight', component: AddflightComponent },
  { path: 'editflight',component: EditflightsComponent},
  { path: 'addpassenger', component: AddpassengerComponent },
  {path:'nav', component:NavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowflightComponent } from './showflight/showflight.component';
import { BodyComponent } from './search/body.component';
import { LoginComponent } from './login/login.component';
import { RigesterComponent } from './rigester/rigester.component';
import { ReviewbookingComponent } from './reviewbooking/reviewbooking.component';
import { SeatselectionComponent } from './seatselection/seatselection.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { AdmindashordComponent } from './admindashbord/admindashord.component';
import { TicketComponent } from './ticket/ticket.component';
import { PaymentComponent } from './cardpayment/payment.component';
import { PaymentreviewComponent } from './paymentreview/paymentreview.component';



const routes: Routes = [
  {path: '', component: BodyComponent},
  {path:'login',component:LoginComponent},
  {path:'rig', component:RigesterComponent},
  {path: 'showflight', component:ShowflightComponent},
  {path:'review', component:ReviewbookingComponent},
  {path:'seatselection',component:SeatselectionComponent},
  {path:'resetpass', component:ResetpassComponent},
  {path:'admindash',component:AdmindashordComponent},
  {path:'ticket',component:TicketComponent},
  {path:'cardpayment',component:PaymentComponent},
  {path:'paymentreview',component:PaymentreviewComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './search/body.component';
import { ShowflightComponent } from './showflight/showflight.component';
import { LoginComponent } from './login/login.component';
import { CounterComponent } from './counter/counter.component';
import { AdmindashbordComponent } from './admindashbord/admindashord.component';
import { PaymentComponent } from './cardpayment/payment.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { PaymentreviewComponent } from './paymentreview/paymentreview.component';
import { HttpClientModule } from '@angular/common/http';
import { UserregisterComponent } from './userregister/userregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AddflightComponent } from './addflight/addflight.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { AddpassengerComponent } from './addpassenger/addpassenger.component'; // Import CommonModule
import { ReviewbookingComponent } from './reviewbooking/reviewbooking.component';
import { AdminfetchflightsComponent } from './adminfetchflights/adminfetchflights.component';
import { EditflightsComponent } from './editflights/editflights.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AdminshowflightsComponent } from './adminshowflights/adminshowflights.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { PracticeComponent } from './practice/practice.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponent,
    ShowflightComponent,
    LoginComponent,
    CounterComponent,
    AdmindashbordComponent,
    PaymentComponent,
    ResetpassComponent,
    PaymentreviewComponent,
    UserregisterComponent,
    AdminloginComponent,
    AdminRegisterComponent,
    AdminNavComponent,
    AddflightComponent,
    ResetpassComponent,
    PaymentreviewComponent,
    UserregisterComponent,
    AdminloginComponent,
    AdminRegisterComponent,
    AdminNavComponent,
    AddflightComponent,
    FooterComponent,
    AddpassengerComponent,
    ReviewbookingComponent,
    AdminshowflightsComponent,
    TicketsComponent,
    AdminfetchflightsComponent,
    EditflightsComponent,
    ConfirmComponent,
    UserprofileComponent,
    PracticeComponent ,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


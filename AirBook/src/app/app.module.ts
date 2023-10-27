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
import { AdmindashordComponent } from './admindashbord/admindashord.component';


import { PaymentComponent } from './payment/payment.component';
import { SeatselectionComponent } from './seatselection/seatselection.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BodyComponent,
    ShowflightComponent,
    LoginComponent,
    CounterComponent,
    AdmindashordComponent,
   
  
    PaymentComponent,
             SeatselectionComponent,

    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

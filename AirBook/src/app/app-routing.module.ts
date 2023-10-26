import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowflightComponent } from './showflight/showflight.component';
import { BodyComponent } from './body/body.component';
import { LoginComponent } from './login/login.component';
import { RigesterComponent } from './rigester/rigester.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path:'login',component:LoginComponent},
  {path:'rig', component:RigesterComponent},
  {path: 'showflight', component:ShowflightComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

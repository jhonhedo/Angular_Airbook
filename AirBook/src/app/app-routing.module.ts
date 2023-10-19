import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowflightComponent } from './showflight/showflight.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {path: '', component: BodyComponent},
  {path: 'showflight', component:ShowflightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

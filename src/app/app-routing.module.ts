import { UserConfirmationComponent } from './../whatsapp/pages/user-confirmation/user-confirmation.component';
import { HomeComponentComponent } from './../whatsapp/pages/home-component/home-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeComponentComponent,
    pathMatch:'full'
  },
  {
    path:'user',
    component:UserConfirmationComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserConfirmationComponent } from './pages/user-confirmation/user-confirmation.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserConfirmationComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class WhatsappModule { }

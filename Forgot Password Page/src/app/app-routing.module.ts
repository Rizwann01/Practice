import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpVerificationComponent } from './otp-verification/otp-verification.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { PasswordResetSuccessComponent } from './password-reset-success/password-reset-success.component'; // Import the PasswordResetSuccessComponent
const routes: Routes = [
  { path: '', 
component: ForgotPasswordComponent
}, // Default route
  { path: 'otp', component: OtpVerificationComponent },
  { path: 'password-reset-success', component: PasswordResetSuccessComponent } // Add route for PasswordResetSuccessComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

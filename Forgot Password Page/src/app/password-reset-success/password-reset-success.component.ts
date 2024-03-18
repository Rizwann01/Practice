import { Component } from '@angular/core';
import { PasswordResetService } from '../../../password-reset.service';

@Component({
  selector: 'app-password-reset-success',
  templateUrl: './password-reset-success.component.html',
  styleUrls: ['./password-reset-success.component.css'] // Note the correct property name and array syntax
})
export class PasswordResetSuccessComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  errorMessage: string = ''; // Added errorMessage property
  constructor(private passwordResetService: PasswordResetService) { }

  resetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    const email = this.passwordResetService.getResetEmail();
    if (!email) {
      this.errorMessage = 'Email not found';
      return;
    }

    this.passwordResetService.resetPassword(email, this.newPassword)
      .subscribe(
        (response) => {
          console.log('Password reset successfully');
          alert('Password reset successfully'); 
          // Handle success, e.g., navigate to success page
        },
        (error) => {
          console.error('Error resetting password:', error);
          this.errorMessage = 'Failed to reset password. Please try again later.';
        }
      );
  }
}

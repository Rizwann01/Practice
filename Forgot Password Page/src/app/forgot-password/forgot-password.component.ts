// forgot-password.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmailService } from '../email.service';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = '';
  otp: string = '';
  otpVerified: boolean = false;
  passwordReset: boolean = false;
  constructor(private router: Router,private emailService: EmailService) {} // Inject the Router service
  sendOTP() {
    console.log('sendOTP() method called');
    const email = this.email; // Assuming you have a variable 'email' bound to the input field
    // Simulate sending OTP via email (you would typically call an API here)
    // For simplicity, let's assume OTP is 123456
    const emailData = {
      to: email,
      subject: 'Forgot Password OTP',
      text: 'Your OTP for resetting the password is: 123456' // Replace with actual OTP generated in backend
    };
    this.emailService.sendEmail(emailData).subscribe(
      response => {
        console.log('Email sent successfully:', response);
        // Handle success, e.g., display a success message to the user
      },
      error => {
        console.error('Error sending email:', error);
        // Handle error, e.g., display an error message to the user
      }
    );
    const generatedOTP = '123456';

    // Display OTP verification form
    this.otpVerified = false;

    // TODO: Send OTP via email or any other method
    // Example: this.authService.sendOTP(this.email, generatedOTP);
// Navigate to OTP verification page upon successful email validation
this.router.navigate(['/otp']);

    console.log('OTP sent:', generatedOTP);
  }

  verifyOTP() {
    // TODO: Call API to verify OTP
    // Example: this.authService.verifyOTP(this.email, this.otp);

    // For simplicity, let's assume OTP is 123456
    const correctOTP = '123456';

    if (this.otp === correctOTP) {
      this.otpVerified = true;
    } else {
      alert('Invalid OTP. Please try again.');
    }
  }

  // TODO: Implement password reset functionality
  // Example: this.authService.resetPassword(this.email, newPassword);
}

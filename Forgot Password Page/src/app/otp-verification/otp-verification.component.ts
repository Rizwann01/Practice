import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service'; // Adjust the path if needed

@Component({
  selector: 'app-otp-verification',
  templateUrl: './otp-verification.component.html',
  styleUrls: ['./otp-verification.component.css']
})
export class OtpVerificationComponent {
  otp: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private apiService: ApiService) { }



  verifyOTP() {
    // Send OTP for verification
    this.apiService.verifyOTP(this.otp).subscribe(
      (response) => {
        console.log('OTP verification response:', response);
        if (response && response.valid !== undefined) {
          if (response.valid) {
            // If OTP is valid, display success message and navigate to the next page
            alert('OTP verification successful');
            // If OTP is valid, navigate to the success page
            this.router.navigate(['/password-reset-success']);
          } else {
            // If OTP is invalid, display an error message
            alert('Invalid OTP. Please try again.');
          }
        } else {
          // If response is not valid JSON, display an error message
          alert('An error occurred while verifying OTP. Please try again Later.');
        }
      },
      error => {
        console.error('Error verifying OTP:', error);
        // Handle error, e.g., display an error message to the user
        alert('An error occurred while verifying OTP. Please try again later.');
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  signupForm!: FormGroup;
  message: string = "";
  className = 'd-none'
  isProcess: boolean = false;
  
  constructor(private fb: FormBuilder, private auth: AuthService) {
    this.signupForm = this.fb.group({
      'displayName': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
    })
  }
  
  ngOnInit(): void {
  }

  signup() {
    if (this.signupForm.valid) {
      this.auth.signup(this.signupForm.value).subscribe({
        next: (_res) => {
          this.isProcess = false;
          this.message = "Account has been Created!"
          this.className = 'alert alert-success'
          this.signupForm.reset();
        },
      
        error: () => {
          //alert('error while adding')
          this.isProcess = false;
          this.message = "res.message";
          this.className = 'alert alert-danger'
        },
        
        
        
      })
    }
  }
}

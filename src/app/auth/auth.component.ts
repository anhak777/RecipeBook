import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    this.isLoading = true;

    if (this.isLoginMode) {
      this.authService.login(email, password).subscribe(
        {
          next: (resData) => {
            console.log(resData);
            this.isLoading = false;
            this.router.navigate(['/recipes']);
          },
          error: (errorMessage) => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
          }
        }
      )
    } else {
      this.authService.signup(email, password).subscribe(
        {
          next: (resData) => {
            console.log(resData);
            this.isLoading = false;
            this.router.navigate(['/recipes']);
          },
          error: (errorMessage) => {
            console.log(errorMessage);
            this.error = errorMessage;
            this.isLoading = false;
          }
        }
        // resData => {
        //   console.log(resData);
        //   this.isLoading = false;
        // },
        // errorMessage => {
        //   console.log(errorMessage);
        //   this.error = errorMessage;
        //   this.isLoading = false;
        // }
      );
    }
    form.reset();
  }
}

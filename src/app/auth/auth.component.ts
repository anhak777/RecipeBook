import { Subscription } from 'rxjs';
import { PlaceholderDirective } from './../shared/placeholder/placeholder.directive';
import { AlertComponent } from './../shared/alert/alert.component';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy{
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string | null = null;
  @ViewChild(PlaceholderDirective, {static: false}) alertHost: PlaceholderDirective;

  private closeSub: Subscription;

  constructor(private authService: AuthService, private router: Router, private componentFactoryResolver: ComponentFactoryResolver) { }

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
            this.showErrorAlert(errorMessage);
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
            this.showErrorAlert(errorMessage);
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

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
    if( this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

  private showErrorAlert(message: string) {
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);

    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      this.onHandleError();
      hostViewContainerRef.clear();
    })
  }

}

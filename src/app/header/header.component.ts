import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated: boolean = false;
  private userSub!: Subscription;

  constructor(
    private DataStorageService: DataStorageService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;  // this is the same - !user ? false : true
      console.log(!user);
      console.log(!!user);
    });
  }

  onSaveData() {
    this.DataStorageService.storeRecipes();
  }

  onFetchData() {
    this.DataStorageService.fetchRecipes().subscribe();
  }

  onLogOut() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}

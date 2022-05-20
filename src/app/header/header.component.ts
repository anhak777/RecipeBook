import { DataStorageService } from './../shared/data-storage.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // @Output() featureSelected = new EventEmitter<string>();

  constructor(private DataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  onSaveData() {
    this.DataStorageService.storeRecipes();
  }

  onFetchData() {
    this.DataStorageService.fetchRecipes().subscribe();
  }

}

import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  navbarItems: MenuItem[] = [{label: 'דף הבית', icon: 'pi pi-fw pi-home'}];

  constructor() {
  }

  ngOnInit(): void {
  }
}

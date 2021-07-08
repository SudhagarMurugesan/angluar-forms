import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  name='Your Biz Name';
  download='Download Web App';
  constructor() { }

  ngOnInit(): void {
  }

}

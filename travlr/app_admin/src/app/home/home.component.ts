import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private authenticationSerivce: AuthenticationService) {}

  public isLoggedIn(): boolean {
    return this.authenticationSerivce.isLoggedIn();
  }
}

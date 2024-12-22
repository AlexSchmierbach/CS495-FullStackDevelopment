import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user'

@Component({
  selector: 'app-login',
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public formError: string = '';

  public credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationSerivce: AuthenticationService
  ) {}

  ngOnInit(): void {}

  public onLoginSubmit(): void {
    this.formError = '';
    if (!this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again.';
    } else {
      this.doLogin();
    }
  }

  private doLogin(): void {
    this.authenticationSerivce.login(this.credentials)
      .then(() => this.router.navigateByUrl('#'))
      .catch((message) => this.formError = message);
  }
}

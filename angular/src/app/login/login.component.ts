import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { User } from '../interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {

    var user: User = {
      username: 'wp_user',
      password: 'wp_password'
    };

    this.authService.login(user)
      .subscribe((response: any) => {
        console.log(response);
      });
  }

}

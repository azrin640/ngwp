import { Injectable } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators'
import { throwError, Observable } from 'rxjs';
import { Auth } from 'src/app/interface/auth';
import { User } from 'src/app/interface/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'  
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(user: User)
  {    
    return this.http.post('http://localhost:8000/wp-json/jwt-auth/v1/token', user)
      .pipe(
        catchError( error => throwError(error)),
        map((result: Auth) => {
          console.log(result);
          if(result && result.token){
            localStorage.setItem("token", result.token);
            return result;
          }else{
            return result;
          }
        })
      );
  
  }

  isLoggedIn()
  {
    let body = {};
    let req = this.http.post('http://localhost:8000/wp-json/jwt-auth/v1/token/validate', body)
      .pipe(
        catchError(error => throwError(error))        
      );
    return req;
  }

  logout()
  {
    localStorage.removeItem("token");
    this.router.navigate(['/']);
  }


}

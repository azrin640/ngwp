import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
        const authToken = localStorage.getItem('token');            
        const authReq = req.clone({ setHeaders: { Authorization: authToken }});
        return next.handle(authReq);
    }

}

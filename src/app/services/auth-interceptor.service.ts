import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  token: string;
  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = this.authService.getAuthToken();
    if(this.authService.isLoggedIn && this.token.length > 0){
      const tokenizedReq = req.clone({ headers: req.headers.set('Authorization', `Bearer ${this.token}`)});
      return next.handle(tokenizedReq);
    }
    return next.handle(req);
  }
}

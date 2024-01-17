import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("hello");
    const idToken = localStorage.getItem("idToken");

    if (idToken) {
      const cloned = request.clone({
        headers: request.headers.set("Authorization", "Bearer " + idToken)
      });

      return next.handle(cloned);
    } else {
      return next.handle(request);
    }
  }
}

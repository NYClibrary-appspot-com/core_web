import { Injectable } from '@angular/core';
import {
HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs';
@Injectable()
export class loadBalancer implements HttpInterceptor {

  constructor() {}
  readonly rootUrl = "https://back-end-258822.appspot.com/";
  readonly secondUrl = "https://dummy.com/";
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // const duplicateUrl = request.clone({ url : this.rootUrl + request.url });
    // return next.handle(duplicateUrl);


    console.log(request.url)
    return next.handle(request)

  }



}
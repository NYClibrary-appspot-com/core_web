import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { finalize } from "rxjs/operators";

@Injectable()
export class loadblancer implements HttpInterceptor {
  pendingRequestsCount = 0;

  readonly rootUrl = "https://back-end-258822.appspot.com/";
  readonly secondUrl = "www.google.com";
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const d = new Date();
    const n = d.getMilliseconds();
    this.pendingRequestsCount++;
    console.log(n);
    if (n < 500 && this.pendingRequestsCount > 5) {
      const dupReq = request.clone({ url: this.secondUrl + request.url });
      return next
        .handle(dupReq)
        .pipe(finalize(() => this.pendingRequestsCount--));
    } else {
      const dupReq = request.clone({ url: this.rootUrl + request.url });
      return next
        .handle(dupReq)
        .pipe(finalize(() => this.pendingRequestsCount--));
    }
  }
}

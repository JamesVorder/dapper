
import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class Interceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        console.log('intercepted ' + req.url);
        if (!environment.production) {
            return next.handle(req.clone({ url: 'http://localhost:3000/dapps' }));
        } else {
            return next.handle(req);
        }
    }
}
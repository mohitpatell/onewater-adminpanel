import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor{

    constructor(public auth: AuthService){}

    intercept(req:HttpRequest<any>, next:HttpHandler){

        const authToken =localStorage.getItem('FAdmitstoken');
         const token=req.clone({
                headers: req.headers.set("Authorization", "Bearer "+ authToken)
            })

           // console.log("Send token",token);

            return next.handle(token);

    }
}

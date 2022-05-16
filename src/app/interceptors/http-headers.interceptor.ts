import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptable implements HttpInterceptor{
    constructor() {}
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        req = req.clone({setHeaders: 
            {"X-RapidAPI-Host" : "rawg-video-games-database.p.rapidapi.com",
             "X-RapidAPI-Key" : "145db81ff3msh00f5dfac0832ab9p119169jsnd59f56a7109e"},
            setParams:
            {
                key: "cebdc43db86a4dcb9e934f4543b7300a"
            }});
            return next.handle(req);
    }
}
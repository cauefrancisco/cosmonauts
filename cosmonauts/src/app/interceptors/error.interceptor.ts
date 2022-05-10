import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { EHttpStatusCode } from "../enums/http-status-code.enum";
import { EStatusCode } from "../enums/status-code.enum";



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    private readonly AUTH_ERROR_OBJECT: any = { status: 401, message: ['Erro de autenticação']};
    // private readonly URL_REFRESH_TOKEN = `${Environment.apiAccessManager}Authentication/refreshtoken`;


    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap((result: any) => {
                if(result?.status === EHttpStatusCode.OK && result?.body.status === EStatusCode.ERROR) {
                    throw{ status: 999, messages: result?.body.messages ?? 'Erro desconhecido' }; 
                }
            }),
        );
    }
}
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { JwtDecoderService } from './jwt-decoder.service'; 
import { Storage } from '@ionic/storage-angular';

@Injectable()
export class customInterceptor implements HttpInterceptor {
  constructor(
    private storage: Storage,
    private jwtDecoderService: JwtDecoderService  // Injeta o serviço JwtDecoderService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.storage.create()).pipe(  // Inicializa o Storage e continua em um fluxo Observable
      switchMap(() => from(this.storage.get('accessToken'))),  // Obtém o token do Storage de forma assíncrona
      switchMap((myToken: string | null) => {
        if (myToken) {
          const decodedToken = this.jwtDecoderService.decodeToken(myToken);  // Usa o serviço para decodificar o token
          const isExpired = decodedToken && decodedToken.exp ? decodedToken.exp < Date.now() / 1000 : false;

          if (isExpired) {
            return from(this.storage.remove('accessToken')).pipe(
              switchMap(() => next.handle(req))  // Continua sem o token se ele estiver expirado
            );
          }

          // Clona a requisição e adiciona o cabeçalho Authorization
          const clonedRequest = req.clone({
            setHeaders: {
              Authorization: `Bearer ${myToken}`
            }
          });
          return next.handle(clonedRequest);  // Continua com o token válido
        }

        return next.handle(req);  // Continua sem o token se ele não existir
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtDecoderService } from '../jwt-decoder.service';
import { Storage } from '@ionic/storage-angular'; // Importando o Storage do Ionic

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  private decodedToken: any;

  constructor(
    private jwtDecoderService: JwtDecoderService,
    private router: Router,
    private storage: Storage // Injetando o Storage
  ) {
    this.init();
  }

  async init() {
    await this.storage.create();  // Inicializando o Storage
  }

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    
    // Certifique-se de que o Storage foi inicializado
    await this.storage.create();
    
    // Recuperar o token do Storage
    const authTokenPresent = sessionStorage.getItem('accessToken');
    
    console.log(authTokenPresent);
    
    if (authTokenPresent) {
      try {
        // Tente decodificar o token
        this.decodedToken = this.jwtDecoderService.decodeToken(authTokenPresent);

        if (this.decodedToken && this.decodedToken.role) {
          console.log("Autorizado");
          return true;
        } else {
          console.log("Token sem permissões adequadas");
          return this.router.parseUrl('/notPermission');
        }
      } catch (error) {
        console.log("Erro ao decodificar o token", error);
        return this.router.parseUrl('/');
      }
    } else {
      console.log("Token não encontrado");
      return this.router.parseUrl('/');
    }
  }
}

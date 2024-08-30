import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtDecoderService } from '../jwt-decoder.service';
import { Storage } from '@ionic/storage-angular'; // Importando o Storage do Ionic

@Injectable({
  providedIn: 'root'
})
export class IsAdminService implements CanActivate {

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
    
    const authTokenPresent = await this.storage.get('accessToken');  // Obtendo o token do Storage

    if (authTokenPresent) {
      this.decodedToken = this.jwtDecoderService.decodeToken(authTokenPresent);
      if (this.decodedToken.role === "COMPANY") {
        return true;
      } else {
        return this.router.parseUrl('/notPermission');
      }     
    } else {
      return this.router.parseUrl('/');
    }
  }
}

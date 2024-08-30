import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtDecoderService } from './jwt-decoder.service';
import { Location } from '@angular/common';
import { Storage } from '@ionic/storage-angular';  // Importando o Storage do Ionic

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {
  private decodedToken: any;

  constructor(
    private jwtDecoderService: JwtDecoderService,
    private storage: Storage  // Injetando o Storage
  ) {
    this.init();
  }

  async init() {
    await this.storage.create();  // Inicializando o Storage
  }

  async canActivate(
    state: RouterStateSnapshot): Promise<boolean | UrlTree> {
    
    const authTokenPresent = await this.storage.get('accessToken');  // Obtendo o token do Storage

    return authTokenPresent ? this.validToken(authTokenPresent) : true;
  }

  validToken(authTokenPresent: string): boolean {
    this.decodedToken = this.jwtDecoderService.decodeToken(authTokenPresent);
    return this.decodedToken ? false : true;
  }
}

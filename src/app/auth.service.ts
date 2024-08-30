import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular'; // Importando o Storage do Ionic

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authTokenSubject = new BehaviorSubject<boolean>(false);

  authToken$ = this.authTokenSubject.asObservable();

  constructor(private storage: Storage) {
    this.init();
  }

  private async init() {
    await this.storage.create();  // Inicializando o Storage
    const isLoggedIn = await this.checkAuthToken();  // Verifica a presença do token na inicialização
    this.authTokenSubject.next(isLoggedIn);  // Atualiza o BehaviorSubject com o valor inicial
  }

  private async checkAuthToken(): Promise<boolean> {
    const authToken = await this.storage.get('accessToken');  // Obtendo o token do Storage
    return !!authToken;  // Retorna true se o token existir, false caso contrário
  }

  updateAuthTokenStatus(isLoggedIn: boolean) {
    this.authTokenSubject.next(isLoggedIn);  // Atualiza o estado do BehaviorSubject
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/util.service';
import { AuthService } from 'src/app/auth.service';
import { LoginService } from 'src/app/services/login.service';
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  passwordView: boolean = false;

  constructor(
    public util: UtilService,
    private authService: AuthService,
    private loginService: LoginService,
    private toastController: ToastController,
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onBack() {
    this.util.onBack();
  }

  togglePasswordView() {
    this.passwordView = !this.passwordView;
  }

  presentToast(message: string, color: string){
    this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
      position: 'top'
    }).then(toast => toast.present());
  }

  changePasswordViews() {
    this.passwordView = !this.passwordView;
  }

  onLogin() {
    if (this.loginForm.valid) {
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      this.loginService.login(email, password).subscribe({
        next: () => {
          this.authService.updateAuthTokenStatus(true);
          this.util.navigateToPage('home');
          this.presentToast('Login feito com sucesso!', 'success');
        },
        error: (err) => {
          console.error('Erro durante o login:', err);
          this.presentToast('Erro inesperado! Tente novamente mais tarde', 'danger');
      }});
    } else {
      this.presentToast('Por favor, preencha todos os campos corretamente.', 'danger');
    }
  }
}

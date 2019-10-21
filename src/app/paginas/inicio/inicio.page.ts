import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { timer } from 'rxjs/internal/observable/timer';
import { SpinnerHandlerService } from 'src/app/servicios/spinner-handler.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { ErrorHandlerService } from 'src/app/servicios/error-handler.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  private spinner:any=null;
  constructor(private navCtrl: NavController,
    private spinnerHand:SpinnerHandlerService,
    private alertCtrl:AlertController,
    private authService:AuthService,
    private errorHand:ErrorHandlerService) { }

  ngOnInit() {
  }
  //Click de botones
  public async categoryClick(category) {
    this.spinner = await this.spinnerHand.GetAllPageSpinner('Cargando...');
    this.spinner.present();
    switch (category) {
      case 'animales': {
        this.navCtrl.navigateForward('animales');
        break;
      }
      case 'numeros': {
        this.navCtrl.navigateForward('numeros');
        break;
      }
      case 'colores': {
        this.navCtrl.navigateForward('colores');
        break;
      }
    }
  }
  //cerrar sesión
  public async LogOut() {
    const alert = await this.alertCtrl.create({
      cssClass: 'avisoAlert',
      header:'¿Desea cerrar sesión?',
      buttons:[{
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Confirm Cancel');
        }
      },
    {
      text:'Ok',
      handler: async () => {
        this.spinner = await this.spinnerHand.GetAllPageSpinner('Cerrando sesión.');
        this.spinner.present();

        timer(2000).subscribe(()=>{
          this.authService.LogOut().then(() => {
          this.navCtrl.navigateRoot('login', { replaceUrl: true });
          }).catch(error => {
            this.errorHand.mostrarError(error);
          }).finally(() => {
            //timer(2000).subscribe(()=>this.spinner.dismiss());
            
          });
        });
      }
    }]
    });
    await alert.present();
    
    
  }
}

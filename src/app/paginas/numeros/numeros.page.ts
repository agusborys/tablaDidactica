import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SpinnerHandlerService } from 'src/app/servicios/spinner-handler.service';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.page.html',
  styleUrls: ['./numeros.page.scss'],
})
export class NumerosPage implements OnInit {

  public selectedLanguage = { abreviacion: 'ar' };
  public audio = new Audio();
  public contador: any = '0';
  private spinner:any=null;
  
  constructor(private navCtrl: NavController,
    private spinnerHand:SpinnerHandlerService) { }

  ngOnInit() {
  }
  public async goBack(){
    this.spinner = await this.spinnerHand.GetAllPageSpinner('Cargando...');
    this.spinner.present();
    this.navCtrl.navigateForward('inicio');
  }
  public flagClick(lenguaje) {
    this.selectedLanguage.abreviacion = lenguaje;
    console.log(`Changes to: ${lenguaje}`);
  }
  public itemSoundClick(item) {
    this.audio.src = item + '_' + this.selectedLanguage.abreviacion + '.mp3';
    console.log(this.audio.src);
    this.audio.pause();
    this.audio.load();
    this.audio.play();
  }

}

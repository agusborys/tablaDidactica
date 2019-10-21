import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SpinnerHandlerService } from 'src/app/servicios/spinner-handler.service';



@Component({
  selector: 'app-animales',
  templateUrl: './animales.page.html',
  styleUrls: ['./animales.page.scss'],
})
export class AnimalesPage implements OnInit {

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

  public animalNameClick(animal) {
    this.audio.src = animal + '_' + this.selectedLanguage.abreviacion + '.mp3';
    console.log(this.audio.src);
    this.audio.pause();
    this.audio.load();
    this.audio.play();
  }
  
  public flagClick(lenguaje) {
    this.selectedLanguage.abreviacion = lenguaje;
    console.log(`Changes to: ${lenguaje}`);
  }

}

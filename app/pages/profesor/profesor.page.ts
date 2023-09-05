import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.page.html',
  styleUrls: ['./profesor.page.scss'],
})
export class ProfesorPage implements OnInit {

  constructor(private readonly navCtrl: NavController) {}

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.navigateBack(['/']);
  }
  qr(){
    this.navCtrl.navigateForward(['/crearqr'])
  }
  registrar(){
    this.navCtrl.navigateForward(['/formulario']);
  }
}

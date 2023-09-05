import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  constructor(private readonly navCtrl: NavController) {}

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.navigateBack(['/']);
  }
  inicio(){
    this.navCtrl.navigateForward(['/leerqr']);
  }
  registrar(){
    this.navCtrl.navigateForward(['/formulario']);
  }
}

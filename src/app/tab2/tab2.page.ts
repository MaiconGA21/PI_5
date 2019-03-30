import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})



export class Tab2Page {
   listaPr:any;
   listaPu:any;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.listaPr = this.db.list('/eleicao/privada').valueChanges();
    this.listaPu = this.db.list('/eleicao/publica').valueChanges();

  }

  abrirEleicao(id){
    this.navCtrl.navigateForward('eleicao/'+id);
  }
  
  sliderConfig = {
    spaceBetween: 5,
    centeredSlides: true,
    sliderPerView: 1
  }
}
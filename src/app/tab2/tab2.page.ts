import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})



export class Tab2Page {
   lista:any;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.lista = this.db.list('/eleicao').valueChanges();
  }

  abrirEleicao(id){
    this.navCtrl.navigateForward('eleicao/'+id);
  }
}
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';




@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})


export class Eleicao {
  idEleicao: number;
  nomeVotacao: string;
  candidato: any;
  data: any;
  votosTotal: any;
}

export class Tab2Page {
   lista:any;

  constructor(public navCtrl: NavController, public db: AngularFireDatabase) {
    this.lista = this.db.list('/eleicao').valueChanges();
  }

  newEleicao:  Eleicao;
  abrirEleicao(eleicao){
    this.newEleicao.idEleicao  =  eleicao.id;
    this.newEleicao.nomeVotacao   =  eleicao.nome;
    this.newEleicao.candidato     = eleicao.candidatos;
    this.newEleicao.data          =   eleicao.data;
    this.newEleicao.votosTotal    = eleicao.votosTotal;

    this.navCtrl.navigateForward('eleicao/');
  }
}
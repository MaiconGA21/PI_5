import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { EleicaoService } from '../eleicao.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})



export class Tab2Page {
  listaPr: any;
  listaPu: any;
 

  constructor(public navCtrl: NavController, public db: AngularFireDatabase,  public eleicaoService:EleicaoService) {
    this.listaPr = this.db.list('/eleicao/privada').valueChanges();
    this.listaPu = this.db.list('/eleicao/publica').valueChanges();
    
  }
  
  abrirEleicao(eleicao,idEleicao) {
    this.eleicaoService.setCandidatos(eleicao.candidatos);
    
    this.eleicaoService.setNome(eleicao.nome);
    this.eleicaoService.setTipo(eleicao.tipo);
    this.eleicaoService.setData(eleicao.data);
    this.eleicaoService.setId(eleicao.eleicao);
    this.eleicaoService.setVotosTotal(eleicao.votosTotal);
    this.eleicaoService.setIdEleicao(idEleicao);
    this.navCtrl.navigateForward('eleicao');

  }

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  }
}


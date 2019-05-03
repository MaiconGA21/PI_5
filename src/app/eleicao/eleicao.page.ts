
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EleicaoService } from '../eleicao.service';
import { Web3ServiceService } from '../web-3-service.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-eleicao',
  templateUrl: './eleicao.page.html',
  styleUrls: ['./eleicao.page.scss'],
})
export class EleicaoPage implements OnInit {

  constructor(private route: ActivatedRoute, public eleicaoService: EleicaoService,public web: Web3ServiceService ,public db: AngularFireDatabase) { }
  eleicao: any;
  nome: string;
  id: number;
  candidatos: any;
  tipo: string;
  data: any;
  votosTotal: number;
  idEleicao: number;
  caminho: string;
  votacao:number;

  ngOnInit() {
    this.nome = this.eleicaoService.getNome();
    this.id = this.eleicaoService.getId();
    this.candidatos = this.eleicaoService.getCandidatos();
    this.tipo = this.eleicaoService.getTipo();
    this.data = this.eleicaoService.getData();
    this.votosTotal = this.eleicaoService.getVotosTotal();
    this.votacao = 0;
    this.web;
    console.log(this.candidatos);
  }

  gravarVoto(candidatos,i) {
    if (this.tipo == 'PR') {
      this.caminho = '/eleicao/privada/votacao';
    } else {
      this.caminho = '/eleicao/publica/votacao';
    }
    this.caminho +=this.id;
    candidatos[i].votosRecebidos = candidatos[i].votosRecebidos + 1;
    const gravaVoto = this.db.object(this.caminho);

    gravaVoto.update({ candidatos });
    const itemRef = this.db.object(this.caminho);
  }

}

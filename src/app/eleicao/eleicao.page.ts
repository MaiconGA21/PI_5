
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EleicaoService } from '../eleicao.service';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-eleicao',
  templateUrl: './eleicao.page.html',
  styleUrls: ['./eleicao.page.scss'],
})
export class EleicaoPage implements OnInit {

  constructor(private route: ActivatedRoute, public eleicaoService: EleicaoService, public db: AngularFireDatabase) { }
  eleicao: any;
  nome: string;
  id: number;
  candidatos: any;
  tipo: string;
  data: any;
  votosTotal: number;
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
    console.log(this.candidatos);
  }

  gravarVoto(NumCandidato,) {
    // if (this.tipo = 'PR') {
    //   this.caminho = '/eleicao/privado/';

    // } else {
    //   this.caminho = '/eleicao/publica/';

    // }
    // this.db.object('/eleicao/privada/votacao1/candidatos/v')
   
  }
/*cls
  getId(candidato) {
    let id = -1;
    for (let index = 0; index < this.candidatos.length; index++) {
      if (this.candidatos[index].NumCandidato === candidato.NumCandidato) {
        id = index;
        break;
      }
    }
    return id;
  }
*/
}

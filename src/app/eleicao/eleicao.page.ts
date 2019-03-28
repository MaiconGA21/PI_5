import { Eleicao } from './../tab2/tab2.page';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eleicao',
  templateUrl: './eleicao.page.html',
  styleUrls: ['./eleicao.page.scss'],
})
export class EleicaoPage implements OnInit {

  constructor(private route: ActivatedRoute ) { }
  eleicao:Eleicao;
  ngOnInit() {

    // this.eleicao = this.route.snapshot.paramMap.get('eleicao');
    console.log(this.eleicao.getCandidato());
  }

}

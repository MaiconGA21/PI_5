
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eleicao',
  templateUrl: './eleicao.page.html',
  styleUrls: ['./eleicao.page.scss'],
})
export class EleicaoPage implements OnInit {

  constructor(private route: ActivatedRoute ) { }
  id:any;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    alert(this.id);
  }

}

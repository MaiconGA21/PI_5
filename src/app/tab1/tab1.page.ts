import { Component } from '@angular/core';
import { ApiEleicaoService } from '../api-eleicao.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(public ApiEleicao:ApiEleicaoService, public toast:ToastController) { }

  criar() {
    
    this.ApiEleicao.createUser('12345','teste1','teste1@gmail.com')
      .then(($result:any)=>{
        this.toast.create({message:'Usuário criado com sucesso'});
      })
      .catch((error:any)=>{
        this.toast.create({message:'Erro ao  criar usuário'+error.error});
      })
  }
}

import { Component } from '@angular/core';
import { ApiEleicaoService } from '../api-eleicao.service';
import { ToastController } from '@ionic/angular';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  postData :  string;
  constructor(public ApiEleicao:ApiEleicaoService, public toast:ToastController) { }
   user:any;
  criarUsuario() {
    this.ApiEleicao.createUser('AU125aa11a00V','teste1','tesdte1@gmail.com')
      .then(($result:any)=>{
        this.toast.create({message:'Usuário criado com sucesso'});
      })
      .catch((error:any)=>{
        this.toast.create({message:'Erro ao  criar usuário '+error.error});
      })
  }

  retornarTodosUsuarios(){

      this.ApiEleicao.getUserAll()
        .then((result: any) => {
          console.log(result);
          this.toast.create({message:'Usuário criado com sucesso'});
        })
        .catch((error: any) => {
          this.toast.create({ message: 'Erro ao listar os usuários. Erro: ' + error.error });
        });

  }
}

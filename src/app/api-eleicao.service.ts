import { Injectable } from '@angular/core';
import { Http } from '@angular/http' 
import { reject } from 'q';


@Injectable({
  providedIn: 'root'
})
export class ApiEleicaoService {

  constructor(public http:Http) { }

  public API_URL = "https://us-central1-pi-ii-voto.cloudfunctions.net/api/spec";
  createUser(uid,email,nome){
    return new Promise((resolve,reject)=>{
      var data = {
        uid: uid,
        nome: nome,
        email:email
      } 
      this.http.post(this.API_URL+"/usuarios",data)
        .subscribe((result:any)=>{
          resolve(result.Json())
          console.log(result.Json());
        },
        (error)=>{
          resolve(error.Json())
          console.log(error.Json());
        })
    })

  }
 

}

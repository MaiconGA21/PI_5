import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { reject } from 'q';
import {Headers} from '@angular/http'



@Injectable({
  providedIn: 'root'
})
export class ApiEleicaoService {

  constructor(public http:Http) { }

  public API_URL = "https://us-central1-pi-ii-voto.cloudfunctions.net/api/";
  
  createUser(uid: string,email: string,nome: string){
    
    return new Promise((resolve,reject)=>{
      var data = {
        uid: uid,
        nome: nome,
        email:email
      };

      this.http.post(this.API_URL+"usuarios",data)
        .subscribe((result:any)=>{
          resolve(result.json());
        },
        (error)=>{
          reject(error);
        });
    });
  }

  getUserAll() {
    return new Promise((resolve, reject) => {
      let url = this.API_URL + 'usuarios';

      this.http.get(url)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
    });
  }
 

}

import { Injectable } from '@angular/core';
import {Pessoa} from "../model/pessoa";
import {Observable} from 'rxjs';
import {Http} from '@angular/http';
import { Headers, RequestOptions} from '@angular/http';



@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private URL = "localhost:8080/pessoa";

  constructor(private http: Http) { }

  save(pessoa: Pessoa) {
    const promise = new Promise((resolve, reject) => {
      this.http.post(this.URL, pessoa, this.getHeader())
        .toPromise()
        .then(
          res => { // Success
            resolve();
          }
        );
    });
    return promise;
  }

  // getPessoas(): Observable<Pessoa[]> {
  //   return this.http.get(this.URL, this.getHeader())
  //     .map(res => res.json())
  //     .catch((error: any) => Observable.throw(error.json() || 'Server error'));
  // }
  //
  // getPessoa(id) {
  //   return this.http.get(this.URL + '/' + id, this.getHeader())
  //     .toPromise()
  //     .then(
  //       res => {
  //         console.log(res.json());
  //       }
  //     );
  // }

  getHeader() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE, PUT');
    headers.append('Access-Control-Allow-Origin', '*');
// tslint:disable-next-line:max-line-length
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding');
    const base64 = window.btoa('adm' + ':' + '123');
    headers.append('Authorization', 'Basic ' + base64);
    return new RequestOptions({headers: headers});
  }




}

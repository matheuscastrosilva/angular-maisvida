import { Component, OnInit } from '@angular/core';
import {Pessoa} from "../model/pessoa";
import {PessoaService} from "../service/pessoa.service";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [PessoaService],
})
export class CadastroComponent implements OnInit {

  pessoa: Pessoa = new Pessoa();

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
  }

}

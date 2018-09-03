import {Component, OnInit} from '@angular/core';
import {Pessoa} from "../model/pessoa";
import {PessoaService} from "../service/pessoa.service";
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers: [PessoaService],
})
export class CadastroComponent implements OnInit {

  pessoa:Pessoa = new Pessoa();

  constructor(private pessoaService:PessoaService,
              private activatedRoute:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
  }

  save() {
    console.log(this.pessoa);
    this.pessoaService.save(this.pessoa).then(pessoa => {
      console.log('funcionou');
      setTimeout(() => {
        this.router.navigate(['/pessoa']);
      }, 1000);
    });
  }


}

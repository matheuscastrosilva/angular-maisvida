import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PessoaComponent} from './listagem/pessoa.component';
import {AppRoutingModule} from "./app-routing.module";
import {CadastroComponent} from './cadastro/cadastro.component';
import {VisualizarComponent} from './visualizar/visualizar.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import {PessoaService} from "./service/pessoa.service";
@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    CadastroComponent,
    VisualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PessoaComponent } from './listagem/pessoa.component';
import {AppRoutingModule} from "./app-routing.module";
import { CadastroComponent } from './cadastro/cadastro.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    CadastroComponent,
    VisualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

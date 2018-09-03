import {SelectivePreloadingStrategy} from './selctive-preloading-strategy';
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {PessoaComponent} from "./listagem/pessoa.component";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {VisualizarComponent} from "./visualizar/visualizar.component";

const appRoutes:Routes = [
  {path: '', component: PessoaComponent},
  {path: 'novo', component: CadastroComponent},
  {path: 'detalhes/:id', component: VisualizarComponent},
  {path: ':id', component: CadastroComponent},
];


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {preloadingStrategy: SelectivePreloadingStrategy}
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    SelectivePreloadingStrategy
  ]
})
export class AppRoutingModule {
}

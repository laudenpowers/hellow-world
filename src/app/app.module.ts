import { TituloPipe } from './pipe/titulo-texto.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { ProfessoresComponent } from './componentes/professores/professores.component';
import { AutorComponent } from './componentes/autor/autor.component';
import { ResumoDeTextoPipe } from './pipe/resumo-texto.pipe';
import { FavoritoComponent } from './componentes/favorito/favorito.component';
import { CampoTituloComponent } from './componentes/campo-titulo/campo-titulo.component';
import { PainelBootstrapComponent } from './componentes/painel-bootstrap/painel-bootstrap.component';
import { TweetComponent } from './componentes/tweet/tweet.component';
import { DiretivasComponent } from './componentes/diretivas/diretivas.component';
import { InputFormatDirective } from './componentes/diretivas-customizadas/input-format.directive';
import { ZippyComponent } from './componentes/zippy/zippy.component';
import { ContatoFormComponent } from './componentes/contato-form/contato-form.component';
import { CursoFormComponent } from './componentes/curso-form/curso-form.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    ProfessoresComponent,
    AutorComponent,
    ResumoDeTextoPipe,
    FavoritoComponent,
    CampoTituloComponent,
    TituloPipe,
    PainelBootstrapComponent,
    TweetComponent,
    DiretivasComponent,
    InputFormatDirective,
    ZippyComponent,
    ContatoFormComponent,
    CursoFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

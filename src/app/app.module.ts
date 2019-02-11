import { PostService } from './services/post.service';
import { TituloPipe } from './pipe/titulo-texto.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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
import { NovoCursoFormComponent } from './componentes/novo-curso-form/novo-curso-form.component';
import { AtualizarSenhaComponent } from './componentes/atualizar-senha/atualizar-senha.component';
import { PostsComponent } from './componentes/posts/posts.component';

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
    LoginComponent,
    NovoCursoFormComponent,
    AtualizarSenhaComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

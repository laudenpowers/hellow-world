import { AppErrorHandler } from './componentes/posts/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { PostService } from './services/post.service';
import { TituloPipe } from './pipe/titulo-texto.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

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
import { SeguidoresComponent } from './componentes/seguidores/seguidores.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PerfilGithubComponent } from './componentes/perfil-github/perfil-github.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';

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
    PostsComponent,
    SeguidoresComponent,
    PrincipalComponent,
    PerfilGithubComponent,
    NotFoundComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: PrincipalComponent },
      { path: 'seguidores', component: SeguidoresComponent },
      { path: 'perfil/:login', component: PerfilGithubComponent },
      { path: 'posts', component: PostsComponent },
      { path: '**', component: NotFoundComponent },
    ])
  ],
  providers: [
    PostService,
    {provide: ErrorHandler, useClass: AppErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ExtratorDeErroDoReponse } from './../componentes/posts/extrator-erro-response';
import { RequestInvalidoError } from './../componentes/posts/request-invalido-error';
import { AppError } from './../componentes/posts/app-error';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HostNaoEncontradoError } from '../componentes/posts/host-nao-encontrado-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private urlPosts: string;

  posts: Array<Post>;

  constructor(private http: Http) { 
    this.urlPosts = 'http://jsonplaceholder.typicode.com/p1osts';
  }

  listarPosts(): Observable<Response>{
    return this.http.get(this.urlPosts).pipe(
      catchError(
        (error: Response) => {          
          return throwError(new ExtratorDeErroDoReponse().extrairErroDo(error));
        }
      )
    );
  }

  inserir(post: Post): Observable<Response>{    
    return this.http.post(this.urlPosts, JSON.stringify(post)).pipe(
      catchError(
        (error: Response) => {          
          return throwError(new ExtratorDeErroDoReponse().extrairErroDo(error));
        }
      )
    );
  }

  alterar(post: Post): Observable<Response>{
    return this.http.put(this.urlPosts + '/' + post.id, post).pipe(
      catchError(
        (error: Response) => {
          return throwError(new ExtratorDeErroDoReponse().extrairErroDo(error));
        }
      )
    );
  }

  excluir(post: Post): Observable<Response>{
    return this.http.delete(this.urlPosts + '/' + post.id).pipe(
      catchError(
        (error: Response) => {          
          return throwError(new ExtratorDeErroDoReponse().extrairErroDo(error));
        }
      )
    );
  }

}

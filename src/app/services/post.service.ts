import { ExtratorDeErroDoReponse } from './../componentes/posts/extrator-erro-response';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private urlPosts: string;

  posts: Array<Post>;

  constructor(private http: Http) { 
    this.urlPosts = 'http://jsonplaceholder.typicode.com/posts';
  }

  listarPosts(): Observable<Array<Post>>{
    return this.http.get(this.urlPosts).pipe(
      map(
        (response: Response) => {
          return response.json();
        }
      ),
      catchError(new ExtratorDeErroDoReponse().tratarErro)
    );
  }

  inserir(post: Post): Observable<String>{    
    return this.http.post(this.urlPosts, JSON.stringify(post)).pipe(
      map(
        (response: Response) => {
          return response.json().id;
        }
      ),
      catchError(new ExtratorDeErroDoReponse().tratarErro)
    );
  }

  alterar(post: Post): Observable<Post>{
    return this.http.put(this.urlPosts + '/' + post.id, post).pipe(
      map(
        (response: Response) => {
          return response.json();
        }
      ),
      catchError(new ExtratorDeErroDoReponse().tratarErro)
    );
  }

  excluir(post: Post): Observable<Response | boolean>{
    return this.http.delete(this.urlPosts + '/' + post.id).pipe(
      map(
        (response: Response) => {
          return response.ok;
        }
      ),
      catchError(new ExtratorDeErroDoReponse().tratarErro)
    );
  }

}
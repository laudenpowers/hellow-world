import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private urlPosts: string;

  posts: Array<Post>;

  constructor(private http: Http) { 
    this.urlPosts = 'http://jsonplaceholder.typicode.com/posts';
  }

  listarPosts(): Observable<Response>{
    return this.http.get(this.urlPosts);
  }

  inserir(post: Post): Observable<Response>{    
    return this.http.post(this.urlPosts, JSON.stringify(post));
  }

  alterar(post: Post): Observable<Response>{
    return this.http.put(this.urlPosts + '/' + post.id, post);
  }

  excluir(post: Post): Observable<Response>{
    return this.http.delete(this.urlPosts + '/' + post.id).pipe(
      catchError(
        _ => (
            Observable.throw('VSF')
          )
      )
    );
  }

}

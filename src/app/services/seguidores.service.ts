import { ExtratorDeErroDoReponse } from './../componentes/posts/extrator-erro-response';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Seguidor } from '../model/seguidor.model';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeguidoresService {

  private urlPosts: string;

  seguidores: Array<Seguidor>;

  constructor(private http: Http) { 
    this.urlPosts = 'https://api.github.com/users/mosh-hamedani/followers';
  }

  listarSeguidores(): Observable<Array<Seguidor>>{
    
    return this.http.get(this.urlPosts).pipe(
      map(
        (response: Response) => {
          return response.json();
        }
      ),
      catchError(new ExtratorDeErroDoReponse().tratarErro)
    );

  }

}

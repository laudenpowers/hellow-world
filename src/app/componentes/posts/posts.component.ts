import { PostService } from './../../services/post.service';
import { Post } from './../../model/post.model';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, scan, filter } from 'rxjs/operators';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Array<any>;  

  constructor(private postService: PostService) { 
    
  }

  ngOnInit() {

    this.postService.listarPosts().subscribe(
      (postsEncontrados: Array<Post>) => {        
        this.posts = postsEncontrados;
      }
    );

  }

  salvarPost(edtTituloPost: HTMLInputElement): void{

    let post = new Post('', edtTituloPost.value);


    this.postService.inserir(post).subscribe(
      (idSalvo: string) => {
        post.id = idSalvo;
      }
    );

    console.log('Id salvo ==> ' + post.id);

    edtTituloPost.value = '';

  }

  atualizarPost(post: Post): void{
    
    this.postService.alterar(post).subscribe(
      (postAtualizado: Post) => {
        console.log(postAtualizado.title);
      }
    );

  }

  excluirPost(post: Post): void{
    
    this.postService.excluir(post).subscribe(
      (isRemovido: boolean) => {

        console.log('Removido? ' + isRemovido);

        if (isRemovido){
          this.posts.splice(this.posts.indexOf(post), 1);
        }

      }
    );

  }  

  testar(){
    this.getNumeros().pipe(
      map(
        n => {
          n + 10; 
          return n
        }
      )
    ).subscribe(result => console.log(result));

   this.getOpcoes().pipe(
     map(
       (opcao: boolean) => {
         return !opcao;
       }
     )
   ).subscribe(
     opcao => {
       console.log(opcao)
      }
    );

  }

  getNumeros(): Observable<number>{
    return of(1, 2, 3, 4, 5, 6, 7);
  }

  getOpcoes(): Observable<boolean>{
    return of(true, false);
  }; 

}

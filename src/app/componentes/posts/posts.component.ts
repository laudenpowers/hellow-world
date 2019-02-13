import { AppError } from './app-error';
import { PostService } from './../../services/post.service';
import { Post } from './../../model/post.model';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

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
      response => {        
        this.posts = response.json();
      },(error: AppError) => {
        alert(error.msgPrincipal);
        console.log(error.erroOriginal);
      }
    );

  }

  salvarPost(edtTituloPost: HTMLInputElement): void{

    let post = new Post('', edtTituloPost.value);


    this.postService.inserir(post).subscribe(
      response => {
        post.id = response.json().id;
      },(error: AppError) => {
        alert(error.msgPrincipal);
        console.log(error.erroOriginal);
      }
    );

    console.log('Id salvo ==> ' + post.id);

    edtTituloPost.value = '';

  }

  atualizarPost(post: Post): void{
    
    this.postService.alterar(post).subscribe(
      response => {
        console.log(response);
      },(error: AppError) => {
        alert(error.msgPrincipal);
        console.log(error.erroOriginal);
      }
    );

  }

  excluirPost(post: Post): void{
    
    this.postService.excluir(post).subscribe(
      response => {
        console.log(response);
        this.posts.splice(this.posts.indexOf(post), 1);
      },(error: AppError) => {
        alert(error.msgPrincipal);
        console.log(error.erroOriginal);
      }
    );

  }  

}

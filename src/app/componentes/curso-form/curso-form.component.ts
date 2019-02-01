import { CursoNovo } from './../../model/curso-novo.model';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/model/categoria.model';

@Component({
  selector: 'curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {

  categorias: Array<Categoria>;

  constructor() { 
    this.categorias = new Array<Categoria>(new Categoria(1, 'Programação'), 
        new Categoria(2, 'Artes'), new Categoria(1, 'Administração'));
  }

  ngOnInit() {
  }

  salvar(formulario): void{
    let curso : CursoNovo = Object.assign({}, formulario.value);
    console.log('==> ' + curso.nome);
    console.log('==> ' + curso.categoria.descricao);
    console.log('==> ' + curso.categoria.codigo);
    console.log('==> ' + curso.isDevolver);
  }

}

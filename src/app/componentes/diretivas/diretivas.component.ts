import { Atendente } from './../../model/atendente.model';
import { Tarefa } from './../../model/tarefa.model';
import { Curso } from './../../model/curso.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.css']
})
export class DiretivasComponent implements OnInit {

  cursos: Array<Curso>;

  modoDeVisualizacao: string;

  isPodeSalvar: boolean;

  tarefa: Tarefa;

  constructor() {

    this.modoDeVisualizacao = 'OutroValor';

    this.isPodeSalvar = true;
    
    let atendente: Atendente = new Atendente(1, 'Laudelino');

    this.tarefa = new Tarefa(1, 'Atualização de DLL', atendente);

    this.cursos = new Array<Curso>();

  }

  carregarCursos(): void{    
    this.cursos.push(new Curso('001', 'Medicina'));
    this.cursos.push(new Curso('002', 'Administração'));
    this.cursos.push(new Curso('003', 'Engenharia'));
    this.cursos.push(new Curso('004', 'Mecânica'));
  }

  adicionarCurso(): void{
    this.cursos.push(new Curso('***', 'Curso adicionado'));
  }

  remover(curso: Curso){
    let posicaoNaLista: number = this.cursos.indexOf(curso);
    this.cursos.splice(posicaoNaLista, 1);
  }

  removerCursos(): void{
    this.cursos = new Array<Curso>();
  }

  isShowCursos(): boolean{
    return this.cursos.length > 0;
  }

  identificarCurso(indice: number, curso: Curso){
    return curso ? curso.codigo : undefined;
  }

  ngOnInit() {
  }

}

import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'novo-curso-form',
  templateUrl: './novo-curso-form.component.html',
  styleUrls: ['./novo-curso-form.component.css']
})
export class NovoCursoFormComponent implements OnInit {

  frmNovoCurso: FormGroup;

  constructor() { 
    this.criarValidador();
  }

  private criarValidador(): void{
    this.frmNovoCurso = new FormGroup({
      topicos: new FormArray([])
    });
  }

  incluirTopico(edtTopico: HTMLInputElement): void{
    this.topicos.push(new FormControl(edtTopico.value));
    edtTopico.value = '';
  }

  removerTopico(topico: FormControl): void{
    let posicao: number = this.topicos.controls.indexOf(topico);
    this.topicos.removeAt(posicao);
  }

  ngOnInit() {
  }

  get topicos(){    
    return this.frmNovoCurso.get('topicos') as FormArray;
  }

}

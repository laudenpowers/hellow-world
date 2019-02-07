import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'atualizar-senha',
  templateUrl: './atualizar-senha.component.html',
  styleUrls: ['./atualizar-senha.component.css']
})
export class AtualizarSenhaComponent implements OnInit {

  frmAtualizarSenha: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.criarValidador();
  }

  private criarValidador(): void{
    this.frmAtualizarSenha = this.fb.group({
      'senhaAntiga': ['', Validators.required],
      'senhaNova': ['', Validators.required],
      'senhaConfirmada': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  atualizarSenha(): void{

    if (this.frmAtualizarSenha.hasError){
      console.log('Formulário inválido');
    }else{
      console.log('Atualizando');
    }

  }

  get senhaAntiga(): AbstractControl{
    return this.frmAtualizarSenha.get('senhaAntiga');
  }

  get senhaNova(): AbstractControl{
    return this.frmAtualizarSenha.get('senhaNova');
  }

  get senhaConfirmada(): AbstractControl{
    return this.frmAtualizarSenha.get('senhaConfirmada');
  }

}

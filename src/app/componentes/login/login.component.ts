import { UsuarioValidators } from './usuario.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  frmLogin: FormGroup;

  constructor() { 
    this.criarValidador();
  }

  private criarValidador(): void{
    this.frmLogin = new FormGroup({
      'usuario': new FormControl('', 
      [
        Validators.required, 
        Validators.minLength(3), 
        UsuarioValidators.semEspacos
      ],
      [
        UsuarioValidators.unico
      ]),
      'senha': new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
  }

  get usuario(): AbstractControl{
    return this.frmLogin.get('usuario');
  }

  get senha(): AbstractControl{
    return this.frmLogin.get('senha');
  }

  logar(){
    console.log('Teste');
  }

}

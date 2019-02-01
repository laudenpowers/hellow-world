import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  private autores: Array<string>;

  constructor() { 
    this.carregarAurores();
  }

  private carregarAurores(): void{
    this.autores = new Array<string>();
    this.autores.push('Autor 1');
    this.autores.push('Autor 2');
    this.autores.push('Autor 3');
    this.autores.push('Autor 4');
  }

  getAutores(): Array<string>{
    return this.autores;
  }

}

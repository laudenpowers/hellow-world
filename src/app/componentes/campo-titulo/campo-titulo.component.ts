import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campo-titulo',
  templateUrl: './campo-titulo.component.html',
  styleUrls: ['./campo-titulo.component.css']
})
export class CampoTituloComponent implements OnInit {

  titulo: string;

  constructor() { 
    this.titulo = '';
  }

  ngOnInit() {
  }

}

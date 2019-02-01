import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})
export class FavoritoComponent implements OnInit {

  @Input('isFavoritado')
  isFavoritado: boolean;

  @Output('change')
  change = new EventEmitter();

  constructor() { 
    this.isFavoritado = false;    
  }

  ngOnInit() {
    
  }

  favoritar(): void{
    this.isFavoritado = !this.isFavoritado;
    this.change.emit({novoValor: this.isFavoritado});
  }

}

import { AutorService } from './../../services/autor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  autores: Array<string>;

  titulo: string;

  colSpan: number;

  isAtivo: boolean;

  nomeCompleto: string;

  textoLongo: string;

  curso: {};

  constructor(private autorService: AutorService) { 
    this.autores = autorService.getAutores();
    this.titulo = 'Listagem de Autores';
    this.colSpan = 2;
    this.isAtivo = true;
    this.nomeCompleto = '';
    this.criarCurso();
    this.textoLongo = 'AHIHAIDHAidhaisdhiashdiahsidhaisdaisiSIDhasihdiasidasdhiSIdhasihdiSAHididHAIsdhuasidhiaShdiADhIDID';
  }

  private criarCurso(){
    this.curso = {
      titulo: 'Curso de Angular',
      nota: 5.6905685,
      estudantesMatriculados: 30123,
      preco: 190.95,
      dataDeLancamento: new Date(2019, 0, 17)
    };
  }

  ngOnInit() {
  }

  getLinkDaImagem(): string{
    return 'http://lorempixel.com/400/200';
  }

  salvar(): void{
    console.log('Salvando...');
  }

  salvarComPassagemDeEvento($evento): void{
    console.log('Salvar com evento -> ', $evento);
  }

  //Tratamento de teclado padrão com js
  onKeyUp($event): void{
    if ($event.keyCode === 13){
      console.log('A tecla enter foi pressionada');
    }
  }

  onKeyUpAngular(): void{
    console.log('Filtro de teclas ativado');
  }

  apresentarValorDoCampo(valorDoCampo: string): void{
    console.log(valorDoCampo);
  }
  
  apresentarNomeCompleto(){
    console.log(this.nomeCompleto);
  }

}

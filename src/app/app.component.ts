import { SetupTweet } from './componentes/tweet/tweet.component';
import { ArgsDaAlteracaoDeFavorito } from './model/ArgsDaAlteracaoDeFavorito';
import { LikeComponent } from './model/like.component';
import { Ponto } from './model/Ponto';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Aplicação';

  post: {};

  setup: SetupTweet;

  constructor(){

    console.log('Chiqueirinho');

    this.post = {
      titulo: 'Angular',
      isFavoritado: true
    };

    this.setup = new SetupTweet('Novo Teste', true, 147);

    //Tipos de variáveis do typescript
    let a: number;

    let b: boolean;

    let c: string;

    let d: any;

    //Arrays
    let e: number[] = [1, 2, 3];

    let f: any[] = [1, true, 'a', false];//Evitar esse tipo de prática

    //Constantes em js padrão
    const CorVermelho = 0;

    const CorVerde = 1;

    const CorAzul = 2;

    //Enum em type script
    enum Cores {VERMELHO, VERDE, AZUL};

    enum Tamanhos{PEQUENO = 0, MEDIO = 1, GRANDE = 2};//Exemplo de como atribuir indices explicitos

    let corDeFundo = Cores.AZUL;//Exemplo de uso

    let tamanho = Tamanhos.GRANDE;

    //Formas de asserções de tipo de váriaveis
    let mensagem;//Assumo o tipo any
    
    mensagem = 'abc';

    let endsWithC = (<string>mensagem).endsWith('c');//Primeira forma de fazer cast

    let jeitoAlternativo = (mensagem as string).endsWith('c');//Outra forma de fazer cast

    console.log(endsWithC + ' - ' + jeitoAlternativo);

    //Arrow Functions
    let log = function(mensagem){//Jeito padrão de criar funções em js
      console.log(mensagem);
    };

    let outroLog = (mensagem) => {//Primeira forma de uma arrow function
      console.log(mensagem);
    };

    //Segunda forma, utilizada quando existe apenas uma linha na função
    let maisUmLog = (mensagem) => console.log(mensagem);

    //Terceira forma, quando não existe parâmetro de entrada
    let logExtra = () => console.log('Sem parâmetros');

    //Inline annotation. Mecanismo que permite tipificação customizada de 
    //parâmetros sem recorrer a uma classe propriamente dita.
    let desenharPonto = (ponto: {x: number, y: number}) => {
      //Desenha o ponto
    };
    
    //Criando interfaces para tipificação
    interface IPonto{
      x: number,
      y: number
    }

    let pontoInterfaceado = (ponto: IPonto) => {
      //Desenha ponto
    };

    let ponto: Ponto;
    ponto = new Ponto(1, 2);
    ponto.desenhar();
    ponto.QtdeDePixels = 100;
    console.log('ponto.QtdeDePixels = ' + ponto.QtdeDePixels);

    let outroPonto: Ponto = new Ponto();
    outroPonto.desenhar();

    let likeComponente: LikeComponent = new LikeComponent(10, true);

    likeComponente.aoClicar();

    console.log(`Contagem de likes: ${likeComponente.totalDeLikes}, isSelecionado? ${likeComponente.isSelecionado}`);

  }

  aoMudarFavoritando(argumentosDoEvento: ArgsDaAlteracaoDeFavorito){
    console.log('Favoritando? ', argumentosDoEvento.novoValor ? 'Sim' : 'Não');
  }

}

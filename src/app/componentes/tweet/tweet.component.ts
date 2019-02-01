import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.component.html',
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {  

  @Input('setupTweet')
  setup: SetupTweet;  

  constructor() {
  }

  ngOnInit() {
    
  }

}

export class SetupTweet{

  constructor(private _texto: string, private _isLikeAtivado: boolean, 
      private _qtdeDeLikes: number){

  }

  atualizar(){
    this._isLikeAtivado = !this._isLikeAtivado;
    this._qtdeDeLikes += (this._isLikeAtivado) ? 1 : -1;
  }

  get texto(): string{
    return this._texto;
  }

  get isLikeAtivado(): boolean{
    return this._isLikeAtivado;
  }

  get qtdeDeLikes(): number{
    return this._qtdeDeLikes;
  }

}
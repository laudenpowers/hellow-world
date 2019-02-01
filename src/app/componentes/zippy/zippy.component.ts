import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  @Input('titulo')
  titulo: string;

  @Input('prefixoDoComponente')
  prefixoDoComponente: string;

  constructor() { 
    
  }

  ngOnInit() {
  }

  getIdAccordion(complemento: string): string{
    if (complemento != undefined || complemento != null){
      return complemento + 'accordion-' + this.prefixoDoComponente;
    }    
    return 'accordion-' + this.prefixoDoComponente;
  }

  getIdCollapse(complemento: string): string{

    if (complemento != undefined || complemento != null){
      return complemento + 'collapse-' + this.prefixoDoComponente;
    }  

    return 'collapse-' + this.prefixoDoComponente;
    
  }

}

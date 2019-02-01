import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat')
  formato: string;

  constructor(private el: ElementRef) { 

  }

  @HostListener('focus')
  aoReceberFoco(): void{
    console.log("Recebeu o foco");
  }

  @HostListener('blur')
  aoPerderFoco(): void{
    let valorDoCampo: string = this.el.nativeElement.value;

    if (this.formato == 'lowercase'){
      this.el.nativeElement.value = valorDoCampo.toLowerCase();
    }else{
      this.el.nativeElement.value = valorDoCampo.toUpperCase();
    }

  }

}

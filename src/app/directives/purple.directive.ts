import { Directive, ElementRef } from '@angular/core';

// criando attribute directive para alterar a cor do coracao footer
@Directive({
  selector: '[appPurple]'
})
export class PurpleDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#5f2aa5'
   }
}

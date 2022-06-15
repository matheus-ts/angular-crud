import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

// aplicando structural directive
@Directive({
  selector: '[myFor]'
})
export class ForDirective implements OnInit{

  // criando variaveis que vao armazenar o conteudo do *myFor
  @Input('myForEm') numbers: number[] = []

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>) {
  }

  ngOnInit(): void {
    for (let number of this.numbers){
      this.container.createEmbeddedView(
        
        // armazena os valores do array numbers em um template no html
        this.template,
        // faz ser possivel a visualizacao dos valores de n no html
        { $implicit: number })
    }
  }
}

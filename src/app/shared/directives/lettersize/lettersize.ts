import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appLettersize]',
  standalone: false
})
export class Lettersize implements OnInit{

  constructor(private elemento: ElementRef, private renderer: Renderer2) {}
ngOnInit(): void {
    const fontSize = '20px';

    this.renderer.setStyle(
      this.elemento.nativeElement,
      'font-size',
      fontSize
    );
    console.log('Estilo de 20px aplicado.');
  }
}

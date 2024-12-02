// sitter-status.directive.ts
import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSitterStatus]'
})
export class SitterStatusDirective implements OnInit {

  @Input() appSitterStatus: boolean | undefined; // Input property to accept the avail status

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    if (this.appSitterStatus) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'green'); // Avail status (green)
      this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
      this.renderer.setProperty(this.el.nativeElement, 'innerText', 'Available');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red'); // Unavail status (red)
      this.renderer.setStyle(this.el.nativeElement, 'color', 'white');
      this.renderer.setProperty(this.el.nativeElement, 'innerText', 'Unavailable');
    }

    this.renderer.setStyle(this.el.nativeElement, 'padding', '5px 10px');
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', '5px');
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', 'bold');
  }
}

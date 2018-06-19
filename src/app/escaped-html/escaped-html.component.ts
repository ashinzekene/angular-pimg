import { Component, AfterViewInit, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-escaped-html',
  templateUrl: './escaped-html.component.html',
  styleUrls: ['./escaped-html.component.css']
})
export class EscapedHtmlComponent implements AfterViewInit, OnInit {
  @Input() bgColor = 'rgb(1, 10, 42)';
  @Input() color = '#ccc';
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.bgColor;
    this.el.nativeElement.style.color = this.color;
    this.el.nativeElement.style.padding = '20px';
    this.el.nativeElement.style.borderRadius = '10px';
  }

  ngAfterViewInit() {
    const input: string = this.el.nativeElement.innerHTML;
    this.el.nativeElement.textContent = input.replace(/\s_ngcontent-c0=""/g, '');
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  srcSha = ''
  src = 'https://cdn-images-1.medium.com/max/800/0*RuekjsfQg15Gs3KU.jpg'

  changeSrc() {
    this.src = this.srcSha
  }
}

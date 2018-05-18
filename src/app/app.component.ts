import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  srcSha = ''
  src = 'https://res.cloudinary.com/stackpie/image/upload/c_thumb/v1514275012/assassins_creed_revelations_concept_art-wallpaper-1366x768_qdl9vo.jpg'

  changeSrc() {
    this.src = this.srcSha
  }
}

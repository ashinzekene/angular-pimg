import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  srcSha = '';
  src = 'http://res.cloudinary.com/ashinzekene/image/upload/c_scale,h_536,q_25,w_1056/v1511573958/frontstack/abuja.jpg';

  changeSrc() {
    this.src = this.srcSha;
  }
}

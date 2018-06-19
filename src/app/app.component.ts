import { Component } from '@angular/core';
import { images } from './images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  images = images;
  // tslint:disable-next-line:max-line-length
  src1 = 'https://images.unsplash.com/photo-1514041790697-53f1f86214d2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b7ac79503fbe78855a346c8d814f95ba&auto=format&fit=crop&w=500&q=60';
  src2 = 'http://res.cloudinary.com/ashinzekene/image/upload/c_scale,h_536,q_25,w_1056/v1511573958/frontstack/abuja.jpg';
}

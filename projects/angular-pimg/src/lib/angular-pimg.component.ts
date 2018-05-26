import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, ElementRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AngularPimgService } from './angular-pimg.service';
import { AngularPimgOptions } from './config-options';

@Component({
  selector: 'angular-pimg',
  templateUrl: 'angular-pimg.component.html',
  styles: []
})
export class AngularPimgComponent implements OnChanges {
  @Input() dataSaver: any;
  @Input() src: string;
  @Input() fetchOnDemand: boolean;
  @Input() placeholder: string;
  @Input() placeholderClassName: string;
  @Input() className: string;
  @Input() style: any = { display: 'block' };
  @Output() fetched: EventEmitter<null> = new EventEmitter();
  @Output() error: EventEmitter<any> = new EventEmitter();
  wrapperClassName = '';
  buttonClassName = '';
  blob: SafeUrl = '';
  delayed: boolean;
  loading: boolean;
  classes: string;
  private isIntersecting = false;

  constructor(private el: ElementRef, private domSanitizer: DomSanitizer, private options: AngularPimgService) {
    this.insertInput();
    this.setUp();
  }

  setFetchOnDemand() {
    const observer = new IntersectionObserver(entries => {
      const image = entries[0];
      if (image.isIntersecting && !this.isIntersecting) {
        this.fetchImage();
        this.isIntersecting = true;
        console.log('Called by intersection API');
        this.delayed = false;
        observer.disconnect();
      }
    });
    observer.observe(this.el.nativeElement);
  }

  fetchImage() {
    fetch(this.src)
      .then(res => res.blob())
      .then(res => {
        console.log(res);
        this.blob = this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res));
        this.loading = false;
        this.isIntersecting = false;
        this.delayed = false;
        this.fetched.emit();
      })
      .catch(err => {
        this.error.emit(err);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    const newValues: any = {};
    const props = ['src', 'fetchOnDemand', 'placeholder', 'placeholderClassName', 'className', 'style'];
    for (const prop in changes) {
      if (props.findIndex(val => val === prop) > 0 && !this.isUndefined(changes[prop].currentValue)) {
        console.log(`${prop} is not undefined. It has changed`);
        this[prop] = changes[prop].currentValue;
      } else {
        if (prop === 'dataSaver' && this.isObject(changes[prop])) {
          this.buttonClassName = changes[prop].currentValue.buttonClassName;
          this.placeholderClassName = changes[prop].currentValue.placeholderClassName;
        }
      }
    }
    this.setUp();
    // changes.dataSaver ? newValues.dataSaver = changes.dataSaver.currentValue : null;
    // changes.src ? newValues.src = changes.src.currentValue : null;
    // changes.fetchOnDemand ? newValues.fetchOnDemand = changes.fetchOnDemand.currentValue : null;
    // changes.placeholder ? newValues.placeholder = changes.placeholder.currentValue : null;
    // changes.placeholderClassName ? newValues.placeholderClassName = changes.placeholderClassName.currentValue : null;
    // changes.class ? newValues.class = changes.class.currentValue : null;
    // changes.style ? newValues.style = changes.style.currentValue : null;
  }

  insertInput() {
    // Called on initialization; Set the default configuration options if option is not present
    console.log('Config options', this.options);
    if (this.isUndefined(this.fetchOnDemand)) {
      this.fetchOnDemand = this.options.fetchOnDemand;
    }
    if (this.isUndefined(this.placeholderClassName)) {
      this.placeholderClassName = this.options.placeholderClassName;
    }
    if (this.isUndefined(this.dataSaver)) {
      this.dataSaver = this.options.dataSaver;
    }
    if (this.isUndefined(this.className)) {
      this.className = this.options.className;
    }
    if (this.isObject(this.dataSaver)) {
      // set buttonClassName and wrapperClassName
      this.buttonClassName = this.dataSaver.buttonClassName;
      this.wrapperClassName = this.dataSaver.wrapperClassName;
    } else {
      this.buttonClassName = this.options.buttonClassName;
      this.wrapperClassName = this.options.wrapperClassName;
    }
  }

  setUp() {
    if (this.dataSaver) {
      this.delayed = true;
    } else if (this.fetchOnDemand) {
      this.loading = true;
      this.setFetchOnDemand();
    } else {
      this.fetchImage();
      console.log('Fetching image, due to config', this.dataSaver);
    }
    if (this.src && this.src.includes('cloudinary')) {
      this.placeholder =
        this.placeholder || this.src.replace('/upload/', '/upload/c_thumb,w_30/');
    }
    this.classes = `${this.className} ${this.placeholderClassName}`;
  }

  isObject = x => typeof x === 'object';
  isUndefined = x => typeof x === 'undefined';

}

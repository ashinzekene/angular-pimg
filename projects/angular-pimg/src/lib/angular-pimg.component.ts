import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AngularPimgService } from '../public_api';

@Component({
  selector: 'angular-pimg',
  templateUrl: 'angular-pimg.component.html',
  styles: []
})
export class AngularPimgComponent implements OnInit {
  @Input() dataSaver: { wrapperClassName: string, buttonClassName: string } & false
  @Input() src: string
  @Input() fetchOnDemand: boolean
  @Input() placeholder: string
  @Input() placeholderClassName: string
  @Input() class: string
  @Output() onFetched: EventEmitter<null> = new EventEmitter()
  @Output() onError: EventEmitter<any> = new EventEmitter()
  wrapperClassName: string = ''
  buttonClassName: string = ''
  blob: SafeUrl
  delayed: boolean
  loading: boolean
  classes: string

  constructor(private domSanitizer: DomSanitizer, private options: AngularPimgService) {
    // Set the default configuration options if option is not present
    if (this.isUndefined(this.fetchOnDemand)) {
      this.fetchOnDemand = this.options.fetchOnDemand
    }
    if (this.isUndefined(this.placeholderClassName)) {
      this.placeholderClassName = this.options.placeholderClassName
    }
    if (this.isUndefined(this.dataSaver)) {
      // this.dataSaver = this.options.dataSaver
    }
    if (this.isObject(this.dataSaver)) {
      this.setFetchOnDemand()
      // set buttonClassName and wrapperClassName
      this.buttonClassName = this.dataSaver.wrapperClassName
    }

    // Setting up
		if (this.dataSaver) {
			this.delayed = true
		} else if (this.fetchOnDemand) {
			this.loading = true
			this.setFetchOnDemand()
		} else {
			this.fetchImage()
		}
    if (this.src && this.src.includes('cloudinary')) {
      this.placeholder =
        this.placeholder || this.src.replace('/upload/', '/upload/c_thumb,w_30/')

    }
    this.classes = `${this.class} ${this.placeholderClassName} `
  }

  setFetchOnDemand() {
    let observer = new IntersectionObserver(entries => {
      let image = entries[0]
      if (image.isIntersecting) {
        this.fetchImage()
        this.delayed = false
        observer.disconnect()
      }
    })
    observer.observe(null)
  }

  fetchImage() {
    fetch(this.src)
      .then(res => res.blob())
      .then(res => {
        this.blob = this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res))
        this.loading = false
        this.delayed = false
        this.onFetched.emit()
      })
      .catch(err => {
        this.onError.emit(err)
      })
  }

  ngOnInit() { }

  isObject = x => typeof x === 'object'
  isUndefined = x => typeof x === 'undefined'

}
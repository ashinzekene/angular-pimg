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
  @Input() dataSaver: any
  @Input() src: string
  @Input() fetchOnDemand: boolean
  @Input() placeholder: string
  @Input() placeholderClassName: string
  @Input() class: string
  @Input() style: any = { display: 'block' }
  @Output() onFetched: EventEmitter<null> = new EventEmitter()
  @Output() onError: EventEmitter<any> = new EventEmitter()
  wrapperClassName: string = ''
  buttonClassName: string = ''
  blob: SafeUrl = ''
  delayed: boolean
  loading: boolean
  classes: string
  private isIntersecting: boolean = false

  constructor(private el: ElementRef, private domSanitizer: DomSanitizer, private options: AngularPimgService) {
    this.insertInput()
    this.setUp()
  }

  setFetchOnDemand() {
    let observer = new IntersectionObserver(entries => {
      let image = entries[0]
      if (image.isIntersecting && !this.isIntersecting) {
        this.fetchImage()
        this.isIntersecting = true
        console.log("Called by intersection API")
        this.delayed = false
        observer.disconnect()
      }
    })
    observer.observe(this.el.nativeElement)
  }

  fetchImage() {
    fetch(this.src)
      .then(res => res.blob())
      .then(res => {
        console.log(res)
        this.blob = this.domSanitizer.bypassSecurityTrustUrl(URL.createObjectURL(res))
        this.loading = false
        this.isIntersecting = false
        this.delayed = false
        this.onFetched.emit()
      })
      .catch(err => {
        this.onError.emit(err)
      })
  }

  ngOnChanges(changes: SimpleChanges) {
    let newValues: any = {}
    changes.dataSaver ? newValues.dataSaver = changes.dataSaver.currentValue : null
    changes.src ? newValues.src = changes.src.currentValue : null
    changes.fetchOnDemand ? newValues.fetchOnDemand = changes.fetchOnDemand.currentValue : null
    changes.placeholder ? newValues.placeholder = changes.placeholder.currentValue : null
    changes.placeholderClassName ? newValues.placeholderClassName = changes.placeholderClassName.currentValue : null
    changes.class ? newValues.class = changes.class.currentValue : null
    changes.style ? newValues.style = changes.style.currentValue : null
    this.insertInput(newValues)
    this.setUp()
    // this.checkValues(changes.categoryId.currentValue);
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values

  }

  insertInput(values?) {
    if (values) {
      // Called by simple changes; Set the default configuration options if option is not present
      if (this.isUndefined(values.fetchOnDemand)) {
        values.fetchOnDemand = this.options.fetchOnDemand
      }
      if (this.isUndefined(values.placeholderClassName)) {
        values.placeholderClassName = this.options.placeholderClassName
      }
      if (this.isUndefined(values.dataSaver)) {
        // values.dataSaver = values.options.dataSaver
      }
      if (this.isObject(values.dataSaver)) {
        // set buttonClassName and wrapperClassName
        this.buttonClassName = this.dataSaver.buttonClassName
        this.wrapperClassName = this.dataSaver.wrapperClassName
      } else {
        this.buttonClassName = this.options.buttonClassName
        this.wrapperClassName = this.options.wrapperClassName
      }
    } else {
      // Called on initialization; Set the default configuration options if option is not present
      if (this.isUndefined(this.fetchOnDemand)) {
        this.fetchOnDemand = this.options.fetchOnDemand
      }
      if (this.isUndefined(this.placeholderClassName)) {
        console.log('Placeholder class undefined', 
        this.options.buttonClassName,
        this.options,
        this.options.placeholderClassName)
        this.placeholderClassName = this.options.placeholderClassName
      }
      if (this.isUndefined(this.dataSaver)) {
        this.dataSaver = this.options.dataSaver
      }
      if (this.isObject(this.dataSaver)) {
        // set buttonClassName and wrapperClassName
        this.buttonClassName = this.dataSaver.buttonClassName
        this.wrapperClassName = this.dataSaver.wrapperClassName
      } else {
        this.buttonClassName = this.options.buttonClassName
        this.wrapperClassName = this.options.wrapperClassName
      }
    }
  }

  setUp() {
    if (this.dataSaver) {
      this.delayed = true
    } else if (this.fetchOnDemand) {
      this.loading = true
      this.setFetchOnDemand()
    } else {
      this.fetchImage()
      console.log("Fetching image, due to config", this.dataSaver)
    }
    if (this.src && this.src.includes('cloudinary')) {
      this.placeholder =
        this.placeholder || this.src.replace('/upload/', '/upload/c_thumb,w_30/')
    }
    this.classes = `${this.class} ${this.placeholderClassName}`
  }
  isObject = x => typeof x === 'object'
  isUndefined = x => typeof x === 'undefined'

}
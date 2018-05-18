import { Directive, Input } from '@angular/core';
import { AngularPimgService } from '../public_api';

@Directive({ selector: '[angular-pimg]' })
export class AngularPimgDirective {
  @Input() dataSaver: boolean | { wrapperClassName: string, buttonClassName: string }
  @Input() src: string
  @Input() fetchOnDemand: boolean
  @Input() placeholder: string
  @Input() placeholderClassName: string
  private blob: string
  private delayed: boolean
  private loading: boolean
  private classes: string

  constructor(private options: AngularPimgService) {
    // Set the default configuration options
    this.options.fetchOnDemand ? this.fetchOnDemand = options.fetchOnDemand : null
    this.options.placeholderClassName ? this.placeholderClassName = options.placeholderClassName : null
    if (this.dataSaverIsUndefined()) {
      this.dataSaver = this.options.dataSaver
    }
    if (this.dataSaverIsObject()) {
      this.setfetchOnDemand(this.src)
    }
  }

  setfetchOnDemand(src) {
    let observer = new IntersectionObserver(entries => {
      let image = entries[0]
      if (image.isIntersecting) {
        this.fetchImage(src)
        this.delayed = false
        observer.disconnect()
      }
    })
    observer.observe(null)
  }

  fetchImage(src) {
    fetch(src)
      .then(res => res.blob())
      .then(res => {
        this.blob = URL.createObjectURL(res)
        this.loading = false
        this.delayed = false
      })
  }

  dataSaverIsObject = () => typeof this.dataSaver === 'object' 
  dataSaverIsUndefined = () => typeof this.dataSaver === 'undefined' 

}
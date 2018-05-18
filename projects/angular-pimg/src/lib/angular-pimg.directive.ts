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
 private delayed: string
 private loading: string

  constructor(private options: AngularPimgService) {
    // Set the default configuration options
    this.options.fetchOnDemand ? this.fetchOnDemand = options.fetchOnDemand : null
    this.options.placeholderClassName ? this.placeholderClassName = options.placeholderClassName : null
    if (typeof this.options.dataSaver !== 'undefined') {
      this.dataSaver = options.dataSaver
    }
    // Add classnames
  }
}
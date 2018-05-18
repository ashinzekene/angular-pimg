import { Injectable, Optional } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { AngularPimgOptions } from './config-options';

@Injectable({
  providedIn: 'root'
})
export class AngularPimgService {
  private _className: string = '';
  private _placeholderClassName: string = 'pimg__placeholder';
  private _fetchOnDemand: boolean = false;
  private _dataSaver: boolean | { wrapperClassName: string, buttonClassName: string } = {
    wrapperClassName: 'pimg_wrapper',
    buttonClassName: 'pimg_btn'
  }
  constructor(@Optional() config: AngularPimgOptions) {
    if (config) this.setConfig(config)
  }

  get wrapperClassName(): string {
    return typeof this._dataSaver === 'object' ? this._dataSaver.wrapperClassName : ''
  }
  
  get buttonClassName(): string {
    return typeof this._dataSaver === 'object' ? this._dataSaver.buttonClassName : ''
  }

  get className(): string {
    return this._className
  }

  get placeholderClassName(): string {
    return this._placeholderClassName
  }

  get dataSaver(): boolean | { wrapperClassName: string, buttonClassName: string } {
    return this._dataSaver
  }

  get fetchOnDemand(): boolean {
    return this._fetchOnDemand
  }

  setConfig({ className, dataSaver, fetchOnDemand, placeholderClassName }: Partial<AngularPimgOptions>) {
    this._className = typeof className !== "undefined" ? className : this.className
    this._fetchOnDemand = typeof fetchOnDemand !== "undefined" ? fetchOnDemand : this.fetchOnDemand
    this._placeholderClassName = typeof placeholderClassName !== "undefined" ? placeholderClassName : this.placeholderClassName
    if (typeof dataSaver === 'object') {
      this._dataSaver = dataSaver
    } else if (dataSaver === false) {
      this._dataSaver = dataSaver
    }

  }

}

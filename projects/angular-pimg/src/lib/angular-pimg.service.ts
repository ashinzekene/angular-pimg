import { Injectable, Optional } from '@angular/core';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
import { AngularPimgOptions } from './config-options';

@Injectable({
  providedIn: 'root'
})
export class AngularPimgService {
  public _className: string = '';
  public _placeholderClassName: string = 'pimg__placeholder';
  public _fetchOnDemand: boolean = false;
  public _dataSaver: boolean | { wrapperClassName: string, buttonClassName: string } = {
    wrapperClassName: 'pimg_wrapper',
    buttonClassName: 'pimg_btn'
  }
  constructor(@Optional() config: AngularPimgOptions) {
    if (config) this.setConfig(config)
  }

  get className() {
    return this._className
  }

  get placeholderClassName() {
    return this._placeholderClassName
  }

  get dataSaver() {
    return this._dataSaver
  }

  get fetchOnDemand() {
    return this._fetchOnDemand
  }

  setConfig({
    className = 'pimg',
    dataSaver = false,
    fetchOnDemand = false,
    placeholderClassName = 'pimg__placeholder',
  }: AngularPimgOptions) {
    this._className = className
    this._fetchOnDemand = fetchOnDemand
    if (typeof dataSaver === 'object') {
      this._dataSaver = dataSaver
    } else if (dataSaver === false) {
      this._dataSaver = dataSaver
    }

  }

}

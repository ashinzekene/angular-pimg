import { Injectable, Optional, Inject } from '@angular/core';
import { AngularPimgOptions } from './config-options';

@Injectable({
  providedIn: 'root'
})
export class AngularPimgService {
  private _className: string;
  private _placeholderClassName = 'pimg__placeholder';
  private _fetchOnDemand = false;
  private _dataSaver: boolean;
  private _buttonClassName = 'pimg_btn';
  private _wrapperClassName = 'pimg_wrapper';

  constructor(@Optional() @Inject('Options') options: AngularPimgOptions) {
    if (options) {
      this.setConfig(options);
    }
  }

  get wrapperClassName(): string {
    return this._wrapperClassName;
  }

  get buttonClassName(): string {
    return this._buttonClassName;
  }

  get className(): string {
    return this._className;
  }

  get placeholderClassName(): string {
    return this._placeholderClassName;
  }

  get dataSaver(): boolean {
    return this._dataSaver;
  }

  get fetchOnDemand(): boolean {
    return this._fetchOnDemand;
  }

  setConfig({ className, dataSaver, fetchOnDemand, placeholderClassName }: Partial<AngularPimgOptions>) {
    this._className = typeof className !== 'undefined' ? className : this.className;
    this._fetchOnDemand = typeof fetchOnDemand !== 'undefined' ? fetchOnDemand : this.fetchOnDemand;
    this._placeholderClassName = typeof placeholderClassName !== 'undefined' ? placeholderClassName : this.placeholderClassName;
    if (typeof dataSaver === 'undefined') {
      return;
    }
    if (typeof dataSaver === 'object') {
      this._buttonClassName = dataSaver.buttonClassName;
      this._wrapperClassName = dataSaver.wrapperClassName;
    } else {
      this._dataSaver = true; // dataSaver is true
    }
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-angular-pimg',
  template: `
    <p>
      angular-pimg works!
    </p>
  `,
  styles: []
})
export class AngularPimgComponent implements OnInit {
  @Input() dataSaver: string;
  @Input() src: string;
  @Input() fetchOnDemand: string;
  @Input() placeholder: string;
  @Input() placeholderClassName: string;
  private blob: string;
  private delayed: false;
  private loading: false;
  constructor() { }

  ngOnInit() {
  }

}

export class AngularPimgOptions {
  className: string = 'pimg';
  fetchOnDemand: boolean = false;  
  placeholderClassName: string = 'pimg__thumbnail';
  dataSaver: boolean | { wrapperClassName: string, buttonClassName: string } = {
    wrapperClassName: "pimg_wrapper",
    buttonClassName: "pimg_btn"
  }
}
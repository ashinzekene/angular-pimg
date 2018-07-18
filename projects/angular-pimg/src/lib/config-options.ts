export interface AngularPimgOptions {
  placeholderClassName: string;
  className: string;
  fetchOnDemand: boolean;
  dataSaver: false | { wrapperClassName: string, buttonClassName: string };
}

export const defaultOptions = {
  placeholderClassName: 'pimg__placeholder',
  fetchOnDemand: false,
  dataSaver: false,
  buttonClassName: 'pimg_btn',
  wrapperClassName: 'pimg_wrapper',
};

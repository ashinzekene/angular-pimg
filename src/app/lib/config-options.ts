export interface AngularPimgOptions {
  className: string;
  fetchOnDemand: boolean;
  placeholderClassName: string;
  dataSaver: false | { wrapperClassName: string, buttonClassName: string };
}

export const defaultOptions = {
  placeholderClassName: 'pimg__placeholder',
  fetchOnDemand: true,
  dataSaver: false,
  buttonClassName: 'pimg_btn',
  wrapperClassName: 'pimg_wrapper',
};

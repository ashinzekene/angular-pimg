export type AngularPimgOptions = {
  className: string
  fetchOnDemand: boolean
  placeholderClassName: string
  dataSaver: false | { wrapperClassName: string, buttonClassName: string } 
}


export const defaultOptions = {
  placeholderClassName: 'pimg__placeholder',
  fetchOnDemand: false,
  dataSaver: false,
  buttonClassName: 'pimg_btn',
  wrapperClassName: 'pimg_wrapper',
}
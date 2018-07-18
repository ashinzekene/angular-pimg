export interface AngularPimgOptions {
    placeholderClassName: string;
    className: string;
    fetchOnDemand: boolean;
    dataSaver: false | {
        wrapperClassName: string;
        buttonClassName: string;
    };
}
export declare const defaultOptions: {
    placeholderClassName: string;
    fetchOnDemand: boolean;
    dataSaver: boolean;
    buttonClassName: string;
    wrapperClassName: string;
};

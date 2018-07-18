import { AngularPimgOptions } from './config-options';
export declare class AngularPimgService {
    private _className;
    private _placeholderClassName;
    private _fetchOnDemand;
    private _dataSaver;
    private _buttonClassName;
    private _wrapperClassName;
    constructor(options: AngularPimgOptions);
    readonly wrapperClassName: string;
    readonly buttonClassName: string;
    readonly className: string;
    readonly placeholderClassName: string;
    readonly dataSaver: boolean;
    readonly fetchOnDemand: boolean;
    setConfig({className, dataSaver, fetchOnDemand, placeholderClassName}: Partial<AngularPimgOptions>): void;
}

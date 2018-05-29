import { EventEmitter, SimpleChanges, OnChanges, ElementRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { AngularPimgService } from './angular-pimg.service';
export declare class AngularPimgComponent implements OnChanges {
    private el;
    private domSanitizer;
    private options;
    dataSaver: any;
    src: string;
    fetchOnDemand: boolean;
    placeholder: string;
    placeholderClassName: string;
    className: string;
    style: any;
    fetched: EventEmitter<null>;
    error: EventEmitter<any>;
    wrapperClassName: string;
    buttonClassName: string;
    blob: SafeUrl;
    delayed: boolean;
    loading: boolean;
    classes: string;
    private isIntersecting;
    constructor(el: ElementRef, domSanitizer: DomSanitizer, options: AngularPimgService);
    setFetchOnDemand(): void;
    fetchImage(): void;
    ngOnChanges(changes: SimpleChanges): void;
    insertInput(): void;
    setUp(): void;
    isObject: (x: any) => boolean;
    isUndefined: (x: any) => boolean;
}
import { TestBed, inject } from '@angular/core/testing';

import { AngularPimgService } from './angular-pimg.service';

describe('AngularPimgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularPimgService]
    });
  });

  it('should be created', inject([AngularPimgService], (service: AngularPimgService) => {
    expect(service).toBeTruthy();
  }));
});

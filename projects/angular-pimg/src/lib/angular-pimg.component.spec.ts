import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPimgComponent } from './angular-pimg.component';

describe('AngularPimgComponent', () => {
  let component: AngularPimgComponent;
  let fixture: ComponentFixture<AngularPimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

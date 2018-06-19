import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapedHtmlComponent } from './escaped-html.component';

describe('EscapedHtmlComponent', () => {
  let component: EscapedHtmlComponent;
  let fixture: ComponentFixture<EscapedHtmlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscapedHtmlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapedHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

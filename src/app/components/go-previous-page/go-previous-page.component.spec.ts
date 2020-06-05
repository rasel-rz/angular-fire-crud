import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoPreviousPageComponent } from './go-previous-page.component';

describe('GoPreviousPageComponent', () => {
  let component: GoPreviousPageComponent;
  let fixture: ComponentFixture<GoPreviousPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoPreviousPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoPreviousPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

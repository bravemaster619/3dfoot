import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultTwoComponent } from './result-two.component';

describe('ResultTwoComponent', () => {
  let component: ResultTwoComponent;
  let fixture: ComponentFixture<ResultTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

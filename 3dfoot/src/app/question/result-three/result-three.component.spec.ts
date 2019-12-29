import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultThreeComponent } from './result-three.component';

describe('ResultThreeComponent', () => {
  let component: ResultThreeComponent;
  let fixture: ComponentFixture<ResultThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

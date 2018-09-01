import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResulComponent } from './resul.component';

describe('ResulComponent', () => {
  let component: ResulComponent;
  let fixture: ComponentFixture<ResulComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResulComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

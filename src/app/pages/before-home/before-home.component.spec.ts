import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeHomeComponent } from './before-home.component';

describe('BeforeHomeComponent', () => {
  let component: BeforeHomeComponent;
  let fixture: ComponentFixture<BeforeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeforeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

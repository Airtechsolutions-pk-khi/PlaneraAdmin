import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActBahHomeComponent } from './home.component';

describe('PlnIntServiceComponent', () => {
  let component: ActBahHomeComponent;
  let fixture: ComponentFixture<ActBahHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActBahHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActBahHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

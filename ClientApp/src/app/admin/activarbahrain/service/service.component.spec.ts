import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActBahServiceComponent } from './service.component';

describe('ActBahServiceComponent', () => {
  let component: ActBahServiceComponent;
  let fixture: ComponentFixture<ActBahServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActBahServiceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActBahServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

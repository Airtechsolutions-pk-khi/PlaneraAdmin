import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { serviceComponent } from './service.component';

describe('serviceComponent', () => {
  let component: serviceComponent;
  let fixture: ComponentFixture<serviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [serviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(serviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

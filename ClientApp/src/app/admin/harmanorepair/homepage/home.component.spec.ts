import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrRprHomeComponent } from './home.component';

describe('PlnIntServiceComponent', () => {
  let component: HrRprHomeComponent;
  let fixture: ComponentFixture<HrRprHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrRprHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrRprHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

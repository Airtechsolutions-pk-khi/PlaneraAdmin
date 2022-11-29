import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrCntServiceComponent } from './service.component';

describe('PlnIntServiceComponent', () => {
  let component: HrCntServiceComponent;
  let fixture: ComponentFixture<HrCntServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrCntServiceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrCntServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

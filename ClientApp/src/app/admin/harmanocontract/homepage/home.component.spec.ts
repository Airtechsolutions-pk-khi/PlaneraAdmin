import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrCntHomeComponent } from './home.component';

describe('PlnIntServiceComponent', () => {
  let component: HrCntHomeComponent;
  let fixture: ComponentFixture<HrCntHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrCntHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrCntHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

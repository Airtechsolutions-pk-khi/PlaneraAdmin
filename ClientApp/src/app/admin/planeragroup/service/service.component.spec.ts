import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlnGrpServiceComponent } from './service.component';

describe('ActDubServiceComponent', () => {
  let component: PlnGrpServiceComponent;
  let fixture: ComponentFixture<PlnGrpServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlnGrpServiceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlnGrpServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

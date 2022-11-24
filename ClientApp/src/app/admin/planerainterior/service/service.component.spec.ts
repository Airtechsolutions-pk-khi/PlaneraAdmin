import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlnIntServiceComponent } from './service.component';

describe('PlnIntServiceComponent', () => {
  let component: PlnIntServiceComponent;
  let fixture: ComponentFixture<PlnIntServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlnIntServiceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlnIntServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlnIntHomeComponent } from './home.component';

describe('PlnIntServiceComponent', () => {
  let component: PlnIntHomeComponent;
  let fixture: ComponentFixture<PlnIntHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlnIntHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlnIntHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

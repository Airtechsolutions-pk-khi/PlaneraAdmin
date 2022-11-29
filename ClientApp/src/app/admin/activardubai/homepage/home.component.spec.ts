import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActDubHomeComponent } from './home.component';

describe('PlnIntServiceComponent', () => {
  let component: ActDubHomeComponent;
  let fixture: ComponentFixture<ActDubHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActDubHomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActDubHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

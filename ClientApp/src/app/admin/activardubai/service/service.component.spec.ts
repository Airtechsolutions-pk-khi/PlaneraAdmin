import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActDubServiceComponent } from './service.component';

describe('ActDubServiceComponent', () => {
  let component: ActDubServiceComponent;
  let fixture: ComponentFixture<ActDubServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActDubServiceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActDubServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { newseventComponent } from './newsevent.component';

describe('CategoryComponent', () => {
  let component: newseventComponent;
  let fixture: ComponentFixture<newseventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ newseventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(newseventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

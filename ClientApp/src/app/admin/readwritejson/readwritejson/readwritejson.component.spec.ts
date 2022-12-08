import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadWriteJsonComponent } from './readwritejson.component';

describe('ReadWriteJsonComponent', () => {
  let component: ReadWriteJsonComponent;
  let fixture: ComponentFixture<ReadWriteJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReadWriteJsonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadWriteJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

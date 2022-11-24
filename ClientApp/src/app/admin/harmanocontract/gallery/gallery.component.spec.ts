import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrCntGalleryComponent } from './gallery.component';

describe('HrCntGalleryComponent', () => {
  let component: HrCntGalleryComponent;
  let fixture: ComponentFixture<HrCntGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrCntGalleryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrCntGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

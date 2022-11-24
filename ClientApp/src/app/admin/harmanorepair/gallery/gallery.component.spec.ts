import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrRprGalleryComponent } from './gallery.component';

describe('HrRprGalleryComponent', () => {
  let component: HrRprGalleryComponent;
  let fixture: ComponentFixture<HrRprGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HrRprGalleryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrRprGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

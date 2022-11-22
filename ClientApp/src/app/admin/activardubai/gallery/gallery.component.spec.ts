import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActBahGalleryComponent } from './gallery.component';

describe('ActBahGalleryComponent', () => {
  let component: ActBahGalleryComponent;
  let fixture: ComponentFixture<ActBahGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActBahGalleryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActBahGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

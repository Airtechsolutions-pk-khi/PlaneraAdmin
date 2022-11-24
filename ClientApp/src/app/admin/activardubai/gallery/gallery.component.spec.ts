import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActDubGalleryComponent } from './gallery.component';

describe('ActBahGalleryComponent', () => {
  let component: ActDubGalleryComponent;
  let fixture: ComponentFixture<ActDubGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActDubGalleryComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActDubGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGalleryComponent } from './addgallery.component';



describe('AddcategoryComponent', () => {
  let component: AddGalleryComponent;
  let fixture: ComponentFixture<AddGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGalleryActBahComponent } from './addgallery.component';



describe('AddcategoryComponent', () => {
  let component: AddGalleryActBahComponent;
  let fixture: ComponentFixture<AddGalleryActBahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddGalleryActBahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGalleryActBahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

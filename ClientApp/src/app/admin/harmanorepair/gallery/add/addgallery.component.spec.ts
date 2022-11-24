import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGalleryHrRprComponent } from './addgallery.component';



describe('AddGalleryHrRprComponent', () => {
  let component: AddGalleryHrRprComponent;
  let fixture: ComponentFixture<AddGalleryHrRprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddGalleryHrRprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGalleryHrRprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGalleryHrCntComponent } from './addgallery.component';



describe('AddcategoryComponent', () => {
  let component: AddGalleryHrCntComponent;
  let fixture: ComponentFixture<AddGalleryHrCntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddGalleryHrCntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGalleryHrCntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

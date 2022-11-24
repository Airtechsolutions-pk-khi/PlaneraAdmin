import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddGalleryActDubComponent } from './addgallery.component';



describe('AddcategoryComponent', () => {
  let component: AddGalleryActDubComponent;
  let fixture: ComponentFixture<AddGalleryActDubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddGalleryActDubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGalleryActDubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

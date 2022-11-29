import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddHomeAcBahComponent } from './addhome.component';



describe('AddcategoryComponent', () => {
  let component: AddHomeAcBahComponent;
  let fixture: ComponentFixture<AddHomeAcBahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddHomeAcBahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHomeAcBahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddServiceActBahComponent } from './/addservice.component';



describe('AddcategoryComponent', () => {
  let component: AddServiceActBahComponent;
  let fixture: ComponentFixture<AddServiceActBahComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddServiceActBahComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceActBahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

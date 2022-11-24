import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddServiceActDubComponent } from './addservice.component';



describe('AddcategoryComponent', () => {
  let component: AddServiceActDubComponent;
  let fixture: ComponentFixture<AddServiceActDubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddServiceActDubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceActDubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

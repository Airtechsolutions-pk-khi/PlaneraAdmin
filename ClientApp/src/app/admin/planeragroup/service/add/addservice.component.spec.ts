import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddServicePlnGrpComponent } from './addservice.component';



describe('AddcategoryComponent', () => {
  let component: AddServicePlnGrpComponent;
  let fixture: ComponentFixture<AddServicePlnGrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddServicePlnGrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServicePlnGrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

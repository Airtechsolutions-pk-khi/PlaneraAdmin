import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddHomeAcDubComponent } from './addhome.component';



describe('AddcategoryComponent', () => {
  let component: AddHomeAcDubComponent;
  let fixture: ComponentFixture<AddHomeAcDubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddHomeAcDubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHomeAcDubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

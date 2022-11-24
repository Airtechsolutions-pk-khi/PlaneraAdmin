import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddServiceHrCntComponent } from './addservice.component';



describe('AddcategoryComponent', () => {
  let component: AddServiceHrCntComponent;
  let fixture: ComponentFixture<AddServiceHrCntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddServiceHrCntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceHrCntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

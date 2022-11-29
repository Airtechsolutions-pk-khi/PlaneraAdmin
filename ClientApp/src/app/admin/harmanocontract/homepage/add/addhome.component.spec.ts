import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddHomeHrCntComponent } from './addhome.component';



describe('AddcategoryComponent', () => {
  let component: AddHomeHrCntComponent;
  let fixture: ComponentFixture<AddHomeHrCntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddHomeHrCntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHomeHrCntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

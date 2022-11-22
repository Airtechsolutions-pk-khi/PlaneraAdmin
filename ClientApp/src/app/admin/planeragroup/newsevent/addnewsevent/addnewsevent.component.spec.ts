import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddnewseventComponent } from './addnewsevent.component';



describe('AddcategoryComponent', () => {
  let component: AddnewseventComponent;
  let fixture: ComponentFixture<AddnewseventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddnewseventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewseventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

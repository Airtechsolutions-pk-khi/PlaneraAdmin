import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddReadWriteJsonComponent } from './addreadwritejson.component';




describe('AddReadWriteJsonComponent', () => {
 let component: AddReadWriteJsonComponent;
 let fixture: ComponentFixture<AddReadWriteJsonComponent>;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     declarations: [AddReadWriteJsonComponent ]
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(AddReadWriteJsonComponent);
   component = fixture.componentInstance;
   fixture.detectChanges();
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });
});

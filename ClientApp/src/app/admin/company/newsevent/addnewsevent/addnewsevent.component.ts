import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImageuploadComponent } from 'src/app/imageupload/imageupload.component';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/_services/local-storage.service';
import { ToastService } from 'src/app/_services/toastservice';
import { NewsEventService } from 'src/app/_services/newsevent.service';

@Component({
  selector: 'app-addnewsevent',
  templateUrl: './addnewsevent.component.html',
  styleUrls: ['./addnewsevent.component.css']
})
export class AddnewseventComponent implements OnInit {


  submitted = false;
  categoryForm: FormGroup;

  loading = false;
  loadingCategory = false;
  ButtonText = "Save"; selectedCityIds
  selectedSubCategoriesIds: string[];
  selectedLocationIds: string[];
  selectedgroupModifierIds: string[];

  @ViewChild(ImageuploadComponent, { static: true }) imgComp;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private ls: LocalStorageService,
    public ts :ToastService,
    private newseventService: NewsEventService

  ) {
    this.createForm();
  }

  ngOnInit() {
    this.setSelectedCategory();
  }

  get f() { return this.categoryForm.controls; }

  private createForm() {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      pagename: [''],
      description: [''],
      statusID: [true],       
      newsEventID: 0,
      image: [''],
      
      
    });
  }

  private editForm(obj) {

    this.f.name.setValue(obj.name);
    
    this.f.pagename.setValue(obj.pagename);
    this.f.newsEventID.setValue(obj.newsEventID);
    this.f.image.setValue(obj.image);
    this.f.description.setValue(obj.description);
    this.f.statusID.setValue(obj.statusID === 1 ? true : false);
    this.imgComp.imageUrl = obj.image;
  }

  setSelectedCategory() {    
    this.route.paramMap.subscribe(param => {
      const sid = +param.get('id');
      if (sid) {
        this.loadingCategory = true;
        this.f.newsEventID.setValue(sid);
        this.newseventService.getById(sid).subscribe(res => {
          //Set Forms
          this.editForm(res);
          this.loadingCategory = false;
        });
      }
    })
  }

  onSubmit() {
    debugger
    this.categoryForm.markAllAsTouched();
    this.submitted = true;
    if (this.categoryForm.invalid) { return; }
    this.loading = true;
    this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
    this.f.image.setValue(this.imgComp.imageUrl);

    if (parseInt(this.f.newsEventID.value) === 0) {
      //Insert category
      this.newseventService.insert(this.categoryForm.value).subscribe(data => {
        if (data != 0) {
          this.ts.showSuccess("Success","Record added successfully.")
          this.router.navigate(['/admin/newsevent']);
        }
        this.loading = false;
      }, error => {
        this.ts.showError("Error","Failed to insert record.")
        this.loading = false;
      });

    } else {
      //Update category
      this.newseventService.update(this.categoryForm.value).subscribe(data => {
        this.loading = false;
        if (data != 0) {
          this.ts.showSuccess("Success","Record updated successfully.")
          this.router.navigate(['/admin/newsevent']);
        }
      }, error => {
        this.ts.showError("Error","Failed to update record.")
        this.loading = false;
      });
    }
  }
}

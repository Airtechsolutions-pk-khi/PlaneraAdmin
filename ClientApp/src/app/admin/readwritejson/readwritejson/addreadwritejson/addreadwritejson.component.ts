import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImageuploadComponent } from 'src/app/imageupload/imageupload.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LocalStorageService } from 'src/app/_services/local-storage.service';
import { ToastService } from 'src/app/_services/toastservice';
import { PlnIntHomePageService } from 'src/app/_services/plninthome.service';

import { HttpClient,HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-addreadwritejson',
  templateUrl: './addreadwritejson.component.html',
})
export class AddReadWriteJsonComponent implements OnInit {
  jsonreadwriteForm: FormGroup;

  employeeData:any;

  submitted = false;
  
  loading = false;
  loadingGallery = false;
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
    public ts: ToastService,
    private homeService: PlnIntHomePageService,
    private httpClient: HttpClient

  ) {
    this.createForm();
  }

  ngOnInit() {
     this.setSelectedRow();
  }

  get f() { return this.jsonreadwriteForm.controls; }

  private createForm() {
    this.jsonreadwriteForm = this.formBuilder.group({
      key: [''],
      ar: ['', Validators.required],
      en: ['', Validators.required],
      
    });
  }

  private editForm(obj) {
    this.f.key.setValue(obj.key);
    this.f.ar.setValue(obj.ar);
    this.f.en.setValue(obj.en);
   
  }

  setSelectedRow() {
    debugger
    
    
    this.route.paramMap.subscribe(param => {
         //const sid = +param.get('1');
         
      if (1) {
         
        this.f.key.setValue(1);
        this.homeService.getByIdJson(1).subscribe(res => {
          //Set Forms
          this.editForm(res);
          
        });
      }
    })
  }

  onSubmit() {
    debugger
    this.jsonreadwriteForm.markAllAsTouched();
    this.submitted = true;
    if (this.jsonreadwriteForm.invalid) { return; }
    this.loading = true;
    
    // if (parseInt(this.f.key.value) === 0) {
      if ((this.f.key.value) === "123") {
      //Insert category
      this.homeService.insertjson(this.jsonreadwriteForm.value).subscribe(data => {
        if (data != 0) {
          this.ts.showSuccess("Success","Record added successfully.")
          this.router.navigate(['/admin/planerainterior/homepage']);
        }
        this.loading = false;
      }, error => {
        this.ts.showError("Error","Failed to insert record.")
        this.loading = false;
      });

    } else {
      //Update category
      this.homeService.update(this.jsonreadwriteForm.value).subscribe(data => {
        this.loading = false;
        if (data != 0) {
          this.ts.showSuccess("Success","Record updated successfully.")
          this.router.navigate(['/admin/planerainterior/homepage']);
        }
      }, error => {
        this.ts.showError("Error","Failed to update record.")
        this.loading = false;
      });
    }
  }
}

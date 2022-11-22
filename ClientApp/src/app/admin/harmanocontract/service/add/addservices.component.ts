//import { Component, OnInit, ViewChild } from '@angular/core';
//import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { ImageuploadComponent } from 'src/app/imageupload/imageupload.component';
//import { Router, ActivatedRoute } from '@angular/router';
//import { LocalStorageService } from 'src/app/_services/local-storage.service';
//import { ToastService } from 'src/app/_services/toastservice';
//import { hrrprservices } from 'src/app/_services/hrrprservices.service';

//@Component({
//  selector: 'app-addservices',
//  templateUrl: './addservices.component.html'
//})
//export class AddHRRepairServiceComponent implements OnInit {


//  submitted = false;
//  servicesForm: FormGroup;

//  loading = false;
//  loadingService = false;
//  ButtonText = "Save"; selectedCityIds
//  selectedSubCategoriesIds: string[];
//  selectedLocationIds: string[];
//  selectedgroupModifierIds: string[];

//  @ViewChild(ImageuploadComponent, { static: true }) imgComp;
//  constructor(
//    private formBuilder: FormBuilder,
//    private router: Router,
//    private route: ActivatedRoute,
//    private ls: LocalStorageService,
//    public ts: ToastService,
//    private Service: hrrprservices

//  ) {
//    this.createForm();
//  }

//  ngOnInit() {
//    this.setSelectedService();
//  }

//  get f() { return this.servicesForm.controls; }

//  private createForm() {
//    this.servicesForm = this.formBuilder.group({
//      title: ['', Validators.required],
//      arabicTitle: ['', Validators.required],
//      description: [''],
//      arabicDescription: [''],
//      statusID: [true],
//      serviceID: 0,
//      serviceImageID: 0,
//      companyID: 0,
//      imagePath: [''],
//      imageIcon: [''],
//    });
//  }

//  private editForm(obj) {

//    this.f.title.setValue(obj.title);
//    this.f.arabicTitle.setValue(obj.arabicTitle);
//    this.f.serviceID.setValue(obj.serviceID);
//    this.f.imagePath.setValue(obj.imagePath);
//    this.f.imageIcon.setValue(obj.imageIcon);
//    this.f.description.setValue(obj.description);
//    this.f.arabicDescription.setValue(obj.arabicDescription);
//    this.f.statusID.setValue(obj.statusID === 1 ? true : false);
//    this.imgComp.imageUrl = obj.imagePath;
//  }

//  setSelectedService() {
//    this.route.paramMap.subscribe(param => {
//      const sid = +param.get('id');
//      if (sid) {
//        this.loadingService = true;
//        this.f.ServiceID.setValue(sid);
//        this.Service.getById(sid).subscribe(res => {
//          //Set Forms
//          this.editForm(res);
//          this.loadingService = false;
//        });
//      }
//    })
//  }

//  onSubmit() {
//    debugger
//    this.servicesForm.markAllAsTouched();
//    this.submitted = true;
//    if (this.servicesForm.invalid) { return; }
//    this.loading = true;
//    this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
//    this.f.imagePath.setValue(this.imgComp.imageUrl);

//    if (parseInt(this.f.serviceID.value) === 0) {
//      //Insert category
//      this.Service.insert(this.servicesForm.value).subscribe(data => {
//        if (data != 0) {
//          this.ts.showSuccess("Success", "Record added successfully.")
//          this.router.navigate(['/admin/harmanorepair/service']);
//        }
//        this.loading = false;
//      }, error => {
//        this.ts.showError("Error", "Failed to insert record.")
//        this.loading = false;
//      });

//    } else {
//      //Update category
//      this.Service.update(this.servicesForm.value).subscribe(data => {
//        this.loading = false;
//        if (data != 0) {
//          this.ts.showSuccess("Success", "Record updated successfully.")
//          this.router.navigate(['/admin/harmanorepair/service']);
//        }
//      }, error => {
//        this.ts.showError("Error", "Failed to update record.")
//        this.loading = false;
//      });
//    }
//  }
//}

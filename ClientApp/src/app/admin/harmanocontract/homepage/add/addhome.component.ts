import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImageuploadComponent } from 'src/app/imageupload/imageupload.component';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/_services/local-storage.service';
import { ToastService } from 'src/app/_services/toastservice';
import { HrCntHomePageService } from 'src/app/_services/hrcnthome.service';

@Component({
  selector: 'app-addhome',
  templateUrl: './addhome.component.html',
})
export class AddHomeHrCntComponent implements OnInit {


  submitted = false;
  homeForm: FormGroup;

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
    private homeService: HrCntHomePageService

  ) {
    this.createForm();
  }

  ngOnInit() {
    this.setSelectedGallery();
  }

  get f() { return this.homeForm.controls; }

  private createForm() {
    this.homeForm = this.formBuilder.group({
      title: ['', Validators.required],
      arabicTitle: ['', Validators.required],
      description: ['', Validators.required],
      arabicDescription: ['', Validators.required],
      statusID: [true],       
      homePageID: 0,
      imagePath: [''],
      displayOrder: [''],
    });
  }

  private editForm(obj) {
    this.f.title.setValue(obj.title);
    this.f.arabicTitle.setValue(obj.arabicTitle);
    this.f.description.setValue(obj.description);
    this.f.arabicDescription.setValue(obj.arabicDescription);
    this.f.homePageID.setValue(obj.homePageID);
    this.f.imagePath.setValue(obj.imagePath);
    this.f.displayOrder.setValue(obj.displayOrder);
    this.f.statusID.setValue(obj.statusID === 1 ? true : false);
    this.imgComp.imageUrl = obj.imagePath;
  }

  setSelectedGallery() {
    this.route.paramMap.subscribe(param => {
      const sid = +param.get('id');
      if (sid) {
        this.loadingGallery = true;
        this.f.homePageID.setValue(sid);
        this.homeService.getById(sid).subscribe(res => {
          //Set Forms
          this.editForm(res);
          this.loadingGallery = false;
        });
      }
    })
  }

  onSubmit() {
    this.homeForm.markAllAsTouched();
    this.submitted = true;
    if (this.homeForm.invalid) { return; }
    this.loading = true;
    this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
    this.f.imagePath.setValue(this.imgComp.imageUrl);

    if (parseInt(this.f.homePageID.value) === 0) {
      //Insert category
      this.homeService.insert(this.homeForm.value).subscribe(data => {
        if (data != 0) {
          this.ts.showSuccess("Success","Record added successfully.")
          this.router.navigate(['/admin/harmanocontract/homepage']);
        }
        this.loading = false;
      }, error => {
        this.ts.showError("Error","Failed to insert record.")
        this.loading = false;
      });

    } else {
      //Update category
      this.homeService.update(this.homeForm.value).subscribe(data => {
        this.loading = false;
        if (data != 0) {
          this.ts.showSuccess("Success","Record updated successfully.")
          this.router.navigate(['/admin/harmanocontract/homepage']);
        }
      }, error => {
        this.ts.showError("Error","Failed to update record.")
        this.loading = false;
      });
    }
  }
}

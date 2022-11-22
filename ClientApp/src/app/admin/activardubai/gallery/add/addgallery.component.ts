import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ImageuploadComponent } from 'src/app/imageupload/imageupload.component';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'src/app/_services/local-storage.service';
import { ToastService } from 'src/app/_services/toastservice';
import { ActDubGalleryService } from 'src/app/_services/actdubgallery';

@Component({
  selector: 'app-addgallery',
  templateUrl: './addgallery.component.html',
})
export class AddGalleryActDubComponent implements OnInit {


  submitted = false;
  galleryForm: FormGroup;

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
    public ts :ToastService,
    private galleryService: ActDubGalleryService

  ) {
    this.createForm();
  }

  ngOnInit() {
    this.setSelectedGallery();
  }

  get f() { return this.galleryForm.controls; }

  private createForm() {
    this.galleryForm = this.formBuilder.group({
      title: ['', Validators.required],
      arabicTitle: ['', Validators.required],
      statusID: [true],       
      galleryID: 0,
      imagePath: [''],
      displayOrder: [''],
    });
  }

  private editForm(obj) {
    this.f.title.setValue(obj.title);
    this.f.arabicTitle.setValue(obj.arabicTitle);
    this.f.galleryID.setValue(obj.galleryID);
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
        this.f.galleryID.setValue(sid);
        this.galleryService.getById(sid).subscribe(res => {
          //Set Forms
          this.editForm(res);
          this.loadingGallery = false;
        });
      }
    })
  }

  onSubmit() {
    this.galleryForm.markAllAsTouched();
    this.submitted = true;
    if (this.galleryForm.invalid) { return; }
    this.loading = true;
    this.f.statusID.setValue(this.f.statusID.value === true ? 1 : 2);
    this.f.imagePath.setValue(this.imgComp.imageUrl);

    if (parseInt(this.f.galleryID.value) === 0) {
      //Insert category
      this.galleryService.insert(this.galleryForm.value).subscribe(data => {
        if (data != 0) {
          this.ts.showSuccess("Success","Record added successfully.")
          this.router.navigate(['/admin/activardubai/gallery']);
        }
        this.loading = false;
      }, error => {
        this.ts.showError("Error","Failed to insert record.")
        this.loading = false;
      });

    } else {
      //Update category
      this.galleryService.update(this.galleryForm.value).subscribe(data => {
        this.loading = false;
        if (data != 0) {
          this.ts.showSuccess("Success","Record updated successfully.")
          this.router.navigate(['/admin/activardubai/gallery']);
        }
      }, error => {
        this.ts.showError("Error","Failed to update record.")
        this.loading = false;
      });
    }
  }
}

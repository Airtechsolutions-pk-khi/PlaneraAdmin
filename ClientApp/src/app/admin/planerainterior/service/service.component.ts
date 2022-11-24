
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NgbdSortableHeader, SortEvent } from 'src/app/_directives/sortable.directive';
import { LocalStorageService } from 'src/app/_services/local-storage.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/_services/toastservice';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/ExportExcel/excel.service';
import { Service } from 'src/app/_models/PlGrpService';
import { PlnIntServiceService } from 'src/app/_services/plnintservice';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  providers: [ExcelService]
})

export class PlnIntServiceComponent implements OnInit {
 
  data$: Observable<Service[]>;
  oldData: Service[];
  total$: Observable<number>;
  loading$: Observable<boolean>;
  // private selectedBrand;
  locationSubscription: Subscription;
  submit: boolean;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  gallery: Service[] = [];
  constructor(public service: PlnIntServiceService,
    public excelService: ExcelService,
    public ls: LocalStorageService,
    public ts: ToastService,
    public tss: ToastrService,
    public router: Router) {
    this.loading$ = service.loading$;
    this.submit = false;
    
    
  }

  ngOnInit() {
    this.getData();
  }
 
  exportAsXLSX(): void {
    this.service.ExportList().subscribe((res: any) => {    
      this.excelService.exportAsExcelFile(res, 'Report_Export');
    }, error => {
      this.ts.showError("Error","Failed to export")
    });
  }
  
  getData() {
    this.service.getAllData();
    this.data$ = this.service.data$;
    this.total$ = this.service.total$;
    this.loading$ = this.service.loading$;
    
  }

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }

  Edit(gallery) {
    this.router.navigate(["admin/planerainterior/service/edit", gallery]);
  }

  Delete(obj) {
    this.service.delete(obj).subscribe((res: any) => {
      if (res != 0) {
        this.ts.showSuccess("Success", "Record deleted successfully.")
        this.getData();
      }
      else {
        this.ts.showError("Error", "Failed to delete record.");
      }
    }, error => {
      this.ts.showError("Error","Failed to delete record.")
    });
  }
}

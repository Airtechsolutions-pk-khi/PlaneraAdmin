
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NgbdSortableHeader, SortEvent } from 'src/app/_directives/sortable.directive';
import { LocalStorageService } from 'src/app/_services/local-storage.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/_services/toastservice';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/ExportExcel/excel.service';
import { NewsEvent } from 'src/app/_models/PlGrpNewsAlert';
import { PlnGrpNewAlertService } from 'src/app/_services/plngrpnewsalert.service';

@Component({
  selector: 'app-newsevent',
  templateUrl: './newsevent.component.html',
  providers: [ExcelService]
})

export class newseventComponent implements OnInit {
 
  data$: Observable<NewsEvent[]>;
  oldData: NewsEvent[];
  total$: Observable<number>;
  loading$: Observable<boolean>;
  // private selectedBrand;
  locationSubscription: Subscription;
  submit: boolean;
  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;
  categories: NewsEvent[] = [];
  constructor(public service: PlnGrpNewAlertService,
    public excelService: ExcelService,
    public ls: LocalStorageService,
    public ts: ToastService,
    public tss: ToastrService,
    public router: Router) {
    // this.selectedBrand = this.ls.getSelectedBrand().brandID;
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

  Edit(newsevent) {
    this.router.navigate(["admin/planeragroup/newsevent/edit", newsevent]);
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

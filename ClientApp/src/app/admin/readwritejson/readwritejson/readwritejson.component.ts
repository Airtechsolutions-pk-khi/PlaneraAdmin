
import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NgbdSortableHeader, SortEvent } from 'src/app/_directives/sortable.directive';
import { LocalStorageService } from 'src/app/_services/local-storage.service';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/_services/toastservice';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/ExportExcel/excel.service';
import { HttpClient } from '@angular/common/http';
import { PlnIntHomePageService } from 'src/app/_services/plninthome.service';
import { AddReadWriteJsonComponent } from './addreadwritejson/addreadwritejson.component';

@Component({
  selector: 'app-readwritejson',
  templateUrl: './readwritejson.component.html',
  providers: []
})

export class ReadWriteJsonComponent implements OnInit {
  contentData:any;
   
  constructor(    
    private httpClient: HttpClient,
    public router: Router) {         
  }

  ngOnInit() {
    debugger
    this.httpClient.get<any>("../assets/translations.json").subscribe((data)=>    
    this.contentData = data    
    )
    // this.httpClient.get('../assets/translations.json')
    // .subscribe(res => console.log(res));
  }     
  Edit(key) {
    debugger
    this.router.navigate(["admin/readwritejson/edit", key]);
  }
  
}

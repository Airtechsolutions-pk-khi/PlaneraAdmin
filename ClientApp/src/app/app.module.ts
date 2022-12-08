import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { NgSelectModule} from '@ng-select/ng-select';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbdDatepickerRangePopup } from './datepicker-range/datepicker-range-popup';
import { ExcelService } from 'src/ExportExcel/excel.service';
import { newseventComponent } from './admin/planeragroup/newsevent/newsevent.component';
import { AddnewseventComponent } from './admin/planeragroup/newsevent/addnewsevent/addnewsevent.component';
//import { PlnGrpServiceComponent } from '././admin/planeragroup/service/service.component';
//import { AddServicePlnGrpComponent } from '././admin/planeragroup/service/add/addservice.component';

import { HrRprGalleryComponent } from './admin/harmanorepair/gallery/gallery.component';
import { AddGalleryHrRprComponent } from './admin/harmanorepair/gallery/add/addgallery.component';

import { HrRprServiceComponent } from './admin/harmanorepair/service/service.component';
import { AddServiceHrRprComponent } from './admin/harmanorepair/service/add/addservices.component';

import { HrCntGalleryComponent } from './admin/harmanocontract/gallery/gallery.component';
import { AddGalleryHrCntComponent } from './admin/harmanocontract/gallery/add/addgallery.component';

import { GalleryComponent } from '././admin/planerainterior/gallery/gallery.component';
import { AddGalleryComponent } from '././admin/planerainterior/gallery/add/addgallery.component';

import { PlnIntServiceComponent } from '././admin/planerainterior/service/service.component';
import { AddServicePlnIntComponent } from '././admin/planerainterior/service/add/addservice.component';

import { ActBahGalleryComponent } from './admin/activarbahrain/gallery/gallery.component';
import { AddGalleryActBahComponent } from './admin/activarbahrain/gallery/add/addgallery.component';

import { ActBahServiceComponent } from './admin/activarbahrain/service/service.component';
import { AddServiceActBahComponent } from './admin/activarbahrain/service/add/addservice.component';

import { ActBahHomeComponent } from './admin/activarbahrain/homepage/home.component';
import { AddHomeAcBahComponent } from './admin/activarbahrain/homepage/add/addhome.component';

import { ActDubServiceComponent } from './admin/activardubai/service/service.component';
import { AddServiceActDubComponent } from './admin/activardubai/service/add/addservice.component';

import { ActDubGalleryComponent } from './admin/activardubai/gallery/gallery.component';
import { AddGalleryActDubComponent } from './admin/activardubai/gallery/add/addgallery.component';

import { HrCntServiceComponent } from '././admin/harmanocontract/service/service.component';
import { AddServiceHrCntComponent } from '././admin/harmanocontract/service/add/addservice.component';

import { PlnIntHomeComponent } from '././admin/planerainterior/homepage/home.component';
import { AddHomePlnIntComponent } from '././admin/planerainterior/homepage/add/addhome.component';

import { ActDubHomeComponent } from '././admin/activardubai/homepage/home.component';
import { AddHomeAcDubComponent } from '././admin/activardubai/homepage/add/addhome.component';

import { HrCntHomeComponent } from '././admin/harmanocontract/homepage/home.component';
import { AddHomeHrCntComponent } from '././admin/harmanocontract/homepage/add/addhome.component';

import { HrRprHomeComponent } from '././admin/harmanorepair/homepage/home.component';
import { AddHomeHrRprComponent } from '././admin/harmanorepair/homepage/add/addhome.component';
import { ReadWriteJsonComponent } from './admin/readwritejson/readwritejson/readwritejson.component';
import { AddReadWriteJsonComponent } from './admin/readwritejson/readwritejson/addreadwritejson/addreadwritejson.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    DashboardComponent,
    LayoutComponent,
    CounterComponent,
    LoginComponent,
    FetchDataComponent,
    ImageuploadComponent,
    NgbdDatepickerRangePopup,
    newseventComponent,
    AddnewseventComponent,
    //PlnGrpServiceComponent,
    HrRprGalleryComponent,
    AddGalleryHrRprComponent,
    GalleryComponent,
    AddGalleryComponent,
    ActBahGalleryComponent,
    AddGalleryActBahComponent,
    ActDubGalleryComponent,
    AddGalleryActDubComponent,
    HrCntGalleryComponent,
    AddGalleryHrCntComponent,
    ActBahServiceComponent,
    AddServiceActBahComponent,
    ActDubServiceComponent,
    AddServiceActDubComponent,
    PlnIntServiceComponent,
    AddServicePlnIntComponent,
    AddServiceHrCntComponent,
    HrCntServiceComponent,
    HrRprServiceComponent,
    AddServiceHrRprComponent,
    PlnIntHomeComponent,
    AddHomePlnIntComponent,
    ActBahHomeComponent,
    AddHomeAcBahComponent,
    ActDubHomeComponent,
    AddHomeAcDubComponent,
    HrCntHomeComponent,
    AddHomeHrCntComponent,
    HrRprHomeComponent,
    AddHomeHrRprComponent,
    ReadWriteJsonComponent,
    AddReadWriteJsonComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgApexchartsModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      {
        path: 'admin', component: LayoutComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'planeragroup/newsevent', component: newseventComponent },
          { path: 'planeragroup/newsevent/add', component: AddnewseventComponent },
          { path: 'planeragroup/newsevent/edit/:id', component: AddnewseventComponent },

          //{ path: 'planeragroup/service', component: PlnGrpServiceComponent },
          //{ path: 'planeragroup/service/add', component: AddServicePlnGrpComponent },
          //{ path: 'planeragroup/service/edit/:id', component: AddServicePlnGrpComponent },

          { path: 'harmanorepair/gallery', component: HrRprGalleryComponent },
          { path: 'harmanorepair/gallery/add', component: AddGalleryHrRprComponent },
          { path: 'harmanorepair/gallery/edit/:id', component: AddGalleryHrRprComponent },

          { path: 'harmanorepair/service', component: HrRprServiceComponent },
          { path: 'harmanorepair/service/add', component: AddServiceHrRprComponent },
          { path: 'harmanorepair/service/edit/:id', component: AddServiceHrRprComponent },

          { path: 'harmanocontract/service', component: HrCntServiceComponent },
          { path: 'harmanocontract/service/add', component: AddServiceHrCntComponent },
          { path: 'harmanocontract/service/edit/:id', component: AddServiceHrCntComponent },

          { path: 'planerainterior/gallery', component: GalleryComponent },
          { path: 'planerainterior/gallery/add', component: AddGalleryComponent },
          { path: 'planerainterior/gallery/edit/:id', component: AddGalleryComponent },

          { path: 'planerainterior/service', component: PlnIntServiceComponent },
          { path: 'planerainterior/service/add', component: AddServicePlnIntComponent },
          { path: 'planerainterior/service/edit/:id', component: AddServicePlnIntComponent },

          { path: 'planerainterior/homepage', component: PlnIntHomeComponent },
          { path: 'planerainterior/homepage/add', component: AddHomePlnIntComponent },
          { path: 'planerainterior/homepage/edit/:id', component: AddHomePlnIntComponent },

          { path: 'activarbahrain/gallery', component: ActBahGalleryComponent },
          { path: 'activarbahrain/gallery/add', component: AddGalleryActBahComponent },
          { path: 'activarbahrain/gallery/edit/:id', component: AddGalleryActBahComponent },

          { path: 'activarbahrain/service', component: ActBahServiceComponent },
          { path: 'activarbahrain/service/add', component: AddServiceActBahComponent },
          { path: 'activarbahrain/service/edit/:id', component: AddServiceActBahComponent },

          { path: 'activarbahrain/homepage', component: ActBahHomeComponent },
          { path: 'activarbahrain/homepage/add', component: AddHomeAcBahComponent },
          { path: 'activarbahrain/homepage/edit/:id', component: AddHomeAcBahComponent },

          { path: 'activardubai/gallery', component: ActDubGalleryComponent },
          { path: 'activardubai/gallery/add', component: AddGalleryActDubComponent },
          { path: 'activardubai/gallery/edit/:id', component: AddGalleryActDubComponent },

          { path: 'activardubai/service', component: ActDubServiceComponent },
          { path: 'activardubai/service/add', component: AddServiceActDubComponent },
          { path: 'activardubai/service/edit/:id', component: AddServiceActDubComponent },

          { path: 'harmanocontract/gallery', component: HrCntGalleryComponent },
          { path: 'harmanocontract/gallery/add', component: AddGalleryHrCntComponent },
          { path: 'harmanocontract/gallery/edit/:id', component: AddGalleryHrCntComponent },

          { path: 'activardubai/homepage', component: ActDubHomeComponent },
          { path: 'activardubai/homepage/add', component: AddHomeAcDubComponent },
          { path: 'activardubai/homepage/edit/:id', component: AddHomeAcDubComponent },

          { path: 'harmanocontract/homepage', component: HrCntHomeComponent },
          { path: 'harmanocontract/homepage/add', component: AddHomeHrCntComponent },
          { path: 'harmanocontract/homepage/edit/:id', component: AddHomeHrCntComponent },

          { path: 'harmanorepair/homepage', component: HrRprHomeComponent },
          { path: 'harmanorepair/homepage/add', component: AddHomeHrRprComponent },
          { path: 'harmanorepair/homepage/edit/:id', component: AddHomeHrRprComponent },

          { path: 'readwritejson', component: ReadWriteJsonComponent },
          { path: 'readwritejson/add', component: AddReadWriteJsonComponent },
          { path: 'readwritejson/edit/:id', component: AddReadWriteJsonComponent },
        ]
      }
    ]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    NgbModule
  ],
  providers: [],
  exports: [NgbdDatepickerRangePopup],
  bootstrap: [AppComponent,NgbdDatepickerRangePopup]
})
export class AppModule { }

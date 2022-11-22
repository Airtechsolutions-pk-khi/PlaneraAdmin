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
import { serviceComponent } from '././admin/planeragroup/service/service.component';
import { AddServiceComponent } from '././admin/planeragroup/service/add/addservices.component';

import { HrRprGalleryComponent } from './admin/harmanorepair/gallery/gallery.component';
import { AddGalleryHrRprComponent } from './admin/harmanorepair/gallery/add/addgallery.component';

import { HrCntGalleryComponent } from './admin/harmanocontract/gallery/gallery.component';
import { AddGalleryHrCntComponent } from './admin/harmanocontract/gallery/add/addgallery.component';

import { GalleryComponent } from '././admin/planerainterior/gallery/gallery.component';
import { AddGalleryComponent } from '././admin/planerainterior/gallery/add/addgallery.component';

import { ActBahGalleryComponent } from './admin/activarbahrain/gallery/gallery.component';
import { AddGalleryActBahComponent } from './admin/activarbahrain/gallery/add/addgallery.component';
import { ActDubGalleryComponent } from './admin/activardubai/gallery/gallery.component';
import { AddGalleryActDubComponent } from './admin/activardubai/gallery/add/addgallery.component';

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
    serviceComponent,
    AddServiceComponent,
    //HRRepairServiceComponent,
    //AddHRRepairServiceComponent,
    HrRprGalleryComponent,
    AddGalleryHrRprComponent,
    GalleryComponent,
    AddGalleryComponent,
    ActBahGalleryComponent,
    AddGalleryActBahComponent,
    ActDubGalleryComponent,
    AddGalleryActDubComponent,
    HrCntGalleryComponent,
    AddGalleryHrCntComponent
    
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

          { path: 'planeragroup/service', component: serviceComponent },
          { path: 'planeragroup/service/add', component: AddServiceComponent },
          { path: 'planeragroup/service/edit/:id', component: AddServiceComponent },

          { path: 'harmanorepair/gallery', component: HrRprGalleryComponent },
          { path: 'harmanorepair/gallery/add', component: AddGalleryHrRprComponent },
          { path: 'harmanorepair/gallery/edit/:id', component: AddGalleryHrRprComponent },

          { path: 'planerainterior/gallery', component: GalleryComponent },
          { path: 'planerainterior/gallery/add', component: AddGalleryComponent },
          { path: 'planerainterior/gallery/edit/:id', component: AddGalleryComponent },

          { path: 'activarbahrain/gallery', component: ActBahGalleryComponent },
          { path: 'activarbahrain/gallery/add', component: AddGalleryActBahComponent },
          { path: 'activarbahrain/gallery/edit/:id', component: AddGalleryActBahComponent },

          { path: 'activardubai/gallery', component: ActDubGalleryComponent },
          { path: 'activardubai/gallery/add', component: AddGalleryActDubComponent },
          { path: 'activardubai/gallery/edit/:id', component: AddGalleryActDubComponent },

          { path: 'harmanocontract/gallery', component: HrCntGalleryComponent },
          { path: 'harmanocontract/gallery/add', component: AddGalleryHrCntComponent },
          { path: 'harmanocontract/gallery/edit/:id', component: AddGalleryHrCntComponent },
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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { CustomersModule } from './customers/customers.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CustomersComponent } from './customers/customers.component';
import { ServicesComponent } from './services/services.component';
import { ReportsComponent } from './reports/reports.component';
import { CommunicationComponent } from './communication/communication.component';
import { SettingsComponent } from './settings/settings.component';


const ROUTES = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    component: CalendarComponent,
    pathMatch: 'full'
  },
  {
    path: 'customers',
    component: CustomersComponent,
    pathMatch: 'full'
  },
  {
    path: 'services',
    component: ServicesComponent,
    pathMatch: 'full'
  },
  {
    path: 'reports',
    component: ReportsComponent,
    pathMatch: 'full'
  },
  {
    path: 'communication',
    component: CommunicationComponent,
    pathMatch: 'full'
  },
  {
    path: 'settings',
    component: SettingsComponent,
    pathMatch: 'full'
  },
];

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        CalendarComponent,
        ServicesComponent,
        ReportsComponent,
        CommunicationComponent,
        SettingsComponent,
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        CustomersModule,
        RouterModule.forRoot(ROUTES)
  ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatSelectModule} from "@angular/material/select";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatPaginatorModule} from "@angular/material/paginator";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { HomeComponent } from './Components/navigation/home/home.component';
import { FacilitiesComponent } from './Components/navigation/facilities/facilities.component';
import { ContactUsComponent } from './Components/navigation/contact-us/contact-us.component';
import { TeamComponent } from './Components/navigation/team/team.component';
import { GalleryComponent } from './Components/navigation/gallery/gallery.component';
import { ActivitiesComponent } from './Components/navigation/activities/activities.component';
import { AuthContextComponent } from './Components/auth-context/auth-context.component';
import { LoginComponent } from './Components/auth-context/login/login.component';
import { SignupComponent } from './Components/auth-context/signup/signup.component';
import { DashboardPatientComponent } from './Components/dashboard-patient/dashboard-patient.component';
import { DashboardStaffComponent } from './Components/dashboard-staff/dashboard-staff.component';
import { DashboardDoctorComponent } from './Components/dashboard-doctor/dashboard-doctor.component';
import { DashboardStudentComponent } from './Components/dashboard-student/dashboard-student.component';
import { TopBarComponent } from './Components/dashboard-patient/items/top-bar/top-bar.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopBarDoctorComponent } from './Components/dashboard-doctor/items/top-bar-doctor/top-bar-doctor.component';
import { TopBarStaffComponent } from './Components/dashboard-staff/items/top-bar-staff/top-bar-staff.component';
import { TopBarStudentComponent } from './Components/dashboard-student/items/top-bar-student/top-bar-student.component';
import { PatientContextComponent } from './Components/dashboard-staff/Components/patient-context/patient-context.component';

import { SeePatientsComponent } from './Components/dashboard-staff/Components/patient-context/see-patients/see-patients.component';
import { SavePatientsComponent } from './Components/dashboard-staff/Components/patient-context/save-patients/save-patients.component';
import { UpdatePatientsComponent } from './Components/dashboard-staff/Components/patient-context/update-patients/update-patients.component';
import { DeletePatientsComponent } from './Components/dashboard-staff/Components/patient-context/delete-patients/delete-patients.component';
import { SearchPatientComponent } from './Components/dashboard-staff/Components/patient-context/search-patient/search-patient.component';
import { StaffContextComponent } from './Components/dashboard-staff/Components/staff-context/staff-context.component';
import { DoctorContextComponent } from './Components/dashboard-staff/Components/doctor-context/doctor-context.component';
import { StudentContextComponent } from './Components/dashboard-staff/Components/student-context/student-context.component';

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FacilitiesComponent,
    ContactUsComponent,
    TeamComponent,
    GalleryComponent,
    ActivitiesComponent,
    AuthContextComponent,
    LoginComponent,
    SignupComponent,
    DashboardPatientComponent,
    DashboardStaffComponent,
    DashboardDoctorComponent,
    DashboardStudentComponent,
    TopBarComponent,
    TopBarDoctorComponent,
    TopBarStaffComponent,
    TopBarStudentComponent,
    PatientContextComponent,

    SeePatientsComponent,
    SavePatientsComponent,
    UpdatePatientsComponent,
    DeletePatientsComponent,
    SearchPatientComponent,
    StaffContextComponent,
    DoctorContextComponent,
    StudentContextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatOptionModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./Components/navigation/home/home.component";
import {TeamComponent} from "./Components/navigation/team/team.component";
import {GalleryComponent} from "./Components/navigation/gallery/gallery.component";
import {FacilitiesComponent} from "./Components/navigation/facilities/facilities.component";
import {ContactUsComponent} from "./Components/navigation/contact-us/contact-us.component";
import {ActivitiesComponent} from "./Components/navigation/activities/activities.component";
import {NavigationComponent} from "./Components/navigation/navigation.component";
import {AuthContextComponent} from "./Components/auth-context/auth-context.component";
import {LoginComponent} from "./Components/auth-context/login/login.component";
import {SignupComponent} from "./Components/auth-context/signup/signup.component";
import {DashboardPatientComponent} from "./Components/dashboard-patient/dashboard-patient.component";
import {DashboardStaffComponent} from "./Components/dashboard-staff/dashboard-staff.component";
import {DashboardDoctorComponent} from "./Components/dashboard-doctor/dashboard-doctor.component";
import {DashboardStudentComponent} from "./Components/dashboard-student/dashboard-student.component";
import {PatientContextComponent} from "./Components/dashboard-staff/Components/patient-context/patient-context.component";
import {DoctorContextComponent} from "./Components/dashboard-staff/Components/doctor-context/doctor-context.component";
import {StaffContextComponent} from "./Components/dashboard-staff/Components/staff-context/staff-context.component";
import {StudentContextComponent} from "./Components/dashboard-staff/Components/student-context/student-context.component";

const routes: Routes = [
  {path: '',redirectTo:'/navigation/home',pathMatch:'full'},
  {
    path: 'navigation', component: NavigationComponent, children: [
      {path: 'home', component: HomeComponent},
      {path: 'team', component: TeamComponent},
      {path: 'gallery', component: GalleryComponent},
      {path: 'facilities', component: FacilitiesComponent},
      {path: 'contactUs', component: ContactUsComponent},
      {path: 'activities', component: ActivitiesComponent}
    ]
  },
  {path:'auth-context',component:AuthContextComponent,children:[
      {path: 'login',component: LoginComponent},
      {path: 'signup',component: SignupComponent}
    ]
  },
  {path:'dashboard-patient',component:DashboardPatientComponent},

  {path:'dashboard-doctor',component:DashboardDoctorComponent},
  {path:'dashboard-student',component:DashboardStudentComponent},

  {path:'dashboard-staff',component:DashboardStaffComponent,children:[
      {path: 'patient-context',component: PatientContextComponent},
      {path: 'doctor-context',component:  DoctorContextComponent},
      {path: 'staff-context',component: StaffContextComponent},
      {path: 'student-context',component: StudentContextComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

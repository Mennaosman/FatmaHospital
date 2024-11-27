import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClientsComponent } from './clients/clients.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesDataComponent } from './services-data/services-data.component';
import { ClientDataComponent } from './client-data/client-data.component';
import { OutsideClinicsComponent } from './outside-clinics/outside-clinics.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { LaboratoryAnalysisComponent } from './laboratory-analysis/laboratory-analysis.component';
import { XrayComponent } from './xray/xray.component';
import { SurgicalOperationsComponent } from './surgical-operations/surgical-operations.component';
import { NurseryComponent } from './nursery/nursery.component';
import { IntensiveCareComponent } from './intensive-care/intensive-care.component';

const routes: Routes = [
{path:'',component:HomeComponent},
// {path:'home',component:HomeComponent},
{path:'about_us',component:AboutUsComponent},
{path:'clients',component:ClientsComponent},
{path:'services',component:ServicesComponent},
{path:'services/outsideclinics',component:OutsideClinicsComponent},
{path:'services/emergency',component:EmergencyComponent},
{path:'services/laboratory',component:LaboratoryAnalysisComponent},
{path:'services/xrays',component:XrayComponent},
{path:'services/nursery',component:NurseryComponent},
{path:'services/operations',component:SurgicalOperationsComponent},
{path:'services/intensivecare',component:IntensiveCareComponent},
{path:'contactus',component:ContactUsComponent},
{path:'outsideclinics',component:OutsideClinicsComponent},
{path:'emergency',component:EmergencyComponent},
{path:'laboratory',component:LaboratoryAnalysisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

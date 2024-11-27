import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClientsComponent } from './clients/clients.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
// import { SlidersComponent } from './sliders/sliders.component';
import { CategoriesSliderComponent } from './categories-slider/categories-slider.component';
import { ClientDataComponent } from './client-data/client-data.component';
import { ServicesDataComponent } from './services-data/services-data.component';
import { CopyrightsComponent } from './copyrights/copyrights.component';
import { TextBarComponent } from './text-bar/text-bar.component';
import { OutsideClinicsComponent } from './outside-clinics/outside-clinics.component';
import { EmergencyComponent } from './emergency/emergency.component';
import { LaboratoryAnalysisComponent } from './laboratory-analysis/laboratory-analysis.component';
import { XrayComponent } from './xray/xray.component';
import { IntensiveCareComponent } from './intensive-care/intensive-care.component';
import { SurgicalOperationsComponent } from './surgical-operations/surgical-operations.component';
import { NurseryComponent } from './nursery/nursery.component';
import { CatheterizationComponent } from './catheterization/catheterization.component';
import { PhysiotherapyComponent } from './physiotherapy/physiotherapy.component';
import { InternalSectionComponent } from './internal-section/internal-section.component';
import { AboutHosbitalComponent } from './about-hosbital/about-hosbital.component';
import { CountersComponent } from './counters/counters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    ClientsComponent,
    ServicesComponent,
    ContactUsComponent,
    // SlidersComponent,
    CategoriesSliderComponent,
    ClientDataComponent,
    ServicesDataComponent,
    CopyrightsComponent,
    TextBarComponent,
    OutsideClinicsComponent,
    EmergencyComponent,
    LaboratoryAnalysisComponent,
    XrayComponent,
    IntensiveCareComponent,
    SurgicalOperationsComponent,
    NurseryComponent,
    CatheterizationComponent,
    PhysiotherapyComponent,
    InternalSectionComponent,
    AboutHosbitalComponent,
    CountersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

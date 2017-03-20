import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { BildergalerieStorage } from './shared/services/bildergalerie-storage.service';

import { AppComponent } from './app.component';
import { NaviBarComponent } from './navi-bar/navi-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { HomeComponent } from './home/home.component';
import { PhilosophieComponent } from './philosophie/philosophie.component';
import { BildergalerieComponent } from './bildergalerie/bildergalerie.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviBarComponent,
    LandingPageComponent,
    HomeComponent,
    PhilosophieComponent,
    BildergalerieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    BildergalerieStorage
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

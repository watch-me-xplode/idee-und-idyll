import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from "./landing-page/landing-page.component";
import { HomeComponent } from "./home/home.component";
import { PhilosophieComponent } from "./philosophie/philosophie.component";
import { BildergalerieComponent } from "./bildergalerie/bildergalerie.component";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: []
  },
  {
    path: 'home',
    component: HomeComponent,
    children: []
  },
  {
    path: 'philosophie',
    component: PhilosophieComponent,
    children: []
  },
  {
    path: 'galerie',
    component: BildergalerieComponent,
    children: []
  },
  {
    path: '**',
    component: LandingPageComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

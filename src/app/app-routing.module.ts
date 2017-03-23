import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { PhilosophieComponent } from "./philosophie/philosophie.component";
import { BildergalerieComponent } from "./bildergalerie/bildergalerie.component";
import { LinksComponent } from "./links/links.component";
import { KontaktComponent } from "./kontakt/kontakt.component";
import { GuestbookComponent } from "./guestbook/guestbook.component";
import { ImpressumComponent } from "./impressum/impressum.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
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
    path: 'links',
    component: LinksComponent,
    children: []
  },
  {
    path: 'kontakt',
    component: KontaktComponent,
    children: []
  },
  {
    path: 'guestbook',
    component: GuestbookComponent,
    children: []
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
    children: []
  },
  {
    path: '**',
    component: HomeComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

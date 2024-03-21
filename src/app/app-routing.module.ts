import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './comp/home/home.component';
import { ProjekteComponent } from './comp/projekte/projekte.component';
import { KonfiguratorComponent } from './comp/konfigurator/konfigurator.component';
import { KontaktComponent } from './comp/kontakt/kontakt.component';

import { DatenschutzComponent } from './comp/datenschutz/datenschutz.component';
import { ImpressumComponent } from './comp/impressum/impressum.component';
import { AgbComponent } from './comp/agb/agb.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  {
    path: 'start',
    component: HomeComponent,
  },
  {
    path: 'projekte',
    component: ProjekteComponent,
  },
  {
    path: 'konfigurator',
    component: KonfiguratorComponent,
  },
  {
    path: 'kontakt',
    component: KontaktComponent,
  },
  {
    path: 'impressum',
    component: ImpressumComponent,
  },
  {
    path: 'datenschutz',
    component: DatenschutzComponent,
  },
  {
    path: 'agb',
    component: AgbComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      useHash: false,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

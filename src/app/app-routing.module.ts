import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroComponent }      from './components/hero/hero.component';
import { DashboardComponent }      from './components/dashboard/dashboard.component';
import {HeroDetailComponent} from "./components/hero-detail/hero-detail.component";

const routes: Routes = [
  {  path: 'heroes', component: HeroComponent },
  {  path: 'dashboard', component: DashboardComponent },
  {  path: '',  redirectTo: '/dashboard',  pathMatch: 'full' },
  {  path: 'detail/:id', component: HeroDetailComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class HeroRoutingModule { }

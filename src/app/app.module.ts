import './rxjs-extensions';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent }         from './app.component';
import { HeroComponent }        from './components/hero/hero.component';
import { HeroDetailComponent }  from './components/hero-detail/hero-detail.component';
import { HeroService }          from './services/hero/hero.service';
import { HeroRoutingModule }    from './app-routing.module';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroSearchComponent }  from './components/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }

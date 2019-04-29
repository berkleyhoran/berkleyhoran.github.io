import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { ContactComponent } from './contact/contact.component'

import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgrammingComponent } from './programming/programming.component';
import { ExperienceComponent } from './experience/experience.component';

const appRoutes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'index', component: HomepageComponent },
  { path: 'programming', component: ProgrammingComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PageNotFoundComponent,
    ContactComponent,
    ToolbarComponent,
    ProgrammingComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ 

  
}

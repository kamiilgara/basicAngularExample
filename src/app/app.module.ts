import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { EmployersModule } from './modules/employers.module';
import { JobseekersModule } from './modules/jobseekers.module';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http'
import { JobseekersService } from './services/jobseekers.service';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutusComponent,
    FilterPipe,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployersModule,
    JobseekersModule,
    HttpClientModule,
    HomeComponent,
    NgbCollapseModule,
    FormsModule
  ],
  providers: [
    JobseekersService,
    EmployersModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

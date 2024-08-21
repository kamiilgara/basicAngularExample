import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployersComponent } from '../components/employers/employers/employers.component';
import { RouterModule } from '@angular/router';
import { EmployerComponent } from '../components/employers/employers/employer/employer.component';
import { EmployersService } from '../services/employers.service';



@NgModule({
  declarations: [
    EmployersComponent,
    EmployerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: EmployersComponent },
      { path: ":id", component: EmployerComponent }
    ])
  ],
  providers: [
    EmployersService,
  ],
  exports: [
  ]
})
export class EmployersModule { }

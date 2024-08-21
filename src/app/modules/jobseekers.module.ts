import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JobseekersComponent } from '../components/jobseekers/jobseekers/jobseekers.component';
import { JobseekerComponent } from '../components/jobseekers/jobseekers/jobseeker/jobseeker.component';
import { JobseekersService } from '../services/jobseekers.service';



@NgModule({
  declarations: [
    JobseekersComponent,
    JobseekerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: JobseekersComponent },
      { path: ":id", component: JobseekerComponent }
    ])
  ],
  providers: [
    JobseekersService
  ],
  exports: [
  ]
})
export class JobseekersModule { }

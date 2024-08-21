import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobseekersService } from 'src/app/services/jobseekers.service';


@Component({
  selector: 'app-jobseeker',
  templateUrl: './jobseeker.component.html',
  styleUrls: ['./jobseeker.component.scss']
})

export class JobseekerComponent implements DoCheck, OnInit {

  allJobs:any = [];
  selectedJob?:any;



  constructor(private activateRouter: ActivatedRoute, private jobService: JobseekersService) {}

  ngOnInit(): void {
    this.jobService.get().subscribe(data => {
      this.allJobs = data;
    })
  };

  ngDoCheck(): void {

    let id: any = this.activateRouter.snapshot.paramMap.get('id');
    this.selectedJob = this.allJobs.find((i: { id: any; }) => i.id == id);
    this.selectedJob?.id;
    this.selectedJob?.title;
    this.selectedJob?.body;
  }


}
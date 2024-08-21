import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobseekersService } from 'src/app/services/jobseekers.service';

@Component({
  selector: 'app-jobseekers',
  templateUrl: './jobseekers.component.html',
  styleUrls: ['./jobseekers.component.scss']
})
export class JobseekersComponent implements OnInit {

  constructor( private jobsServer: JobseekersService, private activatedRoute: ActivatedRoute ) {};

  ngOnInit(): void {
    this.getJobs();
  }


  allJobs:any = [];


  getJobs() :void {
    this.jobsServer.get().subscribe(data => {
      this.allJobs = data;
    })
  };

}

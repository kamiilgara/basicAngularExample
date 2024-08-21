import { Component, DoCheck, OnInit } from '@angular/core';
import { JobseekersService } from 'src/app/services/jobseekers.service';
declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit, DoCheck {


  constructor(private allJob: JobseekersService) { }

  ngDoCheck(): void {
    $(window).scroll(function () {
      $('nav').toggleClass('scrolled', $(window).scrollTop() > 400);
    });
  };


  allJobs: any = [];
  isMenuCollapsed = true;
  searchText = '';


  ngOnInit(): void {
    this.allJob.get().subscribe(data => {
      this.allJobs = data
    });
  };

  deleteList() {
    this.searchText = "";
  };


}




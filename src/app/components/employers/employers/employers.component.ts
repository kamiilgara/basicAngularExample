import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployersService } from 'src/app/services/employers.service';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.scss']
})
export class EmployersComponent implements OnInit {

  constructor(private empServer: EmployersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getEmployers();    
  };

  allEmployers: any = [];

  getEmployers(): void {
    this.empServer.get().subscribe(data => {
      this.allEmployers = data
    })
  }  



}

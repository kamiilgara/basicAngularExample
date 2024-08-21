import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployersService } from 'src/app/services/employers.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.scss']
})
export class EmployerComponent implements OnInit, DoCheck {

  constructor(private activatedRouter: ActivatedRoute, private employerServer: EmployersService) { }

  ngOnInit(): void {
    this.getEmployers();
  };

  allEmployer: any = [];
  selectedUser?: any;

  getEmployers(): void {
    this.employerServer.get().subscribe(data => {
      this.allEmployer = data
    })
  };

  ngDoCheck():void {
    let id:any = this.activatedRouter.snapshot.paramMap.get('id');
    this.selectedUser! = this.allEmployer.find((i: { id: any; }) => i.id = id);
    this.selectedUser?.id;
    this.selectedUser?.name;
    this.selectedUser?.email;
    this.selectedUser?.username;
    this.selectedUser?.phone;
    this.selectedUser?.website;
    this.selectedUser?.company.name;
    this.selectedUser?.company.bs;
    this.selectedUser?.address.street;
    this.selectedUser?.address.city;
    this.selectedUser?.address.zipcode;
  }



}

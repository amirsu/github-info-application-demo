import { Component,OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import * as $ from 'jquery';
import 'bootstrap';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  // decalaration 
  title = 'Welcome to Github';
  Userlistdata: any;
  searchText;
  viewuserdata: any;
  totalrepository: any;
  usernameofrepositor: any;

  constructor(private UserService:UserService ) { }
  ngOnInit() {
    // calling funtion oninit to display user on paegload 
this.getsubmitdetails()

}  

  //get submit details from Userservice
  getsubmitdetails() {
    // get users API call
    this.UserService.getsubmitdetails().subscribe(response => {
       // get users API response here
    this.Userlistdata = response;
    }, error => {
      console.log(error)
    });


  }
  viewrepos(user) {
    // view repositories API call
    this.UserService.getrepositorydetails(user).subscribe(response => {
      // save response  for showing users 
      this.viewuserdata=response;
      this.usernameofrepositor = user;
      // count of repository
      this.totalrepository = this.viewuserdata.length;
      // modal for viewing repositories
      $("#ReposModal").modal("show");
      
    }, error => {
      console.log(error)
    });


  }
}

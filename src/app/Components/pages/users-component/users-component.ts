import { Component, inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { finalize } from 'rxjs';
import { UserLookupBox } from "../../user-lookup-box/user-lookup-box";
import { Users } from '../../../Services/UsersService/users';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-users-component',
  imports: [FormsModule, UserLookupBox, JsonPipe],
  templateUrl: './users-component.html',
  styleUrl: './users-component.scss'
})
export class UsersComponent implements OnInit{
  selectedUser:Users | null = null;
  userList:any [] = [];
  _http:HttpClient = inject(HttpClient);
  userObj:any = {
    "userId": 0,
    "emailId": "",
    "password": "",
    "fullName": "",
    "mobileNo": ""
  };
  isLoading:boolean = false;
  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.isLoading = true;
    this._http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers")
      .pipe(
        finalize(() => {
          this.isLoading = false; 
        })
      )
      .subscribe({
        next:(res:any) => {
            this.userList = res;
            // console.log(res);
            this.isLoading = false;
        },
        error:(error) =>{
          console.error(error);
        }
      });
  }
  addNewUser(){
    this.isLoading = true;
    this._http.post("https://api.freeprojectapi.com/api/GoalTracker/register", this.userObj) 
              .pipe(
                finalize(() => {
                  this.isLoading = false; 
                })
              )
              .subscribe({
                next:(result) =>{ 
                  console.log(result);
                  alert(`${this.userObj.fullName} User registered successfully ;)`);
                  this.getAllUsers();
                },
                error:(error) => { console.error(error); }
              });
  }
  handleSelectedUser(user:Users){
    if(!user) return; 
    this.selectedUser = user;
    console.log(this.selectedUser);
  }
  showAllUsers(){
    this.userList = [];
    this.getAllUsers();
  }
}

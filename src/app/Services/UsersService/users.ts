import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
export interface Users{
  userId:number,
  emailId:string,
  password:string,
  fullName:string,
  mobileNo:string
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  protected usersList:Users[] = [];
  _http:HttpClient = inject(HttpClient);

  constructor() { }
  
  getAllUsers(): Observable<Users[]>{
    this._http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers")
        .subscribe({
          next:(res:any) => {
              this.usersList = res;
          },
          error:(error:unknown) =>{
            console.error(error);
          }
        });
    return of(this.usersList);
  }
  getUserByFullName(keyword:string):Observable<Users[]>{
    if (!keyword) {
      return of([]);
    }
    return this.getAllUsers().pipe(
      map((users) => users.filter(
          (user) => user.fullName.toLowerCase().includes(keyword.toLowerCase())
         ))
    );
  }
}

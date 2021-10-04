import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsersList = () => {
    return new Promise(function (resolve, reject) {
          return axios.get("https://reqres.in/api/users?page=1&per_page=10").then((result: any)=>{

          if(result && result.data && result.data.data) {
            resolve(result.data.data)
          }

          }).catch(error => {
              reject(error)
          })
    });
  }

}

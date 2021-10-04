import { Component, OnInit } from '@angular/core';
import { UsersService } from '../core/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  allUsers: any;
  colorList = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D']

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
      this.rederList();
  }

  rederList = () => {
     
    this.usersService.getUsersList().then((data: any) => {
      this.allUsers = data;

      for(let user of this.allUsers) {
        let randomString = Math.random().toString();
        let randomNumber = randomString.substring(2,4);
        user['random'] = +randomNumber;
      }

    this.allUsers.sort((a:any, b:any) => {
        return a.random - b.random
    })

    this.allUsers.forEach((user: any, index: number) => {
        if (index == 0) {
            user['color'] = 'green'
        } else if((index +1) == this.allUsers.length) {
            user['color'] = 'red'
        } else {
          user['color'] = this.colorList[index];
        }
    });
    
    }).catch((error) => {
      console.log("Error in API");
    })
  }
}

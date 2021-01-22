import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
    userList: User[]=[]
  constructor(private readonly userService: UsersService) { }

  ngOnInit():void {
    this.userService.getAll().subscribe(
      res=>this.userList = res
    )
  }
  deleteUser(id:number){
    this.userService.delete(id).subscribe(
      res=>{
        this.userList = this.userList.filter(user=>user.id !== id)
      }
    )
  }

}

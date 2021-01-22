import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.scss']
})
export class DetailUserComponent implements OnInit {
    user: User = null;
  constructor(
    private readonly userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id:number = +this.route.snapshot.paramMap.get('id');

    this.userService.getById(id).subscribe(
      res=>{
        this.user = res
      },
      err=>{
        if(err.status === 404)
          this.router.navigate(["/error-not-found"])
      }
    )
  }

}

import { UsersService } from './../users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-upsert-user',
  templateUrl: './upsert-user.component.html',
  styleUrls: ['./upsert-user.component.scss'],
})
export class UpsertUserComponent implements OnInit {
  userForm!: FormGroup;
  isEdit = false;
  constructor(
    private readonly formBuilder: FormBuilder,
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(2),
        ],
      ],
      username: [
        null,
        [
          Validators.required,
          Validators.maxLength(100),
          Validators.minLength(2),
        ],
      ],
      phone: [
        null,
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.minLength(9),
        ],
      ],
      email: [null, [Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    });
    const id = +this.route.snapshot.paramMap.get('id');
    if (!!id) {
      this.isEdit = true;

      const user = this.userService.getById(id).subscribe(res=> this.userForm.patchValue(res));
      // if (!user) {
      //   this.router.navigateByUrl('/404');
      //   return;
      // }

    }
  }
  submitForm(){
    if(this.userForm.invalid)
    return
    if(this.isEdit)
    this.submitUpdate();
    else
    this.submitRegister();

    this.router.navigate(["/"]);
  }
  submitRegister(){
    const user = this.userForm.value;
    this.userService.create(user).subscribe(res=>{
      alert("Create user success!");
      this.router.navigateByUrl("/users");
    })
  }
  submitUpdate(){
    const user = this.userForm.value;
    const id = +this.route.snapshot.paramMap.get("id");
    this.userService.update(id,user).subscribe(res=>{
      alert("Update user success!");
      this.router.navigateByUrl("/users");
    });
  }
  back(){
    this.location.back()
  }
  getControl(controlName: string) {
    return this.userForm.get(controlName);
  }
}

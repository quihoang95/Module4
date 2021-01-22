import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AwesomeService } from '../service/awesome.service';

@Component({
  selector: 'app-create-awesome',
  templateUrl: './create-awesome.component.html',
  styleUrls: ['./create-awesome.component.scss']
})
export class CreateAwesomeComponent implements OnInit {
    awesomeForm!:FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
    private awesomeService: AwesomeService,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.awesomeForm = this.formBuilder.group({
      tag: [
        null,[Validators.required]
      ],
      url:[
        null,[Validators.required,Validators.maxLength(30),Validators.minLength(10)]
      ],
      description:[
        null,[Validators.required]
      ]
    });
  }

  submitForm(){
    for (const i in this.awesomeForm.controls) {
      this.awesomeForm.controls[i].markAsDirty();
      this.awesomeForm.controls[i].updateValueAndValidity();
    }

    if(this.awesomeForm.invalid)
      return

    this.addBook();
    this.awesomeForm.reset();
  }

  addBook(){
    const awesome = this.awesomeForm.value;

    this.awesomeService.create(awesome).subscribe(res=>{
      alert("Create app success!");
      this.router.navigateByUrl('/')
    })
  }

  getControl(controlName:string){
    return this.awesomeForm.get(controlName);
  }

  back(){
    return this.location.back();
  }

}

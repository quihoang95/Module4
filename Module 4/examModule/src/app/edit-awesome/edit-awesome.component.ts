import { Awesomes } from './../shared/model/awesomes.model';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AwesomeService } from '../service/awesome.service';

@Component({
  selector: 'app-edit-awesome',
  templateUrl: './edit-awesome.component.html',
  styleUrls: ['./edit-awesome.component.scss'],
})
export class EditAwesomeComponent implements OnInit {
  awesome: Awesomes[] = [];
  awesomeForm!: FormGroup;
  idDelete: any;

  constructor(
    private readonly fb: FormBuilder,
    private awesomeService: AwesomeService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {
    this.awesomeForm = this.fb.group({
      tag: [null, [Validators.required]],
      url: [
        null,
        [
          Validators.required,
          Validators.maxLength(30),
          Validators.minLength(10),
        ],
      ],
      description: [null, [Validators.required]],
    });
    const id = +this.route.snapshot.paramMap.get('id');
    this.idDelete = id;
    if (!!id) {
      this.awesomeService.getById(+id).subscribe((res) => {
        this.awesomeForm.patchValue(res);
      });
    }
  }
  submitUpdate() {
    const awesome = this.awesomeForm.value;
    const id = +this.route.snapshot.paramMap.get('id');
    if (!!id) {
      this.awesomeService.update(id, awesome).subscribe((res) => {
        this.router.navigateByUrl('/');
      });
    }
  }
  deleteApp(id: number) {
    this.awesomeService.delete(id).subscribe((res) => {
      this.awesome = this.awesome.filter((m) => m.id !== id);
      this.router.navigateByUrl('/');
    });
  }
  back() {
    return this.location.back();
  }
}

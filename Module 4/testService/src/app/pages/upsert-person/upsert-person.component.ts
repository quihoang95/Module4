import { PersonService } from './../../shared/services/person.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-upsert-person',
  templateUrl: './upsert-person.component.html',
  styleUrls: ['./upsert-person.component.scss'],
})
export class UpsertPersonComponent implements OnInit {
  addPersonForm!: FormGroup;
  isEdit = false;

  constructor(
    private fb: FormBuilder,
    private readonly personService: PersonService,
    private location: Location,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.addPersonForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: [null, [Validators.required, Validators.min(18)]],
      address: [null, [Validators.required, Validators.minLength(10)]],
    });

    const id = +this.route.snapshot.paramMap.get('id');

    if (!!id) {
      this.isEdit = true;
      const person = this.personService.getById(id);
      if (!person) {
        this.router.navigateByUrl('/404');
        return;
      }
      this.addPersonForm.patchValue(person);
    }
  }

  submitForm() {
    for (const i in this.addPersonForm.controls) {
      this.addPersonForm.controls[i].markAsDirty();
      this.addPersonForm.controls[i].updateValueAndValidity();
    }

    if (this.addPersonForm.invalid) return;
    if (this.isEdit) this.submitUpdate();
    else this.submitRegister();

    this.router.navigate(['/']);
  }
  submitRegister() {
    const { value } = this.addPersonForm;
    this.personService.add(value);
  }
  submitUpdate() {
    const { value } = this.addPersonForm;
    const id = +this.route.snapshot.paramMap.get('id');
    this.personService.edit(id, value);
  }
  back() {
    this.location.back();
  }
}

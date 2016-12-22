import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

import { ReviewsService} from '../reviews.service';

@Component({
  selector: 'app-add-review-page',
  templateUrl: './add-review-page.component.html',
  styleUrls: ['./add-review-page.component.scss']
})
export class AddReviewPageComponent implements OnInit {
  private pets = [];
  private isLoading = true;

  private pet = {};
  private isEditing = false;

  private addPetForm: FormGroup;
  private name = new FormControl("", Validators.required);
  private age = new FormControl("", Validators.required);
  private weight = new FormControl("", Validators.required);

  constructor(private http: Http,
              private reviewsService: ReviewsService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getPets();

    this.addPetForm = this.formBuilder.group({
      name: this.name,
      age: this.age,
      weight: this.weight
    });
  }

  getPets() {
    this.reviewsService.getPets().subscribe(
      data => this.pets = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }

  addPet() {
    this.reviewsService.addPet(this.addPetForm.value).subscribe(
      res => {
        var newPet = res.json();
        this.pets.push(newPet);
        this.addPetForm.reset();
      },
      error => console.log(error)
    );
  }

  enableEditing(pet) {
    this.isEditing = true;
    this.pet = pet;
  }

  cancelEditing() {
    this.isEditing = false;
    this.pet = {};
    // reload the pets to reset the editing
    this.getPets();
  }

  editPet(pet) {
    this.reviewsService.editPet(pet).subscribe(
      res => {
        this.isEditing = false;
        this.pet = pet;
      },
      error => console.log(error)
    );
  }

  deletePet(pet) {
    if(window.confirm("Are you sure you want to permanently delete this item?")) {
      this.reviewsService.deletePet(pet).subscribe(
        res => {
          var pos = this.pets.map(pet => { return pet._id }).indexOf(pet._id);
          this.pets.splice(pos, 1);
        },
        error => console.log(error)
      );
    }
  }
}

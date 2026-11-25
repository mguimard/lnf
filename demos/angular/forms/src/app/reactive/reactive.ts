import { Component, inject, Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ValidationError } from '@angular/forms/signals';

const checkPrice: ValidatorFn = (control: AbstractControl): ValidationError | null => {
  console.log('Checking price');
  if (control.value % 2 === 1) {
    return {
      kind: 'error',
      message: 'cannot be odd',
    };
  }
  return null;
};

@Injectable({
  providedIn: 'root',
})
class CheckPriceV2 implements AsyncValidator {
  // CDI, inject possible
  async validate(control: AbstractControl): Promise<ValidationErrors | null> {
    // await  possible ...
    console.log('Checking price v2');
    return null;
  }
}

@Component({
  imports: [FormsModule, ReactiveFormsModule],
  selector: 'app-reactive',
  styleUrl: './reactive.css',
  templateUrl: './reactive.html',
})
export class Reactive {
  formBuilder = inject(FormBuilder);
  myAsyncValidator = inject(CheckPriceV2);

  pizzaForm: FormGroup = this.formBuilder.group({
    name: this.formBuilder.control('Nom pizza', [Validators.required]),
    price: this.formBuilder.control(
      10,
      [Validators.required, checkPrice],
      [this.myAsyncValidator.validate.bind(this.myAsyncValidator)],
    ),
    ingredients: this.formBuilder.array(['tomate', 'mozza']),
  });

  addIngredient() {
    console.log(this.pizzaForm.controls['ingredients']);
    (this.pizzaForm.controls['ingredients'] as FormArray).push(this.formBuilder.control(''));
  }

  onSubmit() {
    console.log(this.pizzaForm.value);
  }
}

import { Component, effect, signal } from '@angular/core';
import { form, FormField, required, validate } from '@angular/forms/signals';

interface Pizza {
  name: string;
  price: number;
  ingredients: string[];
}

@Component({
  imports: [FormField],
  selector: 'app-signals',
  styleUrl: './signals.css',
  templateUrl: './signals.html',
})
export class Signals {
  pizza = signal<Pizza>({
    name: 'Name',
    price: 10,
    ingredients: ['tomate'],
  });

  pizzaForm = form(this.pizza, (schemaPath) => {
    required(schemaPath.name, { message: 'Name is required' });
    validate(schemaPath.price, ({ value }) => {
      if (value() % 2 === 1) {
        console.log('Non valide !');
        return {
          kind: 'price',
          message: 'Price must not be odd',
        };
      }
      return null;
    });
  });

  pizzaChange = effect(() => {
    console.log(this.pizza());
  });

  addIngredient() {
    //this.pizza.update((c) => ({ ...c, ingredients: [...c.ingredients, ''] }));
    this.pizza.set({ ...this.pizza(), ingredients: [...this.pizza().ingredients, ''] });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    console.log(this.pizza());
    console.log(this.pizzaForm().valid());
    return false;
  }
}

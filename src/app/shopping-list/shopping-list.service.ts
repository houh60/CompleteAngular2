import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatos', 10),
    ];

    ingredientChanged = new EventEmitter();

    constructor() {}

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}

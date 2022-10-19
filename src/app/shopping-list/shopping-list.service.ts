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
        this.integrateIngredients(newIngredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        for(let ingredient of ingredients) {
            this.integrateIngredients(ingredient);
        }
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    integrateIngredients(newIngredient: Ingredient) {
        let theIngredient: any;
        this.ingredients.filter(ingredient => {
            if(ingredient.name == newIngredient.name) {
                theIngredient = ingredient;
            }
        });

        if(theIngredient) {
            theIngredient.amount = +theIngredient.amount + +newIngredient.amount;
        } else {
            this.ingredients.push(newIngredient);
        }
    }
}

import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipeService {

    recipeSelected = new EventEmitter();

    private recipes: Recipe[] = [
        new Recipe('1st Test Recipe', 'This is the first test recipe.', 'https://www.eatwell101.com/wp-content/uploads/2020/10/Garlic-Butter-Steak-recipe-roasted-in-Oven.jpg', [
            new Ingredient('meat', 1),
            new Ingredient('potatos', 5),
            new Ingredient('green beans', 10)
        ]),
        new Recipe('2nd Test Recipe', 'This is the second test recipe.', 'https://assets.epicurious.com/photos/563b9cdf4cc2d53b6f5144b6/master/w_1280,c_limit/388552_porterhouse-steak_1x1.jpg', [
            new Ingredient('meat', 1)
        ]),
        new Recipe('3rd Test Recipe', 'This is the third test recipe.', 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2017_38/1284135/al-rokers-grilled-rib-eye-today-tease-170922.jpg', [
            new Ingredient('meat', 1)
        ]),
    ];

    constructor() {}

    getRecipes() {
        return this.recipes.slice();
    }
}

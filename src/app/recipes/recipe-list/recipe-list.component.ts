import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

    recipes: Recipe[] = [
        new Recipe('1st Test Recipe', 'This is the first test recipe.', 'https://www.eatwell101.com/wp-content/uploads/2020/10/Garlic-Butter-Steak-recipe-roasted-in-Oven.jpg'),
        new Recipe('2nd Test Recipe', 'This is the second test recipe.', 'https://assets.epicurious.com/photos/563b9cdf4cc2d53b6f5144b6/master/w_1280,c_limit/388552_porterhouse-steak_1x1.jpg'),
        new Recipe('3rd Test Recipe', 'This is the third test recipe.', 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2017_38/1284135/al-rokers-grilled-rib-eye-today-tease-170922.jpg'),
    ];

    @Output() selectedRecipe = new EventEmitter();

    constructor() {}

    ngOnInit(): void {
    }

    onRecipeSelected(seletedRecipe: Recipe) {
        this.selectedRecipe.emit(seletedRecipe);
    }

}

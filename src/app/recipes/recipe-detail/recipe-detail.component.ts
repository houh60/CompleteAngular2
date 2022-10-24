import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    receivedRecipe: any;
    constructor(
        private shoppingListService: ShoppingListService,
        private recipeService: RecipeService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        let id;
        this.route.params.subscribe(params => {
            id = +params['id'];
            this.receivedRecipe = this.recipeService.getRecipe(id);
        });
    }

    addToShoppingList() {
        this.shoppingListService.addIngredients(this.receivedRecipe.ingredients);
    }
}

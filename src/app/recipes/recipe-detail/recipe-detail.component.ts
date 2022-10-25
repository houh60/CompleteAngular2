import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    id?: number;
    receivedRecipe: any;
    constructor(
        private shoppingListService: ShoppingListService,
        private recipeService: RecipeService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.receivedRecipe = this.recipeService.getRecipe(this.id);
        });
    }

    addToShoppingList() {
        this.shoppingListService.addIngredients(this.receivedRecipe.ingredients);
    }

    onEditRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route });
    }
}

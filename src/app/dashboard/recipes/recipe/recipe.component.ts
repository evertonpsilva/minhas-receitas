import { Component, OnInit, ViewChild } from "@angular/core";
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ActivatedRoute, Router } from "@angular/router";
import { debounceTime, startWith } from "rxjs/operators";
import { AddIngredientComponent } from "../../ingredients/add-ingredient/add-ingredient.component";
import { IngredientsService } from "../../ingredients/ingredients.service";
import { Ingredient } from "../../ingredients/interfaces/ingredients.interface";
import { Pagination } from "../../../shared/interfaces/pagination.interface";
import { RecipeDifficultyEnum } from "../enums/recipe-difficulty.enum";
import { Recipe } from "../interfaces/recipe.interface";
import { RecipesService } from "../recipes.service";
import { SucessDialogComponent } from "../../../shared/components/sucess-dialog/sucess-dialog.component";
import { ConfirmDeleteComponent } from "../../../shared/components/confirm-delete/confirm-delete.component";

@Component({
    templateUrl: './recipe.component.html',
    styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit{

    recipeForm: FormGroup;
    recipe: Recipe;
    difficultyOptions = Object.values(RecipeDifficultyEnum);

    selectedIngredients: Ingredient[] = [];
    filteredIngredients: Pagination<Ingredient>;

    @ViewChild('form') private formDirective: NgForm;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private fb: FormBuilder,
        private ingredientsService: IngredientsService,
        private dialog: MatDialog,
        private recipesService: RecipesService,
    ){
        this.getRecipeById();
    }

    getRecipeById(){
        this.recipe = this.route.snapshot.data.recipe as Recipe;
    }

    ngOnInit(){
        this.buildForm();
    }

    buildForm(){
        this.recipeForm = this.fb.group({
            _id: [null],
            name: [null, [Validators.required]],
            ingredientsSearch: [''],
            ingredients: this.fb.array([]),
            description: [null],
            averageCost: [null],
            difficulty: [null, Validators.required],
            averageTime: [null],
            sellerPrice: [null],
            forSale: [true],
        });
        if(this.recipe){
            this.recipeForm.patchValue(this.recipe);
            this.recipe.ingredients.forEach((ingredient) => this.addIngredient(ingredient));
        }
        this.ingredientsSearch.valueChanges.pipe(
            startWith(''),
            debounceTime(300)
        ).subscribe((query) => this.filterIngredients(query));
        this.ingredients.valueChanges.subscribe(() => {
            console.log("a");
            this.updateRecipeCost();
        });
        this.recipeForm.get('forSale').valueChanges.subscribe((forSale) => this.checkForSale(forSale));
    }

    filterIngredients(query: string){
        this.ingredientsService.get({name: query}).subscribe(value => {
            console.log(value);
            this.filteredIngredients = value;
        })
    }

    addIngredient(ingredient?: Ingredient){
        if (!ingredient){
            ingredient = this.ingredientsSearch.value;
            this.ingredientsSearch.reset();
        }
        this.ingredients.push(this.newIngredient(ingredient));
    }

    removeIngredient(index: number){
        console.log(index);
        this.ingredients.removeAt(index);
    }

    newIngredient(ingredient: Ingredient){
        console.log(ingredient);
        const newIngredient = this.fb.group({
            _id: [null, Validators.required],
            name: null,
            averageCost: [null],
        });
        newIngredient.patchValue(ingredient);
        return newIngredient;
    }

    labelIngredient(ingredient: Ingredient){
        return ingredient ? ingredient.name : '';
    }

    deleteIngredient(index: number){
        this.ingredients.removeAt(index);
    }

    createIngredient(){
        const dialogRef = this.dialog.open(AddIngredientComponent);
        dialogRef.afterClosed().subscribe((value) => {
            if(value){
                this.filterIngredients('');
            }
        });
    }

    createOrUpdate(){
        if(this.recipeForm.get("_id").value){
            this.updateRecipe();
        }else{
            this.createRecipe();
        }
    }

    createRecipe(){        
        this.recipesService.create(this.recipeForm.value).subscribe(
            () => {
                this.dialog.open(SucessDialogComponent).afterClosed().subscribe(() => {
                    this.formDirective.resetForm();
                });
            }
        )
    }

    updateRecipe(){        
        this.recipesService.update(this.recipeForm.value).subscribe(
            () => {
                this.dialog.open(SucessDialogComponent).afterClosed().subscribe();
            }
        )
    }

    deleteRecipe(){
        if(this.recipe){
            this.dialog.open(ConfirmDeleteComponent).afterClosed().subscribe((del) => {
                if(del){
                    this.recipesService.delete(this.recipe._id).subscribe(() => {
                        this.backToRecipes();
                    });
                }
            })
        }
    }

    updateRecipeCost(){
        this.recipeForm.get('averageCost').setValue(this.recipePrice);
    }

    checkForSale(forSale: boolean){
        console.log(forSale);
        if(forSale){
            this.sellerPrice.enable();
        }else{
            this.sellerPrice.reset();
            this.sellerPrice.disable();
        }
    }

    backToRecipes(){
        this.router.navigate(['../'], {relativeTo: this.route});
    }

    get recipePrice(){
        const ingredients = this.ingredients.value as Ingredient[];
        const sum = ingredients.reduce((sum, ingredient) => sum + ingredient.averageCost, 0);
        return sum;
    }

    get sellerPrice(){
        return this.recipeForm.get('sellerPrice') as FormControl;
    }

    get ingredientsSearch(){
        return this.recipeForm.get('ingredientsSearch') as FormControl;
    }

    get ingredients(): FormArray{
        return this.recipeForm.get('ingredients') as FormArray;
    }

}
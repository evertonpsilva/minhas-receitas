import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ConfirmDeleteComponent } from "../shared/components/confirm-delete/confirm-delete.component";
import { AddIngredientComponent } from "./add-ingredient/add-ingredient.component";
import { IngredientsService } from "./ingredients.service";
import { Ingredient } from "./interfaces/ingredients.interface";

@Component({
    templateUrl: './ingredients.component.html',
    styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit{
    
    ingredients: Ingredient[] = [];

    constructor(
        private ingredientsService: IngredientsService,
        private dialog: MatDialog,
    ){

    }

    ngOnInit(){
        this.ingredientsService.get().subscribe((pagination) => {
            this.ingredients = pagination.content;
        })
    }

    confirmDelete(_id: string){
        const dialogRef = this.dialog.open(ConfirmDeleteComponent);

        dialogRef.afterClosed().subscribe((deleted) => {
            if(!!deleted){
                this.delete(_id);
            }
        });
    }

    delete(_id: string):void {
        this.ingredientsService.delete(_id).subscribe(() => {
            this.getIngredients();
        });
    }

    getIngredients(){
        this.ingredientsService.get().subscribe((pagination) => {
            this.ingredients = pagination.content;
        })
    }

    addIngredient(){
        const dialogRef = this.dialog.open(AddIngredientComponent);

        dialogRef.afterClosed().subscribe((inserted: boolean) => {
            if(!!inserted){
                this.getIngredients();
            }
        })
    }


}
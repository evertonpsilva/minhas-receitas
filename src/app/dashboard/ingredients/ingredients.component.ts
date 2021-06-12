import { Options } from "@angular-slider/ngx-slider";
import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { of, Subscription } from "rxjs";
import { debounceTime, skip } from "rxjs/operators";
import { ConfirmDeleteComponent } from "../../shared/components/confirm-delete/confirm-delete.component";
import { DefaultFilterService } from "../../shared/components/default-filter/default-filter.service";
import { DefaultFilter } from "../../shared/interfaces/default-filter.interface";
import { AddIngredientComponent } from "./add-ingredient/add-ingredient.component";
import { IngredientsService } from "./ingredients.service";
import { Ingredient } from "./interfaces/ingredients.interface";

@Component({
    templateUrl: './ingredients.component.html',
    styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit, OnDestroy{

    ingredients: Ingredient[] = [];
    filter: DefaultFilter = new DefaultFilter();

    notifyToSearch: Subscription;

    constructor(
        private ingredientsService: IngredientsService,
        private defaultFilterService: DefaultFilterService,
        private dialog: MatDialog,
    ){
    }

    ngOnInit(){
        this.notifyToSearch = this.defaultFilterService.getFilter().pipe(skip(1)).subscribe((filter) => {
            if(filter.toSearch){
                console.log(filter)
                this.filter = filter;
                this.getIngredients();
            }
        })
        this.getIngredients()
    }

    ngOnDestroy(){
        this.notifyToSearch.unsubscribe();
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
        this.ingredientsService.get(this.filter).subscribe((pagination) => {
            this.ingredients = pagination.content;
            this.getMinMaxValues();
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

    filterByName($event){
        this.filter.name = $event;
        this.getIngredients();
    }

    private getMinMaxValues(){
        const values = this.ingredients.map((ingredient) => ingredient.averageCost);
        this.filter.min = Math.min(...values);
        this.filter.max = Math.max(...values);
        console.log(Math.min(...values))
        console.log(Math.max(...values))
    }

}
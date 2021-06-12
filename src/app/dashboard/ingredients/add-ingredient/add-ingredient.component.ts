import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { MeansureTypeEnum } from "../../../shared/enums/meansure-type.enum";
import { IngredientsService } from "../ingredients.service";

@Component({
    templateUrl: './add-ingredient.component.html',
    styleUrls: ['./add-ingredient.component.scss'],
})
export class AddIngredientComponent implements OnInit{

    addIngredientForm: FormGroup;
    meansureType = Object.values(MeansureTypeEnum);

    constructor(
        private fb: FormBuilder,
        private ingredientsService: IngredientsService,
        private dialogRef: MatDialogRef<AddIngredientComponent>,
    ){

    }

    ngOnInit(){
        this.buildForm();
    }

    buildForm(){
        this.addIngredientForm = this.fb.group({
            name: ['', [Validators.required]],
            meansure: ['', [Validators.required]],
            meansureType: ['', [Validators.required]],
            averageCost: ['', [Validators.required]]
        });

    }

    getFormControl(formControl: string){
        return this.addIngredientForm.get(formControl);
    }

    getFieldError(){
            return 'You must enter a value';
    }

    create(){
        this.ingredientsService.create(this.addIngredientForm.value).subscribe(
            () => {
                this.dialogRef.close(true);
            },
            (err) => {
                console.error(err)
            }
        )
    }

}
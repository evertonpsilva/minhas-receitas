import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from "../interfaces/recipe.interface";
import { RecipesService } from '../recipes.service';

@Injectable()
export class RecipeResolver implements Resolve<Recipe>{

    constructor(private recipesService: RecipesService){ }

    resolve(route: ActivatedRouteSnapshot): Observable<Recipe>{

        const id: string = route.paramMap.get('id');

        return this.recipesService.getById(id);

    }

}
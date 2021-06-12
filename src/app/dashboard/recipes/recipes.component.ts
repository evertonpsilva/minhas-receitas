import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from './interfaces/recipe.interface';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes$: Observable<Recipe[]>

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private recipesService: RecipesService,
  ) { }

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes(){
    console.log("a");
    this.recipes$ = this.recipesService.get();
  }

  filterByName(event){
    
  }

  addRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

  goToRecipe(recipe: Recipe){
    this.router.navigate([recipe._id], {relativeTo: this.route});
  }

  classByValue(recipe: Recipe){
    if(this.calculateGoodPrice(recipe)){
      return {'good': true};
    }else if(this.calculateWarnPrice(recipe)){
      return {'warn': true};
    }
    return {'normal': true};
  }

  labelByValue(recipe: Recipe){
    if(this.calculateGoodPrice(recipe)){
      return "Good";
    }else if(this.calculateWarnPrice(recipe)){
      return "Warn";
    }
    return "Normal";
  }

  private calculateWarnPrice(recipe: Recipe){
    return recipe.sellerPrice <= (recipe.averageCost + recipe.averageCost * 0.15);
  }

  private calculateGoodPrice(recipe: Recipe){
    return recipe.sellerPrice >= (recipe.averageCost + recipe.averageCost * 0.4);
  }

  calculateGainPercent(recipe: Recipe){
    const gain = recipe.sellerPrice - recipe.averageCost;
    const gainPercent = gain/recipe.sellerPrice;
    return gainPercent;
  }

}

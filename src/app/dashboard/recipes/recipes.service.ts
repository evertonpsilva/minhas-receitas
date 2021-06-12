import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DefaultFilter } from '../../shared/interfaces/default-filter.interface';
import { BuilderHttpParams } from '../../shared/utils/builder-http-params';
import { resultMap } from '../../shared/utils/result-map';
import { Recipe } from './interfaces/recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  get(filter?: DefaultFilter): Observable<Recipe[]>{

    const params = new BuilderHttpParams(filter).createParams();
    return this.http.get('recipes', { params} )
    .pipe(
      resultMap(),
      map((res) => res)
    );

  }

  getById(id: string): Observable<Recipe>{
    return this.http.get<Recipe>(`recipes/${id}`);
  }
  
  create(recipe: Recipe): Observable<Recipe>{
    return this.http.post<Recipe>(`recipes`, recipe);
  }

  update(recipe: Recipe): Observable<void>{
    return this.http.put<void>(`recipes/${recipe._id}`, recipe);
  }

  delete(_id: string): Observable<void>{
    return this.http.delete<void>(`recipes/${_id}`);
  }
}

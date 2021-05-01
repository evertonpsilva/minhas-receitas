import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Pagination } from "../shared/interfaces/pagination.interface";
import { Ingredient } from "./interfaces/ingredients.interface";

@Injectable()
export class IngredientsService{

    constructor(private http: HttpClient){

    }

    get(): Observable<Pagination<Ingredient>>{
        return this.http.get<Pagination<Ingredient>>('ingredients');
    }

    delete(_id: string): Observable<void>{
        return this.http.delete<void>(`ingredients/${_id}`);
    }

    create(ingredient: Ingredient): Observable<Ingredient>{
        return this.http.post<Ingredient>('ingredients', ingredient);
    }

    

}
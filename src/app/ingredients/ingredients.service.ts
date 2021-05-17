import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { DefaultFilter } from "../shared/interfaces/default-filter.interface";
import { Pagination } from "../shared/interfaces/pagination.interface";
import { BuilderHttpParams } from "../shared/utils/builder-http-params";
import { resultMap } from "../shared/utils/result-map";
import { Ingredient } from "./interfaces/ingredients.interface";
import { HttpBaseService } from '../shared/interfaces/http-base-service.interface';

@Injectable()
export class IngredientsService implements HttpBaseService{

    constructor(readonly http: HttpClient){ }

    get(filter?: DefaultFilter): Observable<Pagination<Ingredient>>{

        const params = new BuilderHttpParams(filter).createParams();

        return this.http.get('ingredients', { params} )
        .pipe(
          resultMap(),
          map((res) => res)
        );

    }

    delete(_id: string): Observable<void>{
        return this.http.delete<void>(`ingredients/${_id}`);
    }

    create(ingredient: Ingredient): Observable<Ingredient>{
        return this.http.post<Ingredient>('ingredients', ingredient);
    }

    getHttpClient(){
        return this.http;
    }

}
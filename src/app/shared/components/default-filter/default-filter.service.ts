import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DefaultFilter } from "../../interfaces/default-filter.interface";

@Injectable()
export class DefaultFilterService{

    private filterSubject: BehaviorSubject<DefaultFilter> = new BehaviorSubject<DefaultFilter>(null);
    private toFilterSubject: BehaviorSubject<void> = new BehaviorSubject<void>(null);
    
    constructor(){ }

    getFilter(){
        return this.filterSubject.asObservable();
    }

    getToFilter(){
        return this.toFilterSubject.asObservable();
    }

    setFilter(filter: DefaultFilter){
        console.log(filter);
        this.filterSubject.next(filter);
    }

    emitToFilter(){
        this.toFilterSubject.next();
    }

}
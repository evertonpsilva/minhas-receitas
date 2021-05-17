import { Component, Output, EventEmitter, OnInit, OnDestroy } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
    selector: 'app-search-input',
    templateUrl: './search-input.component.html',
    styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy{
 
    @Output() value = new EventEmitter<string>();
    debounce: Subject<string> = new Subject<string>();

    ngOnInit(){
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.value.emit(filter));
    }

    ngOnDestroy(){
        this.debounce.unsubscribe();
    }

    filter(event){
        this.debounce.next(event.target.value);
    }

}
import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs";
import { skip } from "rxjs/operators";
import { DefaultFilter } from "../../../interfaces/default-filter.interface";
import { DefaultFilterService } from "../default-filter.service";

@Component({
    selector: 'app-filter-button[filter]',
    templateUrl: './filter-button.component.html',
})
export class FilterButtonComponent implements OnInit{

    @Input() filter: DefaultFilter;
    @Output() toFilter: EventEmitter<void>;

    toFilterNotfication: Subscription;

    constructor(private defaultFilterService: DefaultFilterService){ }

    ngOnInit(){
        this.toFilterNotfication = this.defaultFilterService.getToFilter().pipe(skip(1)).subscribe(() => {
            this.toFilter.emit();
            
        })
    }

    openFilter(){
        console.log(this.filter);
        this.defaultFilterService.setFilter({...this.filter, toSearch: false});
    }

}
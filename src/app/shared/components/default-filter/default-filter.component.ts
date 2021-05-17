import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";
import { Subscription } from "rxjs";
import { skip } from "rxjs/operators";

import { DefaultFilter } from "../../interfaces/default-filter.interface";
import { DefaultFilterService } from "./default-filter.service";

@Component({
    selector: 'app-default-filter',
    templateUrl: './default-filter.component.html',
    styleUrls: ['./default-filter.component.scss'],
})
export class DefaultFilterComponent implements OnInit, OnDestroy{
    
    @ViewChild('drawer') drawer: MatDrawer;
    private _filterSubscription: Subscription;
    filter: DefaultFilter = null;

    constructor(
        private defaultFilterService: DefaultFilterService,
    ){ }

    ngOnInit(){
        this._filterSubscription = this.defaultFilterService.getFilter().pipe(skip(1)).subscribe((filter) => {
            if(!filter.toSearch){
                this.filter = filter;
                this.toggleDrawer();
            }
        });
    }

    ngOnDestroy(){
        this._filterSubscription.unsubscribe();
    }

    toggleDrawer(){
        this.drawer.toggle();
    }

    filterValues(event){
        this.defaultFilterService.setFilter(event);
    }

}
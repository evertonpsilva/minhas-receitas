import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MeansureTypeEnum } from "../../../enums/meansure-type.enum";
import { OrderByEnum } from "../../../enums/order-by.enum";
import { DefaultFilter } from "../../../interfaces/default-filter.interface";

@Component({
    selector: 'app-filter-form[filter]',
    templateUrl: './filter-form.component.html',
    styleUrls: ['./filter-form.component.scss'],
})
export class FilterFormComponent {

    @Input() filter: DefaultFilter;
    @Output() filterToSearch: EventEmitter<DefaultFilter> = new EventEmitter<DefaultFilter>();
    filterForm: FormGroup;
    meansureType = Object.values(MeansureTypeEnum);
    orderByOptions = OrderByEnum.getValues();

    constructor(
        private fb: FormBuilder
    ) { }

    ngOnInit(){
        this.buildForm();
        this.filterForm.patchValue(this.filter);
    }

    buildForm(){
        this.filterForm = this.fb.group({
            orderBy: [null],
            itensPerPage: [10],
            min: [null],
            max: [null],
            meansureType: [null]
        });
    }

    changeRange(event){
        this.filterForm.patchValue(event);
    }

    filterValues(){
        console.log(this.filterForm);
        this.filterToSearch.emit({...this.filterForm.getRawValue(), toSearch: true});
    }

    get min(){
        return this.filterForm.get('min');
    }

    get max(){
        return this.filterForm.get('max');
    }
}
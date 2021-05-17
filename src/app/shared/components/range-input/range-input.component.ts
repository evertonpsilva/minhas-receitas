import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { MinMax } from "../../interfaces/min-max-interfaces";

@Component({
    selector: 'app-range-input',
    templateUrl: './range-input.component.html',
    styleUrls: ['./range-input.component.scss'],
})
export class RangeInputComponent implements OnInit, AfterViewInit{

    @Output() values: EventEmitter<MinMax> = new EventEmitter();
    @Input() initialValues: MinMax;

    minInitial: number;
    min: number;
    maxInitial: number;
    max: number;

    constructor(){ }

    ngOnInit(){
        this.setWidthToInput();
        if(this.initialValues){
            this.minInitial = this.initialValues.min;
            this.min = this.initialValues.min;
            this.maxInitial = this.initialValues.max;
            this.max = this.initialValues.max;
        }
    }

    ngAfterViewInit(){
        this.calculateMinWidth();
    }

    minValueChange(event){
        if (event.value > this.max) {
            event.source.value = this.max;
        }else{
            this.min = event.source.value;
            this.calculateMinWidth();
        }        
        console.log(this.min);
        console.log(this.minInitial);
        console.log(this.max);
        console.log(this.maxInitial);
    }

    calculateMinWidth(){
        const minDivElement = document.getElementById("min");
        const minThumbElementDimensions = document.querySelector("div.min .mat-slider .mat-slider-wrapper .mat-slider-thumb-container .mat-slider-thumb").getBoundingClientRect();

        minDivElement.setAttribute("style", `
            width: ${minThumbElementDimensions.right + 4 - minDivElement.getBoundingClientRect().left}px;
            overflow: hidden;
        `);
    }

    maxValueChange(event){
        if (event.value < this.min) {
            event.source.value = this.min;
        }else{
            this.max = event.source.value;
        }
    }

    setWidthToInput(){
        const fullWidth = document.getElementById("max").offsetWidth;
        document.querySelector("#min .mat-slider").setAttribute("style", `width: ${fullWidth}px`);
    }

    emitValues(){
        const min = this.min;
        const max = this.max;
        this.values.emit({min, max})
    }

}
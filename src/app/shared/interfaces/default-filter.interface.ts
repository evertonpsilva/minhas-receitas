interface MinMaxValue{
    min: number;
    max: number;
}

export class DefaultFilter{

    name?: string;
    description?: string;
    itemsPerPage?: number;
    page?: number;
    min?: number;
    max?: number;

    toSearch?: boolean = false;
    
    constructor(){
        this.name = '';
        this.description = '';
        this.itemsPerPage = 20;
        this.page = 1;
    }

}
export enum OrderByEnum{

    LATEST = "LATEST",
    AZ = "AZ",
    ZA = "ZA",
    LH = "LH",
    HL = "HL",

}

export namespace OrderByEnum{

    export function getValues(){
        const values = Object.keys(OrderByEnum)
          .map(key => ({ id: OrderByEnum[key], description: getDesciption(OrderByEnum[key]) }))
          .filter(item => item.description);
        console.log(values);
        return values;
    }

    export function getDesciption(item: OrderByEnum): string{
        switch (item) {
            case OrderByEnum.LATEST:
                return "Latest"
                break;
            case OrderByEnum.AZ:
                return "A > Z"
                break;
            case OrderByEnum.ZA:
                return "Z > A"
                break;
            case OrderByEnum.LH:
                return "Price: lower to higher"
                break;
            case OrderByEnum.HL:
                return "Price: higher to lower"
                break;
        }
    }

}
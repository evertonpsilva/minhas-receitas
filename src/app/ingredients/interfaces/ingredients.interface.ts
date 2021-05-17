import { User } from "../../core/user/user.interface";
import { MeansureTypeEnum } from "../../shared/enums/meansure-type.enum";
import { DefaultFilter } from "../../shared/interfaces/default-filter.interface";

export interface Ingredient extends DefaultFilter {

    readonly _id: string;
    readonly author: User;
    name: string;
    meansure: number;
    meansureType: MeansureTypeEnum;
    averageCost: number;

}
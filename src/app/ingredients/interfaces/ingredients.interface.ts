import { User } from "../../core/user/user.interface";
import { MeansureTypeEnum } from "../../shared/enums/meansure-type.enum";

export interface Ingredient{

    readonly _id: string;
    readonly author: User;
    name: string;
    meansure: number;
    meansureType: MeansureTypeEnum;
    averageCost: number;

}
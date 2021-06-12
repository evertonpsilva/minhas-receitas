import { Ingredient } from "../../ingredients/interfaces/ingredients.interface";
import { RecipeDifficultyEnum } from "../enums/recipe-difficulty.enum";

    export interface Recipe{
        readonly _id: string;
        
        averageCost: number;
        name: string;
        description?: string;
        ingredients: Ingredient[];
        difficulty: RecipeDifficultyEnum;
        averageTime?: Date;
        sellerPrice?: number;
    }
import { NgModule } from "@angular/core";
import { HomeModule } from "./home/home.module";
import { IngredientsModule } from "./ingredients/ingredients.module";
import { RecipesModule } from "./recipes/recipes.module";
import { ConfirmDeleteModule } from "../shared/components/confirm-delete/confirm-delete.module";
import { DefaultFilterModule } from "../shared/components/default-filter/default-filter.module";
import { NavBarModule } from "../shared/components/navbar/navbar.module";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { CoreModule } from "../core/core.module";

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    imports: [
      CoreModule,
      NavBarModule,
      HomeModule,
      IngredientsModule,
      RecipesModule,
      ConfirmDeleteModule,
      DefaultFilterModule,
      DashboardRoutingModule
    ],
})
export class DashboardModule{

}
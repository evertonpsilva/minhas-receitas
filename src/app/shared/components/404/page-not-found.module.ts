import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { PageNotFoundComponent } from "./page-not-found.component";

@NgModule({
    imports: [
        MatButtonModule,
    ],
    declarations: [PageNotFoundComponent],
    exports: [PageNotFoundComponent],
})
export class PageNotFoundModule{

}
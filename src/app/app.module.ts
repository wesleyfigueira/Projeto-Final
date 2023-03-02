import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatLegacyButtonModule as MatButtonModule } from "@angular/material/legacy-button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatLegacyListModule as MatListModule } from "@angular/material/legacy-list";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { MatLegacyPaginatorIntl as MatPaginatorIntl } from "@angular/material/legacy-paginator";
import { MatPaginatorIntlPtBr } from "./_util/paginator-ptbr-i8n";
import { MatLegacySnackBarModule as MatSnackBarModule } from "@angular/material/legacy-snack-bar";

@NgModule({
    declarations: [AppComponent, MainNavComponent, HomeComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatSnackBarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        HttpClientModule,
    ],
    providers: [{ provide: MatPaginatorIntl, useClass: MatPaginatorIntlPtBr }],
    bootstrap: [AppComponent],
})
export class AppModule {}

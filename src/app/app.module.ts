import { UserDataService } from "./user-data.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}

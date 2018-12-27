import { HomeComponent } from "./home/home.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { AboutComponent } from "./about/about.component";
import { AppComponent } from "./app.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

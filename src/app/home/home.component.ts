import { UserDataService } from "./../user-data.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  users: object; //: Object;

  constructor(private data: UserDataService) {}

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

  firstClick() {
    // alert("you clicked me");
    console.log(this.data.getUsers());
  }
}

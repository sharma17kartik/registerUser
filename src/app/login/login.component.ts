import { Component ,OnInit, OnDestroy} from "@angular/core";
import { Subscription } from 'rxjs';
import { NgForm } from "@angular/forms";
import { User } from "../posts/user-model";
import { PostsService } from "../posts/userService";
import { formatCurrency } from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  enteredemail = "";
  enteredContent = "";
  constructor(public userService: PostsService) {}

  users= [];
  private postsSub: Subscription;
  ngOnInit() {
    this.userService.getPosts();
    this.postsSub = this.userService.getPostUpdateListener()
      .subscribe((users) => {
        this.userCheck(this.users);
        this.users = users;
        //alert("here");
      });
  }

  userCheck(users){
    console.log("User check works");
    for(let user of users){
      console.log(user);
      if(user.content == this.enteredemail){
        alert("User Already Exist");
      }
    }
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}

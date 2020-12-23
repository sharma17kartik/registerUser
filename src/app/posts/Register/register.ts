import { Component ,OnInit, OnDestroy} from "@angular/core";
import { Subscription } from 'rxjs';
import { NgForm } from "@angular/forms";
import { User } from "../user-model";
import { PostsService } from "../userService";
import { formatCurrency } from "@angular/common";

@Component({
  selector: "app-post-create",
  templateUrl: "./register.html",
  styleUrls: ["./register.css"]
})
export class PostCreateComponent implements OnInit, OnDestroy {
  enteredemail = "";
  constructor(public postsService: PostsService) {}

  onAddUser(form: NgForm) {
    valid : Boolean;
    if (form.invalid) {
      return;
    }
    this.enteredemail = form.value.email;
    this.postsService.addPost(form.value.name, form.value.email, form.value.password);
    form.resetForm();
  }


  public users= [];
  private usersSub: Subscription;

  ngOnInit() {
    this.postsService.getPosts();
    this.usersSub = this.postsService.getPostUpdateListener()
      .subscribe((users) => {
        this.userCheck(this.users);
        this.users = users;
       // alert("here");
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
    this.usersSub.unsubscribe();
  }
}

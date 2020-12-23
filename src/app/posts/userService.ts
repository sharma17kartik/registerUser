import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { map } from 'rxjs/operators';

import { User } from "./user-model";

@Injectable({ providedIn: "root" })
export class PostsService {
  private users: User[] = [];
  private postsUpdated = new Subject<User[]>();

  constructor(private http: HttpClient) {}





  addPost(name: string, email: string, password: string) {
    const user: User = { name: name, email: email, password: password };
    //alert(name + email + password);
    console.log(user);
    this.http
      .post<{ message: string}>("http://localhost:3000/api/users", user)
      .subscribe(responseData => {
        //let id = responseData.postId;
        this.users.push(user);
        console.log(user.email);
        this.postsUpdated.next([...this.users]);
      });
    // this.http
    //   .post<{ message: string, postId: string }>("http://localhost:3000/api/users", user)
    //   .subscribe(responseData => {
    //     let id = responseData.postId;
    //     this.users.push(user);
    //     this.postsUpdated.next([...this.users]);
    //   });
      //alert("User Added")
  }
    getPosts() {
      alert(this.http.get<{ message: string; userDetails: any }>("http://localhost:3000/api/users"));
    this.http
      .get<{ message: string; userDetails: any }>(
        "http://localhost:3000/api/users"
      )
      .pipe(map((postData) => {
        return postData.userDetails.map(post => {
          return {
            //name: post.title,
            email: post.content,
           // password: post.password,
          };
        });
      }))
      .subscribe(transformedPosts => {
        this.users = transformedPosts;
        this.postsUpdated.next([...this.users]);
      });
  }
   getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }


}

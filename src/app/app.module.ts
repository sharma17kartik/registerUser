import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatCheckboxModule,
} from "@angular/material";

import { AppComponent } from "./app.component";
import { PostCreateComponent } from "./posts/Register/register";
import { LoginComponent } from './login/login.component';
import { OptionComponent } from './option/option.component';
import { AppRoutingModule ,routingComponents } from './app-routing.module';
import { RouterModule } from '@angular/router'


@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    LoginComponent,
    OptionComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule,
    MatCheckboxModule,
    AppRoutingModule,
    RouterModule.forRoot([
         { path: 'login' , component : LoginComponent },
         { path : 'create' , component : PostCreateComponent },
          // { path : '' , component: OptionComponent},
       ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

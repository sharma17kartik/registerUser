import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostCreateComponent  } from './posts/Register/register';
import { OptionComponent } from './option/option.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents = [LoginComponent, PostCreateComponent];

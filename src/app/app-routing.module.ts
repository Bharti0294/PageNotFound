import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './home/home.component';
import{GallaryComponent} from './gallary/gallary.component';
import{LoginComponent} from './login/login.component';
import{ProfileComponent} from './profile/profile.component';
import{PagenotfoundComponent} from './pagenotfound/pagenotfound.component'


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'gallary',
    component:GallaryComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'**',
    component:PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

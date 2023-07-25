import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact/contact.component';
import { TosComponent } from './tos/tos.component';
import { PrivacypolicyComponent } from './privacypolicy/privacypolicy.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'services',component:ServicesComponent},
  {path:'works',component:WorksComponent},
  {path:'contact',component:ContactComponent},
  {path:'termsofservice',component:TosComponent},
  {path:'privacypolicy',component:PrivacypolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

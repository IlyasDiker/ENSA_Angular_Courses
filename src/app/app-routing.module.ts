import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCourseComponent } from './Course/create-course/create-course.component';
import { UpdateCourseComponent } from './Course/update-course/update-course.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path:'', component: MainPageComponent},
  {path:'create', component: CreateCourseComponent},
  {path:'update/:slug', component: UpdateCourseComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

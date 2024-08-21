import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "jobseekers", loadChildren: () => import('./modules/jobseekers.module').then(m => m.JobseekersModule)} ,
  { path: "employers", loadChildren: () => import('./modules/employers.module').then(m => m.EmployersModule) },
  { path: "aboutus", component: AboutusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

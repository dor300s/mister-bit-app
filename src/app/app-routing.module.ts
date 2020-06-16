import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home-page/home.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AuthGuard } from './services/auth.guard';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', canActivate: [AuthGuard], component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contact', canActivate: [AuthGuard], component: ContactPageComponent },
  { path: 'statistic', canActivate: [AuthGuard], component: StatisticPageComponent },
  { path: 'contact/edit/:id', canActivate: [AuthGuard], component: ContactEditPageComponent },
  { path: 'contact/edit', canActivate: [AuthGuard], component: ContactEditPageComponent },
  { path: 'contact/:id', canActivate: [AuthGuard], component: ContactDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

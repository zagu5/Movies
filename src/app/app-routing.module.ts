import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { CardComponent} from './views/card/card.component';
import { MoviesComponent } from './views/movies/movies.component';
import { LogoutComponent } from './views/logout/logout.component';
import { FooterComponent } from './views/footer/footer.component';
//import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path:  '', redirectTo: 'cover', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  //{ path: 'login', canActivate: [AuthGuardService], component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'card', component: CardComponent},
  { path: 'movies', component: MoviesComponent},
  { path: 'movies', component: FooterComponent},
  { path: '**', redirectTo: 'home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

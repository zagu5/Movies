// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable, retry } from 'rxjs';
// import { Router } from '@angular/router';
// import { AuthGuardService } from './services/auth-guard.service';


// @Injectable({
//   providedIn: 'root'
// })
// export class MoviesGuard implements CanActivate {

//   constructor (public authService: AuthGuardService, private router: Router){}
  
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
//       if(this.authService.login) {
//         window.alert("You are already signed in, access denied!");
//         this.router.navigate(['login'])
//    }
//     return true;
//   }
// }
  

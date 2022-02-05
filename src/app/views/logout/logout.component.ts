import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  ngOnInit() {
    this.authService.logout();
    this.router.navigate(['/']);
 }

  constructor(private authService : AuthGuardService, private router : Router) { }


}

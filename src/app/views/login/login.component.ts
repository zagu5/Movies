import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor() { }

  ngOnInit(): void {}

  async onLogin(){
    console.log('Formulario', this.loginForm.value)
    // const { email, password } = this.loginForm.value
    // try{
    //   const user = await this.authService.login(email, password)
    //   if (user){
    //     this.router.navigate(['/notes'])
    //   }
    // } catch(error){
    // console.log(error)
    // }
  }


}

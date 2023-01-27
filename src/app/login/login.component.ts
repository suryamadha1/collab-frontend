import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

  }


  ngOnInit() {
    this.loginDetails = 
    this.fb.group({
     username: ['', Validators.required, Validators.minLength(3)],
     password: ['', Validators.required, Validators.minLength(6)]
   });
  }
  

  onSubmit(form: FormGroup) {
    console.log(form.value);
    this.authService.login(form.value);
    this.router.navigate(["/test-user"])
  }
}

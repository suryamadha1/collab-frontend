import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails: FormGroup;

  constructor(private fb: FormBuilder) {

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
  }
}

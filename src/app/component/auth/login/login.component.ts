import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!:FormGroup
  submitted:boolean=false
  constructor(
    private formbuilder:FormBuilder,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      name:['',Validators.required],
      password:['',Validators.required],
    })
  }

  get f() {return this.form.controls}

  login(){
    this.submitted = true;
    if(this.form.invalid){return}
    console.log(this.form.value)
    let permisson_availabel = this.authService.login(this.form.value)
    if(permisson_availabel == true){
      Swal.fire(
        'Success',
        'You are logged in successfully',
        'success'
      ).then(()=>{
        this.router.navigate(['/products'])
      })
    }else{
      Swal.fire(
        'Excuse Me !',
        `You don't have permission to access this page`,
        'error'
      )
    }
  }
}

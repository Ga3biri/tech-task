import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  form:any;
  submitted=false;
  constructor(
    private formbuilder:FormBuilder,
    private productService:ProductsService,
    private router:Router,
    private spinner:NgxSpinnerService
    ) { }

  ngOnInit(): void {
    this.form=this.formbuilder.group({
      title:['',Validators.required],
      price:['',Validators.required],
      category:['',Validators.required],
      description:['',Validators.required],
    })
  }

  get f() {return this.form.controls}
  files: File[] = [];

  backToLogin(){
    localStorage.removeItem('permission')
    this.router.navigate([''])
  }

  submit(){
    console.log('Done')
    this.submitted=true;
    if(this.form.invalid){return}
    let form={
      ...this.form.value,
      // image:this.files[0].name
    }
    this.spinner.show()
    this.productService.addProduct(form).subscribe(res=>{
      this.spinner.hide()
      Swal.fire(
        'Success',
        'The Product added successfully',
        'success'
      )
      console.log('res')
      console.log(res)
      this.router.navigate(['/products/list'])
    })
  }


}

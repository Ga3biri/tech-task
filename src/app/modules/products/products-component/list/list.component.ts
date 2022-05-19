import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { MatDialog } from '@angular/material/dialog';
import { NgxSpinnerService } from 'ngx-spinner';
import { DetailsComponent } from '../details/details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  products:any;
  constructor(
    private productService:ProductsService,
    private dialog:MatDialog,
    private spinner:NgxSpinnerService,
    private router:Router) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.spinner.show()
    this.productService.getProducts().subscribe(res=>{
      this.spinner.hide()
      this.products=res
    })
  }
  backToLogin(){
    localStorage.removeItem('permission')
    this.router.navigate([''])
  }
  productDetails(product_id:any){
    let dialogRef = this.dialog.open(DetailsComponent, {
      data:product_id,
      width: '600px',
      height: '600px',
    });
  }

}

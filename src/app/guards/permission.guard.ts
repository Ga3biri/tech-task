import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  permission:string='';
  constructor(private router:Router) { 
    this.permission = localStorage.getItem('permission') || '';
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.permission == 'true'){
      return true;
    }else{
      Swal.fire(
        'Access Denied !', 
        `You don't have permission to access this page`,
        'error'
      )
      this.router.navigate([''])
      return false;
    }
  }
  
}

import { UserService } from '../shared/dbAccess/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router : Router, private service : UserService){}

  canActivate():  boolean {
    if ( localStorage.getItem('accessToken') == null ){
          
      return true;
    }
    else{    
      this.router.navigate(["home"]) 
      return false;
    } 
  }

  canLoad(): boolean {
    if ( localStorage.getItem('accessToken') ){
            
      return true;
    }
    else{    
      this.router.navigate(["/login"])   
      return false;
    } 
  }

}

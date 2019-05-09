import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  canActivate() {
  	console.log('Accede al GUARD');
    return false;
  }
  
}

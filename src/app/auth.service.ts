import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   loggedIn = false;

   isAuthenticated() {
     const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 8000);
     });
     return promise;
   }

   login(): void {
     this.loggedIn = true;
   }

   logout(): void {
     this.loggedIn = false;
   }
}

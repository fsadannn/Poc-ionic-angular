import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private storage: Storage, private router: Router) {
    //this.storage.clear();
    this.storage.ready().then((result) => {
      result.getItem('user').then((val) => {
        console.log('login',val);
      });
    }).catch((err) => {
      console.log(err);
    });
   }

  ngOnInit() {
  }

  login(username){
    this.storage.ready().then((result) => {
      const user = {
        name: capitalizeFirstLetter(username.value),
      };
      result.setItem('user', user).then((val) => {
        this.router.navigate(['home']);
      });
    }).catch((err) => {
      console.log(err);
    });
  }

}

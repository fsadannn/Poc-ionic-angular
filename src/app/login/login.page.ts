import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginCardSize = 10;

  constructor(private storage: Storage, private router: Router, private platform: Platform) {
    this.storage.ready().then((result) => {
      result.getItem('user').then((val) => {
        console.log('login',val);
      });
    }).catch((err) => {
      console.log(err);
    });
   }

  ngOnInit() {
    this.platform.ready().then(() => {
      if(this.platform.isLandscape()){
        this.loginCardSize = 6;
      }
      console.log(this.platform.isLandscape());
    });
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

import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private storage: Storage, private router: Router) {
    //this.storage.clear();
    this.storage.ready().then((result) => {
      this.storage.get('user').then((res) => {
        console.log(res);
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
        name: username.value,
      };
      this.storage.set('user', user);
      this.router.navigate(['home']);
    }).catch((err) => {
      console.log(err);
    });
  }

}

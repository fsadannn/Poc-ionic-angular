import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public username: string;

  constructor(private storage: Storage, private router: Router) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.storage.ready().then((result) => {
      result.getItem('user').then((res) => {
        console.log('home', res);
        this.username = res['name'];
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  logout(){
    this.storage.ready().then((result) => {
      result.removeItem('user').then((val) => {
        this.router.navigate(['login']);
      });
    }).catch((err) => {
      console.log(err);
    });
  }

}

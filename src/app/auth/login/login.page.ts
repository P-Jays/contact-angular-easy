import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // utk pagination
import { ModalController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/auth-service.service';
import { RestapiService } from 'src/app/restapi.service';
import { NavparamService } from '../../navparam.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username;
  password;
  errorMessage;
  errorMes = true;

  constructor(private router: Router,
    private navParamSvc: NavparamService,
    public http: HttpClient,
    public restApi: RestapiService,
    public authService: AuthServiceService) // di bagian ini jga harus tulis di dlm contructor
  { }



  ngOnInit() {
  }




  login() {
    this.navParamSvc.setNavData(this.username);
    if (this.username == null && this.password == null) {
      this.errorMessage = "Cannot Empty";
      this.errorMes = false;
    } else {
      this.authService.loggedIn(this.username, this.password).toPromise().then(res => {
        console.log("congratulation");
        // localStorage.setItem('token',res.token);
        this.router.navigate(['/home']);
        this.errorMes = true;
      }, err => {
        // this.errorMes = true;
        this.errorMes = false;
        this.errorMessage = "Wrong Password and Username";
      });
    }
  }


}

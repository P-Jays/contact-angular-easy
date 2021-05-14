import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Items } from '../items';
import { NavparamService } from '../navparam.service';
import { RestapiService } from '../restapi.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  //for ngModel
  editSn;
  editName;
  profile: any = [];
  id;

  constructor(
    public restapi: RestapiService, 
    public navParamSvc: NavparamService, 
    public http: HttpClient,
    public location: Location, 
    public router: Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.id = this.navParamSvc.getID();
    this.restapi.getProfile(this.id).toPromise().then(data => {
      for (let key in data) {
        if (data.hasOwnProperty[key]) {
          this.profile = data;
          this.editSn = this.profile.sn;
          this.editName = this.profile.name;
        }
      }
    });
  }

  goHome() {
    this.router.navigate(['home'])
  }

  saveChange(sn, editName, editMobile, editHome, editAddress, editRemark) {
    this.restapi.updateName(sn, editName, editMobile, editHome, editAddress, editRemark);
    console.log(sn + "..." + editName + ".." + editMobile)
    this.router.navigate(['/home']).then(() => {
    })
    setTimeout(() => {
      window.location.reload();
    }, 300);
    console.log("Success UPDATE");
  }

  async deleteConfirm(sn) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'R U Sure want to delete <strong>' + this.profile.name + '</strong>?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.restapi.deleteName(sn);
            this.router.navigate(['/home']);
            setTimeout(() => {
              window.location.reload();
            }, 300);
            console.log("Success DELETE");
          }
        }
      ]
    });
    await alert.present();
  }

}

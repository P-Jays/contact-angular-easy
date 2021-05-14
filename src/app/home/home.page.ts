import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { NavparamService } from '../navparam.service';
import { ActionSheetController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RestapiService } from '../restapi.service';
import { ModalController } from '@ionic/angular';
import { AddnewcontactPage } from '../addnewcontact/addnewcontact.page'
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { Items } from '../items';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage implements OnInit {

  firstName; // search bar
  username;
  dataLength; // ini utk jumlah Data
  data2 = false
 // items = [];
  items:Items[]=[];
  constructor(private routes: Router, public alertController: AlertController, private actvRoute: ActivatedRoute,
    private navParamSvc: NavparamService, private actionSheetController: ActionSheetController, private navController: NavController
    , public formModule: FormsModule, public restApi: RestapiService, public modalController: ModalController
    , private http: HttpClient, public popoverController: PopoverController) {

    this.restApi.getAllData();
  }

  ngOnInit() {
    this.username = this.navParamSvc.getNavData();
    console.log(this.username + " is th username");
   // this.items2 =this.restApi.items;
    this.items = this.restApi.items;
    setTimeout(() => {
      this.data2 = true
    }, 1000);
  //  this.dataLength = this.items2.length
  }

  async logOut() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'R U Sure want to <strong>Log Out</strong>?',
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
            this.routes.navigate(["/login"]);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  clickContact(id, name, telephone) {
    console.log(id + ".. " + name + "+number;" + telephone);
    this.routes.navigate(['profile']);
    this.navParamSvc.setID(id);
    this.restApi.getProfile(id);
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddnewcontactPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      window.location.reload();
      event.target.complete();
    }, 500);
  }

  Search() {
    if (this.firstName == "") {
      this.ngOnInit();
    } else {
      this.items = this.items.filter(res => {
        return res.name.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }

  async deleteConfirm(sn, deleteName) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'R U Sure want to delete <strong>' + deleteName + '</strong>?',
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
            this.restApi.deleteName(sn);
            this.routes.navigate(['/home']);
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
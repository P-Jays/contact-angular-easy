import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-addnewcontact',
  templateUrl: './addnewcontact.page.html',
  styleUrls: ['./addnewcontact.page.scss'],
})
export class AddnewcontactPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    public restApi: RestapiService,
    public toastController: ToastController) { }

  ngOnInit() { }

  closeModal() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  addToContact(addName, addMobile, addHome, addAddress, addRemark) {
    this.restApi.addName(addName, addMobile, addHome, addAddress, addRemark);
    this.presentToast(); // sudah ad modal
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 200
    });
    toast.present();
    this.closeModal();
    setTimeout(() => {
      window.location.reload();
    }, 300);
  }
}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Items } from '../app/items';
import { ToastController } from '@ionic/angular';
import { Location } from '@angular/common';
import { Constants } from '../app/Constants';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  profile;
  dataLength; // ini utk jumlah Data
  items: Items[]=[] ;

 // Url = 'http://tcit-qa.tzuchi.net/TCLTCWeb/rs/contacts';
  constructor(private http: HttpClient, private router: Router, public toastController: ToastController,
    public location: Location,) { }

  getAllData() {
    this.http.get<Items>(Constants.apiEndpoint + "/list").toPromise().then(
      data => {
        // console.log(data)
        for (let key in data) {
          if (data.hasOwnProperty(key)) {
            this.items.push(data[key]);
            
            //console.log(this.items);
            
          }
        }
        this.dataLength = Object.keys(data).length;
        console.log(this.dataLength + " is total"); 
        console.log("the service is success");
      },
      err=>{
        this.errorHandler
      }
    );

  }

  addName(newName, newMobile, newHome, newAddress, newRemark) {
    const url = Constants.apiEndpoint + "/person";
    const profile: Items = {
      name: newName,
      mobile: newMobile,
      homePhone: newHome,
      address: newAddress,
      remark: newRemark
    }
    this.http.post<Items>(url, profile).toPromise().then((data: any) => {
      console.log("success POST!")
    },
    err=>{
      this.errorHandler
    });
  }

  deleteName(sn) {
    const url = Constants.apiEndpoint + "/person/" + sn;
    console.log(url);
    this.http.delete(url).subscribe(data => {
      console.log("Delete Success");
      console.log("Success DELETE");
    },
    err=>{
      this.errorHandler
    });
  }

  updateName(snUpdate, nameUpdate, mobileUpdate, homeUpdte, addressUpdte, remarkUpdte) {

    const url = Constants.apiEndpoint + "/person/" + snUpdate;
    console.log(url);

    const profile = {
      sn: snUpdate,
      name: nameUpdate,
      mobile: mobileUpdate,
      homePhone: homeUpdte,
      address: addressUpdte,
      remark: remarkUpdte

    }
    console.log(profile);

    this.http.put(url, profile).subscribe(data => {
      console.log("UPDATED SUCCESS");
      console.log(data);
    },
    err=>{
      this.errorHandler
    }); 
  }

  getProfile(sn) {
    return this.http.get(Constants.apiEndpoint + '/person/' + sn);
  }

  errorHandler(error:HttpErrorResponse){
    return Observable.throw(error.message);
  }

}

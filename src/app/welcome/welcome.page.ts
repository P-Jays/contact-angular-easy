import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(private routes:Router, public restApi : RestapiService) { }

  

  ngOnInit() {
    
    setTimeout(() =>{
    
      this.routes.navigateByUrl('login');
    }, 1000);
  }

}

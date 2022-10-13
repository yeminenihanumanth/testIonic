import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.page.html',
  styleUrls: ['./profile-detail.page.scss'],
})
export class ProfileDetailPage implements OnInit {


  profileDetail: any = [];

  constructor(public activeRouter: ActivatedRoute,  public router: Router) {
    this.activeRouter.queryParams.subscribe((res) => {
      this.profileDetail = JSON.parse(res.detail);
    });
  }

  ngOnInit() {
  }

}

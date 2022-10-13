import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonCard, ModalController, ToastController } from '@ionic/angular';
import { GestureCtrlService } from '../providers/gestureCtrl-service/gesture-ctrl.service';

@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.page.html',
  styleUrls: ['./gesture.page.scss'],
})
export class GesturePage implements OnInit {

  picsList = [
    {

      name: "priyanka",
      DOB: "20 june 1998 (age 24 years)",
      language: "Mother Tongue is Telugu",
      img:
        "https://static.toiimg.com/photo/msid-71536423/71536423.jpg",
    },
    {

      name: "jullie",
      DOB: "21 june 19898 (age 23 years)",
      language: "Mother Tongue is Telugu",
      img:
        "https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-4l0g1f0clins7hqt4360l19021-20170530000740.Medi.jpeg",
    },
    {

      name: "Radika",
      DOB: "10 November 1996 (age 24 years)",
      language: "Mother Tongue is Telugu",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JiZbDA2dS5Au-1gSkvOMpYhupaeSFPmqcQ&usqp=CAU",
    }
  ];

  @ViewChildren(IonCard, { read: ElementRef }) cards: QueryList<ElementRef>;

  constructor(private gestureCtrlService: GestureCtrlService,private route: ActivatedRoute,
    public toastCtrl: ToastController,
    public router: Router,
    public modalController: ModalController) { }

  ngOnInit() {
    console.log("picsList", this.picsList);
  }

  ngAfterViewInit() {
    const cardArray = this.cards.toArray();
    this.gestureCtrlService.useSwiperGesture(cardArray);
    
    }

  
  async onClose() {
    const toast = await this.toastCtrl.create({
      message: 'Not Interested',
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
  }

  

  async yesconfirm() {
    const toast = await this.toastCtrl.create({
      message: 'Interested',
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
    
  }



}

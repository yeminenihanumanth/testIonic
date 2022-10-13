import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  sliderConfig = {
    slidesPerView: 2.3,
    spaceBetween: 11,
  };  

  pics_List: any = [];

  //static data
  picsList = [
    {

      name: "priyanka",
      DOB: "20 june 1998 (age 24 years)",
      imageUrls: [
        'https://static.toiimg.com/photo/msid-71536423/71536423.jpg',
        'https://menglish.sakshi.com/sites/default/files/styles/storypage_main/public/gallery_images/2020/09/21/5-1600691786.jpg?itok=4WJCzioS',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYS6RMMxLxJIf05-4Q4hQRQGuXM9V2NV_6UQ&usqp=CAU',
      ],
    },
    {

      name: "jullie",
      DOB: "21 june 19898 (age 23 years)",
      imageUrls: [
        'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-4l0g1f0clins7hqt4360l19021-20170530000740.Medi.jpeg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQeAhzOr3aS3NYk8Ka3Ooe2MI9E9y4WyRyc7Gv0y3NUNID-RqnXWZYSFztLElfthwMhI&usqp=CAU',
        'https://indianinq8.com/wp-content/uploads/2021/12/Samantha-hot-collections-Telugu-hot-heroine-Sexy-Samantha-Indian-Actress.jpg',
      ],
    
    },
    {
      name: "Radika",
      DOB: "10 November 1996 (age 23 years)",
      imageUrls: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JiZbDA2dS5Au-1gSkvOMpYhupaeSFPmqcQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUSsb5Eokdxv5Eo4rsI3d2je4Rkqi75Zs-W_5nhOpKtKcep5GmGZwY4kiOXMHZSiJPnhA&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJj72kM203j5DUre6AeJi4rQqiS0EFHX49w5Qwz5JiyvG-IDBeaPVWLe32RCByXPqR-eg&usqp=CAU'
      ]
    },
    {

      name: "likitha",
      DOB: "20 june 1998 (age 24 years)",
      imageUrls: [
        'https://static.toiimg.com/photo/msid-71536423/71536423.jpg',
        'https://menglish.sakshi.com/sites/default/files/styles/storypage_main/public/gallery_images/2020/09/21/5-1600691786.jpg?itok=4WJCzioS',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYS6RMMxLxJIf05-4Q4hQRQGuXM9V2NV_6UQ&usqp=CAU',
      ],
    },
      {

        name: "roja",
        DOB: "21 june 19898 (age 23 years)",
        imageUrls: [
          'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-4l0g1f0clins7hqt4360l19021-20170530000740.Medi.jpeg',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYQeAhzOr3aS3NYk8Ka3Ooe2MI9E9y4WyRyc7Gv0y3NUNID-RqnXWZYSFztLElfthwMhI&usqp=CAU',
          'https://indianinq8.com/wp-content/uploads/2021/12/Samantha-hot-collections-Telugu-hot-heroine-Sexy-Samantha-Indian-Actress.jpg',
        ],
      
      }
    

    


  ];
  length: any;
  constructor( public router: Router) {
    this.pics_List = this.picsList;
    this.length = this.picsList.length;
  }

  ngOnInit() { }

//naviagtion to profile detail page
  navigateToDetails(slides) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        detail: JSON.stringify(slides),
      },
    };
    this.router.navigate(['/profile-detail'], navigationExtras);
  }

  //navigation to gesture page
 recomenededProfiles() {
    this.router.navigate(['/gesture']);
  }
}

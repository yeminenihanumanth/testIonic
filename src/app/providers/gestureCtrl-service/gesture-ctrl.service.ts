import { Injectable, NgZone } from "@angular/core";
import { GestureController, Platform, ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class GestureCtrlService {
  constructor(
    private gestureCtrl: GestureController,
    public toastCtrl: ToastController,
    private zone: NgZone,
    private platform: Platform
  ) {}

  useSwiperGesture(cardArray) {
    for (let i = 0; i < cardArray.length; i++) {
      const card = cardArray[i];
      // console.log("card", card);

      const gesture = this.gestureCtrl.create({
        el: card.nativeElement,
        threshold: 15,
        gestureName: "swipte",
        onStart: (ev) => {},
        onMove: (ev) => {
          // console.log("ev : ", ev);
          card.nativeElement.style.transform = `translateX(${
            ev.deltaX
          }px) rotate(${ev.deltaX / 10}deg)`;

          //TO SET COLOR ON SWIPE
          // this.setCardColor(ev.deltaX, card.nativeElement);
        },
        onEnd: (ev) => {
          card.nativeElement.style.transition = ".5s ease-out";

          //Right side Move

          if(ev.deltaX > 50 && ev.deltaX > 100){

            this.yesconfirm();
          }
          if (ev.deltaX > 150) {
           
            card.nativeElement.style.transform = `translateX(${
              +this.platform.width() * 2
            }px) rotate(${ev.deltaX / 2}deg)`;
          this.interested();
          }
          // Left Side Move
          else if (ev.deltaX < -150) {
            card.nativeElement.style.transform = `translateX(-${
              +this.platform.width() * 2
            }px) rotate(${ev.deltaX / 2}deg)`;

            this.notInterest();
          }
          // When No move or if small move back to original
          else {
            card.nativeElement.style.transform = "";
          }
        },
      });
      gesture.enable(true);
    }
  }

  // STYLE OF CARD WHEN GESTURE START
  setCardColor(x, element) {
    let color = "";
    const abs = Math.abs(x);
    const min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    const hexCode = this.decimalToHex(min, 2);

    if (x < 0) {
      color = "#FF" + hexCode + "FF" + hexCode;
    } else {
      color = "#" + hexCode + "FF" + hexCode;
    }
    element.style.background = color;
  }

  decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    padding =
      typeof padding === "undefined" || padding === null
        ? (padding = 2)
        : padding;

    while (hex.length < padding) {
      hex = "0" + hex;
    }
    return hex;
  }

 async yesconfirm() {
    const toast = await this.toastCtrl.create({
      message: 'your interest is on its way.increase your chances of a positive response by showing your photo',
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
    
}

async interested() {
  const toast = await this.toastCtrl.create({
    message: 'Interested',
    duration: 2000,
    position: 'bottom',
  });
  await toast.present();
  
}

async notInterest() {
  const toast = await this.toastCtrl.create({
    message: 'Not Interested',
    duration: 2000,
    position: 'bottom',
  });
  await toast.present();
}

}

////////////////////////////////////////////////////////////////////////
/**
 *
 * USE THIS IN ANY TS FILE
 */
/* @ViewChildren(IonCard, { read: ElementRef }) cards: QueryList<ElementRef>;

  constructor(private gestureCtrlService: GestureCtrlService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    const cardArray = this.cards.toArray();
    this.gestureCtrlService.useTinderSwipe(cardArray);
  } */

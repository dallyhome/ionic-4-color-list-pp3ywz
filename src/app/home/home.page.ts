import { Component, ViewChild, Inject } from '@angular/core';
import {List, PopoverController} from '@ionic/angular';
import {IonColor, ColorService} from '../services/color-service';
import { DOCUMENT } from '@angular/common';
import {ColorPickerPopoverPage} from '../color-popover/color-picker-popover.page'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.css'],
})
export class HomePage {

@ViewChild(List) list: List;

public colorA : IonColor;
public colorB : IonColor;
public currentColor : IonColor;


constructor(
    public col:ColorService,
    public pop:PopoverController
  )
{
  this.colorA = this.col.colorList[3];
  this.colorB = this.col.colorList[4];
  this.currentColor = this.col.colorList[4];

}

async pickColorA(ev:Event){
  let mypopover = await this.pop.create(
    {
    component: ColorPickerPopoverPage,
    event: ev,
    componentProps: {
      color: this.colorA
    }
  });

  mypopover.onDidDismiss()
      .then((data) => {
        const x = data['data']; // Here's returned value from popover
        this.colorA = x || this.colorA;
    });
  return await mypopover.present();
}
async pickColor(ev:Event){
  let mypopover = await this.pop.create(
    {
    component: ColorPickerPopoverPage,
    event: ev,
    componentProps: {
      color: this.currentColor
    }
  });

  mypopover.onDidDismiss()
      .then((data) => {
        const x = data['data']; // Here's returned value from popover
        this.currentColor = x || this.currentColor;
    });
  return await mypopover.present();
}


async pickColorB(ev:Event){
  let mypopover = await this.pop.create(
    {
    component: ColorPickerPopoverPage,
    event: ev,
    componentProps: {
      color: this.colorB
    }
  });

  mypopover.onDidDismiss()
      .then((data) => {
        const x = data['data']; // Here's returned value from popover
        this.colorB = x || this.colorB;
    });
  return await mypopover.present();
}

}

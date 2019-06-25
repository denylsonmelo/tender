import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { SlidesAds } from "src/app/models/classes.model";
import { IonSlides } from '@ionic/angular';

@Component({
  selector: "app-slides-de-propaganda",
  templateUrl: "./slides-de-propaganda.component.html",
  styleUrls: ["./slides-de-propaganda.component.scss"]
})
export class SlidesDePropagandaComponent implements OnInit {
  @Input() propagandas: Array<SlidesAds>;
  @ViewChild('slides') slides: IonSlides;
  opcoes = {
    initialSlide: 1,
    speed: 400
  };

  constructor() {}

  ngOnInit() {
    this.slides.startAutoplay();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SlidesDePropagandaComponent } from './slides-de-propaganda/slides-de-propaganda.component';

@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [SlidesDePropagandaComponent],
  exports: [SlidesDePropagandaComponent]
})
export class ComponentsModule {}

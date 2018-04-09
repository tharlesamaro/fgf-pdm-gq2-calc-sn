import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConversionPage } from './conversion';

@NgModule({
  declarations: [
    ConversionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConversionPage),
  ],
})
export class ConversionPageModule {}

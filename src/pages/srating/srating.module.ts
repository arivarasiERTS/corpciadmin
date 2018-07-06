import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SratingPage } from './srating';

@NgModule({
  declarations: [
    SratingPage,
  ],
  imports: [
    IonicPageModule.forChild(SratingPage),
  ],
})
export class SratingPageModule {}

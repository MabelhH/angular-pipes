import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PipesTestingPipe } from '../pipes-testing.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    PipesTestingPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HomeComponent,
    PipesTestingPipe
  ]


})
export class PagesModule { }

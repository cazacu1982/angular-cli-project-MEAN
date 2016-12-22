import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddReviewPageComponent } from "./add-review-page/add-review-page.component";

import  { ReviewsService } from './reviews.service';

//Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'add-review-page',
    pathMatch: 'full'
  },
  {
    path: 'add-review-page',
    component: AddReviewPageComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    AddReviewPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ReviewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

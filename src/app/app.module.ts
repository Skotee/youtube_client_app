import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './header/header.component';
import SearchBarComponent from './components/search-bar/search-bar.component';
import ProfileBarComponent from './components/profile-bar/profile-bar.component';
import VideoGridComponent from './components/video-grid/video-grid.component';
import VideoItemComponent from './components/video-item/video-item.component';
import VideoStatsBarComponent from './components/video-stats-bar/video-stats-bar.component';
import SortingBarComponent from './components/sorting-bar/sorting-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    ProfileBarComponent,
    VideoGridComponent,
    VideoItemComponent,
    VideoStatsBarComponent,
    SortingBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }

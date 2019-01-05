import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material';
import { GameCardComponent } from './game-card/game-card.component';
import { PastGamesComponent } from './past-games/past-games.component';
import { DevCardComponent } from './dev-card/dev-card.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { GameShowcaseComponent } from './game-showcase/game-showcase.component';
import { SnakeybusComponent } from './snakeybus/snakeybus.component';
import { BannerComponent } from './banner/banner.component';
import { SectionHeadComponent } from './section-head/section-head.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ScreenshotComponent } from './screenshot/screenshot.component'; 

@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    PastGamesComponent,
    DevCardComponent,
    AboutComponent,
    MainComponent,
    GameShowcaseComponent,
    SnakeybusComponent,
    BannerComponent,
    SectionHeadComponent,
    GalleryComponent,
    ScreenshotComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';  // Add your component here
import { AboutComponent } from './about/about.component';  // Add your component here
import { MainComponent } from './main/main.component';  // Add your component here
import { SnakeybusComponent } from './snakeybus/snakeybus.component';  // Add your component here

//This is my case 
const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'snakeybus', component: SnakeybusComponent },
    // { path: 'main', component: MainComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ItemsService } from './shared/model/items.service';
import {AngularFireModule} from "angularfire2/index";
import {firebaseConfig} from "../environments/firebase.config";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomepageComponent } from './homepage/homepage.component';
import { routerConfig } from './router.config';
import { ObjectComponent } from './object/object.component';
import { GearComponent } from './gear/gear.component';
import { MapComponent } from './map/map.component';
import { SearchComponent } from './search/search.component';
import { AddItemComponent } from './add-item/add-item.component';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomepageComponent,
    ObjectComponent,
    GearComponent,
    MapComponent,
    SearchComponent,
    AddItemComponent,
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routerConfig),
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

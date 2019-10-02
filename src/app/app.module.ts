import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MenuComponent } from './menu/menu.component';
import { LocationComponent } from './location/location.component';
import { OrderCreationComponent } from './order-creation/order-creation.component';
// import {AgmCoreModule} from '@agm/core';

// const GOOGLE_API_KEY = 'AIzaSyCVmXs2a4dy1V8ca5d9sSz9D-KV2WwJo8E';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MenuComponent,
    LocationComponent,
    OrderCreationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    // AgmCoreModule.forRoot({
    //   apiKey: GOOGLE_API_KEY
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

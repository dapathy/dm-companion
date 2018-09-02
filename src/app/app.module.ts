import 'zone.js/dist/zone-mix';
import 'reflect-metadata';
import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import {
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule
} from "@angular/material";

import { AppRoutingModule } from './app-routing.module';

import { ElectronService } from './providers/electron.service';

import { WebviewDirective } from './directives/webview.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PlayersComponent } from './components/players/players.component';
import {PlayersService} from "./components/players/players.service";
import {DndApi} from "./providers/dndApi";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebviewDirective,
    PlayersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
    ElectronService,
    PlayersService,
    DndApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

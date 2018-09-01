import { Component, OnInit } from '@angular/core';
import {DndEntity} from "../../models/dndEntity";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public entities: Array<DndEntity> = [];

  constructor() { }

  ngOnInit() {
    // load from file
  }

}

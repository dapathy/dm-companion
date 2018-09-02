import { Component, OnInit } from '@angular/core';
import {DndEntity} from "../../models/dndEntity";
import {PlayersService} from "../players/players.service";
import {DndApi} from "../../providers/dndApi";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public entities: Array<DndEntity> = [];
  public newMonsterName: string;

  constructor(private playersService: PlayersService, private dndApi: DndApi) { }

  ngOnInit() {
    this.entities = this.entities.concat(this.playersService.load());
  }

  public addNewMonster(): void {
    this.dndApi.getMonsterByName(this.newMonsterName).subscribe(
      response => {
        this.entities.push(response);
      }
    )
  }
}

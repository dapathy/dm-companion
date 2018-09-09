import { Component, OnInit } from '@angular/core';
import {DndEntity} from "../../models/dndEntity";
import {PlayersService} from "../players/players.service";
import {DndApi} from "../../providers/dndApi";
import {Monster} from "../../models/monster";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public entities: Array<DndEntity> = [];
  public newMonsterName: string;
  public selectedEntity: DndEntity;

  constructor(private playersService: PlayersService, private dndApi: DndApi) { }

  ngOnInit() {
    this.entities = this.entities.concat(this.playersService.load());
  }

  public addNewMonster(): void {
    this.dndApi.getMonsterByName(this.newMonsterName).subscribe(
      response => {
        Monster.initialize(response);
        this.entities.push(response);
        this.sort();
      }, error => {
        console.log(error);
      }
    )
  }

  public removeMonster(index: number): void {
    this.entities.splice(index, 1);
  }

  public isMonster(entity: any): boolean {
    // HACK
    return entity.hasOwnProperty("size");
  }

  public sort(): void {
    this.entities.sort((a, b) => {
      let initiativeA = a.initiative || 999;
      let initiativeB = b.initiative || 999;

      if (initiativeA < initiativeB) return 1;
      if (initiativeA > initiativeB) return -1;
      return 0;
    });
  }

  public onPlayerChange(): void {
    this.sort();
  }
}

import { Component, OnInit } from '@angular/core';
import {Player} from "../../models/player";
import {PlayersService} from "./players.service";

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  public newPlayer = new Player();

  public players: Array<Player> = [];

  constructor(private playersService: PlayersService) { }

  ngOnInit() {
    this.players = this.playersService.read();
  }

  public addNewPlayer(): void {
    this.players.push(Object.assign({}, this.newPlayer));
    this.newPlayer = new Player();
  }

  public save(): void {
    this.playersService.save(this.players);
  }

  public removePlayer(index: number): void {
    this.players.splice(index, 1);
  }
}

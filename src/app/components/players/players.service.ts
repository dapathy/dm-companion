import {Injectable} from "@angular/core";
import {Player} from "../../models/player";
import {ElectronService} from "../../providers/electron.service";

@Injectable()
export class PlayersService {
  constructor(private electron: ElectronService) {}

  private static fileName = "players";

  public read(): Array<Player> {
    let contents = this.electron.readFromFile(PlayersService.fileName);
    if (contents) {
      return JSON.parse(contents) as Array<Player>;
    } else {
      return [];
    }
  }

  public save(players: Array<Player>): void {
    this.electron.writeToFile(PlayersService.fileName, JSON.stringify(players));
  }
}

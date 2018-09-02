import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { switchMap } from 'rxjs/operators';
import {Monster} from "../models/monster";

@Injectable()
export class DndApi {
  private static BaseUrl = "http://dnd5eapi.co/api/";

  constructor(private http: HttpClient) {}

  public getMonsterByName(name: string): Observable<Monster> {
    let urlSegment = this.toUpper(name).replace(' ', '+');
    let url = `${DndApi.BaseUrl}monsters/?name=${urlSegment}`;

    return this.http.get<any>(url).pipe(
      switchMap(response => {
        if ((response as any).count !== 1) throw new Error("not good");

        return this.http.get<Monster>(response.results[0].url);
      })
    )
  }

  private toUpper(value: string): string {
    return value
      .toLowerCase()
      .split(' ')
      .map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
      })
      .join(' ');
  }
}

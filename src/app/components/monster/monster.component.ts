import {Component, Input, OnInit} from '@angular/core';
import {Monster} from "../../models/monster";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss']
})
export class MonsterComponent implements OnInit {
  @Input() value: Monster;


  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      initiative: [''],
      size: [''],
      type: [''],
      subtype: [''],
      alignment: [''],
      armor_class: [''],
      hit_points: [''],
      hit_dice: [''],
      speed: [''],
      strength: [''],
      dexterity: [''],
      constitution: [''],
      intelligence: [''],
      wisdom: [''],
      charisma: [''],
      stealth: [''],
      damage_vulnerabilities: [''],
      damage_resistances: [''],
      damage_immunities: [''],
      sense: [''],
      language: [''],
      challenge_rating: ['']

    });

    this.form.patchValue(this.value);
  }

}

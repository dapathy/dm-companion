import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {Monster} from "../../models/monster";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonsterComponent implements OnInit, OnChanges {
  @Input() value: Monster;

  //public _value: Monster;

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

  /**
   * Handle input updates from parent component.
   */
  ngOnChanges(changes: SimpleChanges){
    this.value = changes.value.currentValue;

    if (this.form) {
      this.form.patchValue(this.value);
    }
  }

}

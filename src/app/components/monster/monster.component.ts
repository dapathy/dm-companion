import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {Monster} from "../../models/monster";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-monster',
  templateUrl: './monster.component.html',
  styleUrls: ['./monster.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonsterComponent implements OnInit, OnChanges {
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

      strength_save: [''],
      dexterity_save: [''],
      constitution_save: [''],
      intelligence_save: [''],
      wisdom_save: [''],
      charisma_save: [''],

      acrobatics: [''],
      animal_handling: [''],
      arcana: [''],
      athletics: [''],
      deception: [''],
      history: [''],
      insight: [''],
      intimidation: [''],
      investigation: [''],
      medicine: [''],
      nature: [''],
      perception: [''],
      performance: [''],
      persuasion: [''],
      religion: [''],
      sleight_of_hand: [''],
      stealth: [''],
      survival: [''],

      damage_vulnerabilities: [''],
      damage_resistances: [''],
      damage_immunities: [''],
      condition_immunities: [''],
      senses: [''],
      languages: [''],
      challenge_rating: [''],

      special_abilities: new FormArray([]),
      actions: new FormArray([]),
      legendary_actions: new FormArray([])

    });

    this.initializeForm(this.value);
  }

  /**
   * Handle input updates from parent component.
   */
  ngOnChanges(changes: SimpleChanges){
    this.value = changes.value.currentValue;

    if (this.form) {
      this.initializeForm(this.value);
    }
  }

  get specialAbilities(): FormArray {
    return this.form.get('special_abilities') as FormArray;
  }

  get actions(): FormArray {
    return this.form.get('actions') as FormArray;
  }

  get legendaryActions(): FormArray {
    return this.form.get('legendary_actions') as FormArray;
  }

  private initializeForm(value: Monster): void {
    this.form.patchValue(value);

    // clear existing FormArrays
    this.form.controls.special_abilities = this.formBuilder.array([]);
    this.form.controls.actions = this.formBuilder.array([]);
    this.form.controls.legendary_actions = this.formBuilder.array([]);

    if (value.special_abilities) {
      for (let specialAbility of value.special_abilities) {
        this.specialAbilities.push(this.formBuilder.group({
          name: [specialAbility.name],
          desc: [specialAbility.desc],
          attack_bonus: [specialAbility.attack_bonus]
        }));
      }
    }

    if (value.actions) {
      for (let action of value.actions) {
        this.actions.push(this.formBuilder.group({
          name: [action.name],
          desc: [action.desc],
          attack_bonus: [action.attack_bonus],
          damage_bonus: [action.damage_bonus],
          damage_dice: [action.damage_dice]
        }));
      }
    }

    if (value.legendary_actions) {
      for (let legendaryAction of value.legendary_actions) {
        this.legendaryActions.push(this.formBuilder.group({
          name: [legendaryAction.name],
          desc: [legendaryAction.desc],
          attack_bonus: [legendaryAction.attack_bonus]
        }));
      }
    }
  }
}

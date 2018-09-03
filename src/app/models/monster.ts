import {DndEntity} from "./dndEntity";

export class Monster extends DndEntity {
  size: string;
  type: string;
  subtype: string;
  alignment: string;
  armor_class: number;
  hit_points: number;
  hit_dice: string;
  speed: string;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  stealth: number;
  damage_vulnerabilities: string;
  damage_resistances: string;
  damage_immunities: string;
  condition_immunities: string;
  senses: string;
  languages: string;
  challenge_rating: number;
  special_abilities: SpecialAbility[];
  actions: Action[];

  static setInitiative(monster: Monster): void {
    let random =  Math.floor(Math.random() * (20 - 1 + 1)) + 1;
    monster.initiative = random + DndEntity.getAbilityModifier(monster.dexterity);
  }

  icon: string = "android";
}

export class Action {
  damage_bonus: number;
  damage_dice: string;
  attack_bonus: number;
  desc: string;
  name: string;
}

export class SpecialAbility {
  attack_bonus: number;
  desc: string;
  name: string;
}


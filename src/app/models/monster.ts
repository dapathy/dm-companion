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

  // save bonuses
  strength_save: number;
  dexterity_save: number;
  constitution_save: number;
  intelligence_save: number;
  wisdom_save: number;
  charisma_save: number;

  // skill bonuses
  acrobatics: number;
  animal_handling: number;
  arcana: number;
  athletics: number;
  deception: number;
  history: number;
  insight: number;
  intimidation: number;
  investigation: number;
  medicine: number;
  nature: number;
  perception: number;
  performance: number;
  persuasion: number;
  religion: number;
  sleight_of_hand: number;
  stealth: number;
  survival: number;

  damage_vulnerabilities: string;
  damage_resistances: string;
  damage_immunities: string;
  condition_immunities: string;
  senses: string;
  languages: string;
  challenge_rating: number;

  special_abilities: SpecialAbility[];
  actions: Action[];
  legendary_actions: SpecialAbility[];

  // These need to be static, because the type isn't know at runtime.
  public static initialize(monster: Monster): void {
    Monster.initializeBonuses(monster);
    Monster.initializeInitiative(monster);
  }

  private static initializeBonuses(monster: Monster): void {
    if (!monster.strength_save) {
      monster.strength_save = DndEntity.getAbilityModifier(monster.strength);
    }
    if (!monster.dexterity_save) {
      monster.dexterity_save = DndEntity.getAbilityModifier(monster.dexterity);
    }
    if (!monster.constitution_save) {
      monster.constitution_save = DndEntity.getAbilityModifier(monster.constitution);
    }
    if (!monster.intelligence_save) {
      monster.intelligence_save = DndEntity.getAbilityModifier(monster.intelligence);
    }
    if (!monster.wisdom_save) {
      monster.wisdom_save = DndEntity.getAbilityModifier(monster.wisdom);
    }
    if (!monster.charisma_save) {
      monster.charisma_save = DndEntity.getAbilityModifier(monster.charisma);
    }

    if (!monster.acrobatics) {
      monster.acrobatics = DndEntity.getAbilityModifier(monster.dexterity);
    }
    if (!monster.animal_handling) {
      monster.animal_handling = DndEntity.getAbilityModifier(monster.wisdom);
    }
    if (!monster.arcana) {
      monster.arcana = DndEntity.getAbilityModifier(monster.intelligence);
    }
    if (!monster.athletics) {
      monster.athletics = DndEntity.getAbilityModifier(monster.strength);
    }
    if (!monster.deception) {
      monster.deception = DndEntity.getAbilityModifier(monster.charisma);
    }
    if (!monster.history) {
      monster.history = DndEntity.getAbilityModifier(monster.intelligence);
    }
    if (!monster.insight) {
      monster.insight = DndEntity.getAbilityModifier(monster.wisdom);
    }
    if (!monster.intimidation) {
      monster.intimidation = DndEntity.getAbilityModifier(monster.charisma);
    }
    if (!monster.investigation) {
      monster.medicine = DndEntity.getAbilityModifier(monster.intelligence);
    }
    if (!monster.nature) {
      monster.nature = DndEntity.getAbilityModifier(monster.intelligence);
    }
    if (!monster.perception) {
      monster.perception = DndEntity.getAbilityModifier(monster.wisdom);
    }
    if (!monster.persuasion) {
      monster.persuasion = DndEntity.getAbilityModifier(monster.charisma);
    }
    if (!monster.religion) {
      monster.religion = DndEntity.getAbilityModifier(monster.intelligence);
    }
    if (!monster.sleight_of_hand) {
      monster.sleight_of_hand = DndEntity.getAbilityModifier(monster.dexterity);
    }
    if (!monster.stealth) {
      monster.stealth = DndEntity.getAbilityModifier(monster.dexterity);
    }
    if (!monster.survival) {
      monster.survival = DndEntity.getAbilityModifier(monster.wisdom);
    }
  }

  private static initializeInitiative(monster: Monster): void {
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


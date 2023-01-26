import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(_name: string) {
    super(_name);
    Warrior._createdArchetypeInstances += 1;
    this._energyType = 'stamina';
  }

  public static createdArchetypeInstances(): number { 
    return Warrior._createdArchetypeInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Necromancer._createdArchetypeInstances += 1;
    this._energyType = 'mana';
  }

  public static createdArchetypeInstances(): number { 
    return Necromancer._createdArchetypeInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}
import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Mage._createdArchetypeInstances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    return Mage._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

type Enemies = (Fighter | SimpleFighter)[];

export default class PVE extends Battle {
  constructor(protected player: Fighter, protected enemies: Enemies) {
    super(player);
  }

  public fight(): number {
    const opponents = this.enemies;
    while (opponents.length > 0 && this.player.lifePoints > 0) {
      this.player.attack(opponents[0]);
      if (opponents[0].lifePoints < 0) {
        opponents.shift();
      }
      opponents.forEach((enemy) => enemy.attack(this.player));
    }

    return super.fight();
  }
}
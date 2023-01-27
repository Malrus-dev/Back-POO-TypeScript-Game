import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;

  constructor(protected player1: Fighter, protected player2: Fighter) { 
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }
  
  public fight(): number {
    const playersArray = [this.player1, this.player2];
    const player1Strength = this.player1.strength;
    const player2Strength = this.player2.strength;
    const firstPlayer = player1Strength > player2Strength ? 0 : 1;
    const secondPlayer = 1 - firstPlayer;
    while (this.player1.lifePoints !== -1 && this.player2.lifePoints !== -1) {
      playersArray[firstPlayer].attack(playersArray[secondPlayer]);
      if (playersArray[secondPlayer].lifePoints > 0) {
        playersArray[secondPlayer].attack(playersArray[firstPlayer]);
      }
    }
    return super.fight();
  }
}

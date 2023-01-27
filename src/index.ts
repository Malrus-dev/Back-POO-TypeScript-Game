import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Player 1');
const player2 = new Character('Player 2');
const player3 = new Character('Player 3');
let count = 10;
while (count > 0) {
  count -= 1;
  player1.levelUp();
}

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]): void => {
  battles.forEach((battle) => battle.fight());
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
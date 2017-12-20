export class Quote {
  text: string;
  chosen: boolean = false;
  player: string;
}

export class Player {
  id: number;
  name: string = "Moshe Plotkin";
  quotes: Quote[] = [];
  score: number = 0;
}

export class Room {
  players: Player[] = [new Player(), new Player()];
  dealer: number;
  picture: string;
  quotes: Quote[] = [];
}

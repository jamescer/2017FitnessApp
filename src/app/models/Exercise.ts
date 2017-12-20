export class Exercise {
  name: string = "";
  weight: number = 0;
  time: string = "";
  sets: number = 0;
  reps: number = 0;

  constructor(n: string, t: string, s: number, r: number, w: number) {
    this.name = n;
    this.weight = w;
    this.time = t;
    this.sets = s;
    this.reps = r;
  }
}

export class Exercise {
  name: string;
  weight: number;
  time: string;
  sets: number;
  reps: number;

  constructor(n: string, t: string, s: number, r: number, w: number) {
    this.name = n;
    this.weight = w;
    this.time = t;
    this.sets = s;
    this.reps = r;
  }
}

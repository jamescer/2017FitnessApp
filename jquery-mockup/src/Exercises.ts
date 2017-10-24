import * as $ from "jquery";
var donecounter: number;
var candocounter: number;
candocounter = 0;
donecounter = 0;
export class Quote {
  text: string;
}

export class Exercise {
  reps: number;
  sets: number;
  weight: number;
  name: string;
  constructor(n: string, s: number, r: number, w: number) {
    this.reps = r;
    this.weight = w;
    this.name = n;
    this.sets = s;
  }
}

export class Person {
  name: string = "James Cerniglia";
  // done: Exercise[] = [];
  done: Exercise[] = [{ name: "Bicep Curls", reps: 6, sets: 3, weight: 30 }];
  canDo: Exercise[] = [{ name: "Bent over Row", reps: 6, sets: 3, weight: 30 }];
  weight: number;
  picture: string;
  constructor() {
    this.canDo;
    this.done;
  }
  drawDone() {
    $("#my-Done").html(
      this.done
        .map(
          x =>
            `<li class="list-group-item">${x.name}: Sets: ${x.sets}, Reps: ${x.reps}</li>`
        )
        .join("")
    );
  }
  drawCanDo() {
    $("#my-canDo").html(
      this.canDo
        .map(
          y =>
            `<li class="list-group-item">${y.name}: Sets: ${y.sets}, Reps: ${y.reps}</li>`
        )
        .join("")
    );
  }
  drawGreeting() {
    $("#greetings").html(`<h1 class="display-3">Hello, ${this.name}</li>`);
  }
  drawPicture() {
    $("#picture").attr("src", this.picture);
  }
}
$("#Adding1").on("click", function(event) {
  event.preventDefault();
  $(function() {
    donecounter++;
    $("#addedtodone").html(` <p>done: ${donecounter}</p>`);
  });
});
$("#Adding2").on("click", function(event) {
  event.preventDefault();
  $(function() {
    candocounter++;
    $("#addedtocando").html(`<p>cando: ${candocounter}</p>`);
  });
});

// Controller here
const me = new Person();
me.drawDone();
me.drawCanDo();
me.drawGreeting();

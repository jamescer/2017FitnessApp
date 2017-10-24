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
  done: Exercise[] = [];
  canDo: Exercise[] = [];
  // done: Exercise[] = [{ name: "Bicep Curls", reps: 6, sets: 3, weight: 30 }];
  // canDo: Exercise[] = [{ name: "Bent over Row", reps: 6, sets: 3, weight: 30 }];
  weight: number;
  picture: string;
  constructor() {
    this.canDo;
    this.done;
  }
  drawDone() {
    $("#my-Done").html(
      me.done
        .map(
          x =>
            `<li class="list-group-item">${x.name}: Sets: ${x.sets}, Reps: ${x.reps}</li>`
        )
        .join("")
    );
  }
  drawCanDo() {
    $("#my-canDo").html(
      me.canDo
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

$("#Adding1").on("click", function() {
  $(function() {
    donecounter++;
    $("#add1").html(` <p>done: ${donecounter}</p>`);
    $("#last2").html(
      me.canDo
        .map(
          y =>
            `<li class="list-group-item">${y.name}: Sets: ${y.sets}, Reps: ${y.reps}</li>`
        )
        .join("")
    );
  });
});

$("#Adding2").on("click", function() {
  $(function() {
    candocounter++;
    $("#add2").html(`<p>cando: ${candocounter}</p>`);
  });
});
$("#Adding2").on("click", function() {
  $(function() {
    $("#last2").html(
      me.canDo
        .map(
          y =>
            `<li class="list-group-item">${y.name}: Sets: ${y.sets}, Reps: ${y.reps}, Weight: ${y.weight}</li>`
        )
        .join("")
    );
  });
});

$("#Adding1").on("click", function() {
  
});

// Controller here
const me = new Person();
me.drawDone();
me.drawCanDo();
me.drawGreeting();

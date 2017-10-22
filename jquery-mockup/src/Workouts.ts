import * as $ from 'jquery';

export class Quote {
    text: string
}

export class Exercise {
    reps: number;
    sets: number;
    name: string;
}

export class Person {
    name: string = "James Cerniglia";
    done: Exercise[] = [{ reps: 1, sets: 1, name: "did this" }, { reps: 4, sets: 8, name: "did this one too" }];
    canDo: Exercise[] = [{ reps: 1, sets: 1, name: "can do these" }, { reps: 3, sets: 12, name: "can do these as well" }];
    weight: number; picture: string;
    drawDone() {
        $("#my-Done").html(
            this.done.map(x => `<li class="list-group-item">${x.name}: Sets: ${x.sets}, Reps: ${x.reps}</li>`).join("")
        );
    }
    drawCanDo() {
        $("#my-canDo").html(
            this.canDo.map(y => `<li class="list-group-item">${y.name}: Sets: ${y.sets}, Reps: ${y.reps}</li>`).join("")
        );
    }
    drawGreeting() {
        $("#greetings").html(`<h1 class="display-3">Hello, ${this.name}</li>`);
    } drawPicture() {
        $("#picture").attr("src", this.picture);
    }
}




// Controller
const me = new Person();

var i = 0;
me.drawDone();
me.drawCanDo();
me.drawGreeting();



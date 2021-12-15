let step = 5;
var ladder = {
  step: 0,
  up: function () {
    console.log("Line 5",this)
    console.log(this.step++);
  },
  down: function () {
    let step = 10;
    step--;
    console.log("Line 5",this)
    console.log(step, this.step);
  },
  showStep: function () {
    console.log("Line 5",this)
    console.log("Total step taken", this.step);
  },
};
let nstep = ladder.down;
 let nnstep = new nstep();
 console.log(nnstep);
// ladder.up();
// ladder.up();
// ladder.up();
//ladder.down();
// ladder.showStep();

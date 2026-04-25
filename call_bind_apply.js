// call inovoked, single val as arg

function later(arg) {
  console.log("hiii " + this.name + " " + arg);
}

later.call({ name: "sai" }, "hyd");

// apply inovoked, arr as args

function applyEx(args) {
  console.log("hii " + this.name + args);
}

applyEx.apply({ name: "sai" }, [1, 2, 3]);

function bindEx(args) {
  console.log(this.name + " " + args);
}

// bind not inovoked returned cb

const mybind = bindEx.bind({ name: "sai" }, "hyd");

mybind();
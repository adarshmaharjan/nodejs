//Modules
const { john, peter } = require("./4-names");
const sayHi = require("./5-utils");
require("./7-mind-grenade");

const data = require("./6-alternative-flavor");

console.log(data);
sayHi("Nigma");
sayHi(john);
sayHi(peter);

const os = require("os");

// info about current user

const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds

console.log(`The system uptime is ${os.uptime / 3600} hr`);

const currentOS = {
  name: os.type(),
  relesae: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);

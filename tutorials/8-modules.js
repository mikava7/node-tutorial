//CommonJS, every file in node  is module(by default)
//Modules - Encapsulated Code(only share minimum )

const names = require("./4-name");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor1");
require("./7-mind-grenade");
const { john, peter, man } = names;
sayHi("susan");
sayHi(names.john);
sayHi(peter);

"use strict";

import { Person } from './modules/first';
import Class1 from './modules/second';
import BMW from "./modules/bmw.module";
import Mercedes from "./modules/mercedes.module";

const bmw = new BMW();
const merc = new Mercedes();


bmw.start();
bmw.stop();
bmw.makeCoupe();
console.log('------------');

merc.start();
merc.stop();
merc.makeSedan();

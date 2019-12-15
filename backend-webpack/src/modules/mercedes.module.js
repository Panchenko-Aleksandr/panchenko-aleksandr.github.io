"use strict";

import Base from "../core/baseCar";

export default class Mercedes extends Base {
    constructor () {
        super ();
        console.log ( 'Mercedes constructor' );
    }

    makeSedan () {
        console.log ( 'Make sedan' );
    }
}
"use strict";
import Base from "../core/baseCar";

export default class BMW extends Base {
    constructor () {
        super ();
        console.log ( 'BWM constructor' );
    }

    makeCoupe () {
        console.log ( 'Make coupe' );
    }
}
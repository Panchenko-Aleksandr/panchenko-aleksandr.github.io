"use strict";

const second = 'second';
export default class Class1 {
    constructor ( props ) {
        this.variable = 2;
    }

    init () {
        this.changeVariable ();
    }

    changeVariable () {
        console.log ( changeFuncVar ( this.variable ) );
    }
}

function changeFuncVar ( v ) {
    console.log ( v );
    return v + 2;
}

"use strict";

window.addEventListener ( 'DOMContentLoaded', () => {
    const task = [
        {
            id : '1',
            title : 'New Task',
            body : 'Some Text for Task'
        },
        {
            id : '2',
            title : 'New Task',
            body : 'Some Text for Task'
        },
        {
            id : '3',
            title : 'New Task',
            body : 'Some Text for Task'
        }
    ];

    const form = document.forms[ 'taskForm' ];

    const inputTitle = form[ 0 ];
    const inputBody = form[ 1 ];

    form.addEventListener ( 'submit', ( e ) => {
        console.log ( e );
        e.preventDefault ();
    } );


} );

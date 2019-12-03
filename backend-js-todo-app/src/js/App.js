"use strict";

document.addEventListener ( 'DOMContentLoaded', () => {
    new WOW ().init ();

    const titleInput = document.querySelector ( '.plg-title' );
    const bodyInput = document.querySelector ( '.plg-textarea' );
    const btnLinkTask = document.querySelector ( '.plg-link-task' );
    const addTask = document.querySelector ( '.plg-add-task' );
    const newTask = document.querySelector ( '.plg-new-task' );
    const tasksField = document.querySelector ( '.plg-task-form' );
    const main = document.querySelector ( 'main' );
    const footer = document.querySelector ( 'footer' );
    const btnSetting = document.querySelector ( '.plg-btn-setting' );

    //***** anchor tasks
    btnLinkTask.addEventListener ( 'click', () => {
        const label = document.querySelector ( '.card' );
        label.scrollIntoView ( {
            behavior : 'smooth',
            block : 'start'
        } );
    } );

    function isEmpty ( node ) {
        if ( node.value === '' ) {
            node.classList.contains ( 'valid' ) ? node.classList.replace ( 'valid', 'invalid' ) : node.classList.add ( 'invalid' );
        } else
            node.classList.contains ( 'invalid' ) ? node.classList.replace ( 'invalid', 'valid' ) : node.classList.add ( 'valid' );
    }

    function checkPrettyNumber ( number ) {
        return number < 10 ? ( '0' + number ) : number;
    }

    function createElement ( tagName, className, textContent ) {
        let element = document.createElement ( tagName );
        className = className.split ( ' ' );
        className.forEach ( item => element.classList.add ( item ) );
        element.textContent = textContent;
        return element;
    }

    newTask.addEventListener ( 'click', () => {
        titleInput.addEventListener ( 'keyup', () => {
            isEmpty ( titleInput );
        } );
        bodyInput.addEventListener ( 'keyup', () => {
            isEmpty ( bodyInput );
        } );
    } );

    addTask.addEventListener ( 'click', function ( e ) {
        const { target } = e;
        isEmpty ( titleInput );
        isEmpty ( bodyInput );
        if ( titleInput.value === '' || bodyInput.value === '' ) return;
        newTaskCreate ( titleInput.value, bodyInput.value );
        main.classList.remove ( 'd-none' );
        footer.classList.remove ( 'd-none' );
        document.querySelector ( '.plg-link-task' ).classList.remove ( 'disabled' );
        const btnDel = document.querySelector ( '.btnDel' );
        const tagDone = document.querySelector ( '.btnDone' );
        $ ( '.modal' ).modal ( 'hide' );
    } );

    function newTaskCreate ( title, body ) {
        const newTask = {
            id : `task-${ Math.floor ( Math.random () * 999999 ) }`,
            title,
            body,
            dateTime : `${ checkPrettyNumber ( new Date ().getDate () ) }.${ checkPrettyNumber ( new Date ().getMonth () ) }.${ new Date ().getFullYear () } ${ checkPrettyNumber ( new Date ().getHours () ) }:${ checkPrettyNumber ( new Date ().getMinutes () ) }:${ checkPrettyNumber ( new Date ().getSeconds () ) }`,
            isDone : false
        };
        createTasksElement ( newTask );
    }

    function createTasksElement ( { id, title, body, dateTime, isDone = false } ) {

        let mainElement = createElement ( 'div', 'card border-success mb-3', '' );
        let div = createElement ( 'div', 'card-header', dateTime );
        let tagDel = createElement ( 'i', 'fas fa-trash-alt btnDel', '' );

        let tagDone = ( isDone ) ? createElement ( 'i', 'fas fa-check-circle btnDone', '' ) : createElement ( 'i', 'far fa-check-circle btnDone', '' );

        let tagH5 = createElement ( 'h5', 'card-title', title );
        let tagP = createElement ( 'p', 'card-text', body );
        let taskTemp = { id, title, body, dateTime, isDone };
        setLocalStorage ( taskTemp );

        mainElement.style.maxWidth = '25rem';
        mainElement.style.minWidth = '20rem';
        mainElement.setAttribute ( 'data-task-id', `${ id }` );
        div.insertAdjacentElement ( 'afterbegin', tagDel );
        div.insertAdjacentElement ( 'beforeend', tagDone );
        mainElement.insertAdjacentElement ( 'beforeend', div );
        div = createElement ( 'div', 'card-body text-success', '' );
        div.insertAdjacentElement ( 'beforeend', tagH5 );
        div.insertAdjacentElement ( 'beforeend', tagP );
        mainElement.insertAdjacentElement ( 'beforeend', div );
        tasksField.insertAdjacentElement ( 'beforeend', mainElement );


        tagDel.addEventListener ( 'click', function ( e ) {
            const { target } = e;
            const parent = target.closest ( '.card' );
            const parentID = parent.dataset.taskId;
            removeTaskFromTasks ( parentID );
            if ( localStorage.length === 0 ) {
                main.classList.add ( 'd-none' );
                document.querySelector ( '.plg-link-task' ).classList.add ( 'disabled' );
            }
            parent.remove ();
        } );

        tagDone.addEventListener ( 'click', ( e ) => {
            const { target } = e;
            const parent = target.closest ( '.card' );
            const parentID = parent.dataset.taskId;
            const tempValue = JSON.parse ( localStorage.getItem ( parentID ) );

            if ( !tempValue.isDone ) {
                tempValue.isDone = true;
                target.classList.replace ( 'far', 'fas' );
                parent.classList.replace ( 'border-success', 'border-light' );
            } else {
                tempValue.isDone = false;
                target.classList.replace ( 'fas', 'far' );
                parent.classList.replace ( 'border-light', 'border-success' );
            }
            localStorage.setItem ( parentID, JSON.stringify ( tempValue ) );
        } );

    }

    function removeTaskFromTasks ( parentID ) {
        localStorage.removeItem ( parentID );
    }

    function setLocalStorage ( task ) {
        localStorage.setItem ( task.id, JSON.stringify ( task ) );
    }

    ( () => {
        if ( localStorage.length !== 0 ) {
            main.classList.remove ( 'd-none' );
            footer.classList.remove ( 'd-none' );
            document.querySelector ( '.plg-link-task' ).classList.remove ( 'disabled' );

            const btnDel = document.querySelector ( '.btnDel' );
            const tagDone = document.querySelector ( '.btnDone' );

            for ( let i = 0; i <= localStorage.length - 1; i++ ) {
                let task = JSON.parse ( localStorage.getItem ( localStorage.key ( i ) ) );
                createTasksElement ( task )
            }
        }

    } ) ();


} );
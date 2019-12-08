"use strict";

const options = {
    tagScript : '.container-calc',
    showLog : true
};

class Calculator {
    constructor ( { tagScript, showLog } ) {
        this.showLog = showLog;
        this.$container = document.querySelector ( tagScript );
        this.$btn = null;
        this.$input = null;
        this.act = {
            firstDigits : null,
            secondDigits : 0,
            act : null
        }; // действие
        this.logs = null;
    }

    init () {
        this.createCalc ();
    }

    createCalc () {
        this.createElements ();
        this.$input = document.querySelector ( '.input-digits' );

        this.$btn = document.querySelector ( '.input-nums' );
        this.$btn.addEventListener ( 'click', this.enterDigit.bind ( this ) );
        this.logs = document.querySelector ( '.historyLogs' );

        ( this.showLog ) ? this.logs.style.display = 'inherit' : this.logs.style.display = 'none';
    }

    createElements () {
        let cont = this.createElement ( 'input', 'input-digits' );
        this.$container.append ( cont );
        cont = this.createElement ( 'div', 'input-nums' );
        cont.insertAdjacentElement ( 'afterbegin', this.createElement ( 'div', 'btn', { attribute : 'data-nums', param : '=' } ) );
        cont.insertAdjacentElement ( 'afterbegin', this.createElement ( 'div', 'btn', { attribute : 'data-nums', param : 0 } ) );
        cont.insertAdjacentElement ( 'afterbegin', this.createElement ( 'div', 'btn', { attribute : 'data-nums', param : '.' } ) );
        cont.insertAdjacentElement ( 'afterbegin', this.createElement ( 'div', 'btn', { attribute : 'data-nums', param : 3 } ) );
        cont.insertAdjacentElement ( 'afterbegin', this.createElement ( 'div', 'btn', { attribute : 'data-nums', param : 2 } ) );
        cont.insertAdjacentElement ( 'afterbegin', this.createElement ( 'div', 'btn', { attribute : 'data-nums', param : 1 } ) );
        cont.insertAdjacentElement ( 'afterbegin', this.createElement ( 'div', 'btn', { attribute : 'data-nums', param : 6 } ) );
        cont.insertAdjacentElement ( 'afterbegin', this.createElement ( 'div', 'btn', { attribute : 'data-nums', param : 5 } ) );
        cont.insertAdjacentElement ( 'afterbegin', this.createElement ( 'div', 'btn', { attribute : 'data-nums', param : 4 } ) );
        cont.insertAdjacentElement ( 'afterbegin', this.createElement ( 'div', 'btn', { attribute : 'data-nums', param : 9 } ) );
        cont.insertAdjacentElement ( 'afterbegin', this.createElement ( 'div', 'btn', { attribute : 'data-nums', param : 8 } ) );
        cont.insertAdjacentElement ( 'afterbegin', this.createElement ( 'div', 'btn', { attribute : 'data-nums', param : 7 } ) );
        cont.insertAdjacentElement ( 'afterbegin', this.createElement ( 'div', 'btn', { attribute : 'data-nums', param : 'C' } ) );
        cont.insertAdjacentElement ( 'afterbegin', this.createElement ( 'div', 'btn', { attribute : 'data-nums', param : '-' } ) );
        cont.insertAdjacentElement ( 'afterbegin', this.createElement ( 'div', 'btn', { attribute : 'data-nums', param : '+' } ) );
        this.$container.append ( cont );
        this.$container.append ( this.createElement ( 'div', 'historyLogs' ) );
        return this.$container;
    }

    createElement ( elem, className, attr = null, ) {
        let res = document.createElement ( elem );
        res.classList.add ( className );
        if ( attr !== null ) {
            let { attribute, param } = attr;
            res.setAttribute ( attribute, param );
            res.textContent = param;
            return res;
        } else return res;
    }

    enterDigit ( e ) {
        const { target } = e;

        if ( !target.classList.contains ( 'btn' ) ) return;
        ( target.dataset.nums !== 'log' ) ? this.logs.textContent += target.dataset.nums : ' ';
        switch ( target.dataset.nums ) {
            case "C":
                this.$input.value = '';
                this.act.act = null;
                this.act.firstDigits = null;
                this.act.secondDigits = 0;
                this.logs.textContent = '';
                break;
            case "+":
            case "-":
                this.setSecondDigit ();
                this.setFirstDigit ();
                this.act.act = target.dataset.nums;
                this.$input.value = '';
                break;

            case "=":
                this.setSecondDigit ();
                this.calculate ( this.act );
                this.logs.textContent += this.$input.value;
                this.act.act = null;
                break;

            default:
                this.$input.value += target.dataset.nums;
        }
    }

    setFirstDigit () {
        if ( this.act.firstDigits === null ) {
            this.act.firstDigits = this.$input.value;
        } else {
            this.calculate ( this.act );
        }
    }

    setSecondDigit () {
        if ( this.act.act !== null ) {
            this.act.secondDigits = this.$input.value;
        }
    }

    isNan () {
        ( isNaN ( this.$input.value ) ) ? this.$input.value = "Ошибочные данные" : this.$input.value;
    }

    calculate ( { firstDigits, secondDigits, act } ) {
        switch ( act ) {
            case "+":
                this.$input.value = parseFloat ( firstDigits ) + parseFloat ( secondDigits );
                break;
            case "-":
                this.$input.value = parseFloat ( firstDigits ) - parseFloat ( secondDigits );
                break;
        }
        this.$input.value = parseFloat ( this.$input.value ).toFixed ( 2 );
        this.isNan ();
        this.act.firstDigits = this.$input.value;
    };
}


new Calculator ( options ).init ();
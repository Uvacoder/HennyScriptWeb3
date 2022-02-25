"use strict";
/**
 *
 * @param selector ID or class of the element you want to return
 * @returns HTMLElement of given selector
 */
const get = (selector) => {
    return window.document.querySelector(selector);
};
/**
 *
 * @param selector ID or class of the element you want to return
 * @returns All HTMLElements of given selector
 */
const getAll = (selector) => {
    return window.document.querySelectorAll(selector);
};
/**
 *
 * @param callback The function you want to run after the delay
 * @param timeout The amount of time for the delay
 */
const delay = (callback, timeout) => setTimeout(callback, timeout);
/**
 *
 * @param handler The function you want to run after the delay
 * @param timeout The amount of between loops
 */
const loop = (handler, timeout) => setInterval(handler, timeout);
/**
 *
 * @param handler The number of the loop or the variable that is used to start the loop
 */
const endLoop = (handler) => clearInterval(handler);
/**
 *
 * @param handler The number of the delay or the variable that is used to start the delay
 */
const endDelay = (handler) => clearTimeout(handler);
/**
 *
 * @param elementSelector ID or class of the element you want to add the listener to.
 * @param type Type of event to listen for ex: 'click'
 * @param callback The function you want to run when the event is triggered
 */
const listen = (elementSelector, type, callback) => get(elementSelector)?.addEventListener(type, callback);
/**
 *
 * @param array The array you want to sory
 * @returns The array sorted by number value
 */
const numberSort = (array) => array.sort((a, b) => +a - +b);
/**
 *
 * @param array The array you want to filter
 * @param valueToFilterOut The value to filter out
 * @returns The array without the filtered value
 */
const filterOut = (array, valueToFilterOut) => array.filter((element) => element !== valueToFilterOut);
Object.defineProperty(Array.prototype, "toWords", {
    value: function () {
        return [].concat(this).join("");
    },
});
Object.defineProperty(Array.prototype, "add", {
    value: function (value) {
        return [...this, value];
    },
});
Object.defineProperty(Array.prototype, "log", {
    value: function () {
        console.log(this);
    },
});
Object.defineProperty(Number.prototype, "log", {
    value: function () {
        console.log(this);
    },
});
Object.defineProperty(String.prototype, "log", {
    value: function () {
        console.log(this);
    },
});
Object.defineProperty(String.prototype, "reverse", {
    value: function () {
        return this.split("").reverse().join("");
    },
});
Object.defineProperty(Number.prototype, "reverse", {
    value: function () {
        return Number(this.toString().split("").reverse().join(""));
    }
});
Object.defineProperty(String.prototype, "capitalize", {
    value: function () {
        return this.toUpper();
    }
});
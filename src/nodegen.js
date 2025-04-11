Element.prototype.__append = Element.prototype.append;
Element.prototype.append = function (...items) {
    if (items === undefined) return this;

        this.__append(...items);

    return this;
}

Element.prototype.addClass = function (classList) {
    if (classList === undefined) {
        return this;
    }

    if (classList.constructor === Array) {
        this.classList.add(...classList)
    } else {
        this.classList.add(classList)
    }

    return this;
}

Element.prototype.addText = function (text) {
    if (text === undefined || text === "") return this;

    this.textContent = text;
    return this;
}

/**
 * 
 * @param {Array} items 
 * @returns 
 */
// Element.prototype.push = function (items) {
//     if (items === undefined) return this;

//     if (items.constructor === Array) {
//         this.append(...items);
//     } else {
//         this.appendChild(items);
//     }

//     return this;
// }

/**
 * 
 * @param {string[]} classList - Valid CSS class names
 * @returns 
 */
const mkdiv = (classList) => document.createElement("div").addClass(classList);

/**
 * 
 * @param {string} text - paragraph text
 * @param {string[]} classList - valid css classes
 * @returns 
 */
const mp = (text, classList) => document.createElement("p").addText(text).addClass(classList);


/**
 * 
 * @param {string[]} items 
 * @returns 
 */
const mlist = (...items) => {
    const elem = document.createElement("ul");
    const children = Array.from(items, item => {
        let element = document.createElement("li");
        if (typeof element === "string") {
            element.textContent = item;
        } else {
            element.appendChild(item);
        }
        element.classList.add("no-bullet");

        return element;
    });

    elem.append(...children);

    return elem;
};

// const ng = {mdiv, mp, mlist};
export { mkdiv, mp, mlist }
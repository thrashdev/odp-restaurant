"use strict";
import "./styles.css";
import steakImage from '../assets/pan-grilled-steak.webp';
// import { ng } from "./nodegen.js";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { mkdiv } from "./nodegen.js";
import { contact } from "./contact.js";

function setContent(moduleName) {
    const content = document.getElementById("content");
    let module;
    switch (moduleName) {
        case "home":
            module = home;
            break;
        case "menu":
            module = menu;
            break;
        case "contact":
            module = contact;
            break;
        default:
            module = home;
    }
    
    return () => content.replaceChildren(module);
}

const pageTitle = document.createElement("h1");
pageTitle.textContent = "Larry's steakhouse";
const mainContainer = mkdiv("container").append(mkdiv("header-container"));
const header = document.createElement("header");
header.id = "header";

header.append(pageTitle);

document.body.appendChild(mainContainer);
document.querySelector(".header-container").appendChild(header);

const nav = document.createElement("nav");
nav.id = "nav-content";

const btnHome = document.createElement("button").addClass("btn-content");
const btnMenu = document.createElement("button").addClass("btn-content");
const btnContact = document.createElement("button").addClass("btn-content");

btnHome.textContent = "Home";
btnMenu.textContent = "Menu";
btnContact.textContent = "Contact";


nav.append(btnHome, btnMenu, btnContact);

const steak = document.createElement("img");
steak.src = steakImage;

header.prepend(steak);
header.append(nav);

const content = mkdiv();
content.id="content";

mainContainer.append(content);

btnHome.addEventListener("click", setContent("home"));
btnMenu.addEventListener("click", setContent("menu"));
btnContact.addEventListener("click", setContent("contact"));

// const content = document.getElementById("content");
setContent("contact")();


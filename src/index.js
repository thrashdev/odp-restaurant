"use strict";
import "./styles.css";
import steakImage from '../assets/pan-grilled-steak.webp';

const steak = document.createElement("img");
steak.src = steakImage;

const header = document.getElementById("header");
header.prepend(steak);


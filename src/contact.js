import { mkdiv, mlist, mp } from "./nodegen";

const contact = mkdiv("container").append(
    mlist(
        mp("Email: abc@txt.com", "menu-item"),
        mp("PhoneNumber: +7777333777", "menu-item"),
        mp("Address: funny lane 37 boulevard, chicago", "menu-item"),
    ),
);

export {contact}
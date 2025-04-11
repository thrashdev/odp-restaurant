import { mkdiv, mp, mlist } from "./nodegen";

const menu = mkdiv("content-container").append(
    mlist(
        mkdiv("menu-item").append(mp("Tasty Lasagna", "menu-item-title")),
        mkdiv("menu-item").append(mp("Beef Steak", "menu-item-title")),
        mkdiv("menu-item").append(mp("Lamb chops", "menu-item-title")),
        mkdiv("menu-item").append(mp("Port belly", "menu-item-title")),
    ),
)

menu.name = "menu";

export { menu };
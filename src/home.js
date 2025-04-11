import { mkdiv, mlist, mp } from "./nodegen";

const home = mkdiv(["content-container"]);

home.append(
    mkdiv("home-background").append(
        mp("Hello, I'm bob"),
        mp("I like meat"),
        mp("this is my store"),
    )
);

home.name = "home";

export { home };
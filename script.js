import van from "./van.js";
import {animate, stagger} from "./anime.esm.min.js";
import * as ui from "./ui.js";
import * as animation from "./animation.js"
const { div, h1, p, button , li, a, img} = van.tags
const app = div({ id: "app" });

van.add(document.body, app, 
ui.rectangle1, 
ui.rectangle2,
ui.title,
ui.why,
ui.createButtonGroup
);
animation.animateNow()


import van from "./van.js";
const { div, h1, p, button , li, a, img} = van.tags
export function githubRedirect() {window.location.assign("https://github.com/NevilleCentipede");}
export function websiteRedirect() {window.location.assign("https://github.com/NevilleCentipede");}
// 2. Elements Configuration
export const createButtonGroup = div({class: "container", style: "margin-down: 10px;"},
  button({onclick: githubRedirect}, "github"),
  button({onclick: githubRedirect}, "website"),
  button({onclick: githubRedirect}, "github")
)
/*Title*/
export const title = h1({ style: "margin-top: 1px; text-align: center;" },
"Flat code, Procedural, functional style, Vanjs + animejs")
/*why use it paragraphs*/
export const why = div({ style: "text-align: center;" },
    p("why should one use it?"),
    p("1. It is light"),
    p("2. It works very fast"),
    p("3. It isn't bloated"),
    p("4. It is easy"),
    p("5. It does not use any framework that uses a code of conduct, which I call code of leftists"),
    p("6. It is fully open source")
    )
/*Rectangles*/
export const rectangle1 = img({class: "rectangle2", src:"rectangle-svgrepo-com.svg", style: "margin-top: 50px"});  
export const rectangle2 = img({class: "rectangle2", src:"rectangle-svgrepo-com.svg"});



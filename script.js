const { div, h1, p, button } = van.tags
// 1. State
const score = van.state(0)
// 2. Elements Configuration
const app = div({ id: "app" })
const btn1 = button({ onclick: hello}, "Add Point")
const title = h1({ style: "margin-top: 50px;" },"Flat & Procedural")
function hello(){alert("a")}
app.append(btn1)
app.append(title)
van.add(document.body, app)// 5. Mount

const { div, h1, p, button } = van.tags
// 1. State
const score = van.state(0)
// 2. Elements Configuration
const app = div({ id: "app" })
const title = h1("Flat & Procedural")
function hello(){alert("a")}
const btn1 = button({ onclick: hello}, "Add Point")
app.append(btn1)
app.append(title)
van.add(document.body, app)// 5. Mount


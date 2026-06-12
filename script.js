const { div, h1, p, button } = van.tags
// 1. State
const score = van.state(0)
// 2. Elements Configuration
const app = div({ id: "app" })
const title = h1("Flat & Procedural")
app.append(title)
function handleIncrement() {// 3. Logic (Completely detached from the element declaration)
  ++score.val
}
const incrementBtn = button({ onclick: handleIncrement }, "Add Point")// 4. Layout (Passed as a flat property reference)
app.append(incrementBtn)
van.add(document.body, app)// 5. Mount

var prev = null;
const inter = setInterval(() => {
    scrollTo(0, document.body.scrollHeight)
    if (prev == document.body.scrollHeight) {
        clearInterval(inter);
        console.warn("SCROLLED TO BOTTOM");
    }
    prev = document.body.scrollHeight;
}, 1500);
window.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
        clearInterval(inter);
        throw new Error("script stopped")
    }
}, { once: true })
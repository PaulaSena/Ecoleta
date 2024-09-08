


const buttonSearch = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a") //não esquece .

buttonSearch.addEventListener("click", () => {
    modal.classList.remove("hide") //toggle -remove
})

close.addEventListener("click", () => {
    modal.classList.add("hide")
})
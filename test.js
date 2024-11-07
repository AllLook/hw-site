const div = document.createElement("div")
div.innerHTML = "Материал на сайте указан для ознакомительных и учебных целей"
div.classList.add("alert", "alert-primary")
div.setAttribute("role", "alert");
document.body.appendChild(div)
setTimeout(() => {document.body.removeChild(div)}, 10000)
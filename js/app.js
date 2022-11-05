const loader = document.getElementById('loader')

window.onload = function () {
    loader.classList.add('active-loader')
    setTimeout(() => {
        loader.classList.remove('active-loader')
    }, 6500)
}

let category = document.getElementById("category")
let blogUl = document.getElementById("blog-ul")
category.onclick = function () {
    blogUl.classList.toggle("active-ul")
}

const form = document.getElementById("form")
const name1 = document.getElementById("name")




// form.addEventListener('submit', (e) => {
//     let messages = []
//     if (name.value === "" | name.value == null) {
//         messages.push("not empty")
//     }
// })


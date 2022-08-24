
const navIcons = document.getElementsByTagName("a")
const buttons = document.getElementsByClassName("btn")
const logo = document.getElementsByTagName("img")[0]

//window.addEventListener('load', () => {
//    alert("Page is fully loaded")
//})

logo.addEventListener('click', () => {
    alert("Welcome to our webpage!")
})

Array.from(navIcons).forEach(ele => {
    ele.addEventListener('mouseover', () => {
        ele.style.textDecoration = "underline"
    })

    ele.addEventListener('mouseout', () => {
        ele.style.textDecoration = "none"
    })
})

Array.from(buttons).forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.boxShadow = "0px 0px 25px white"
    })

    button.addEventListener('mouseout', () => {
        button.style.boxShadow = "none"
    })
})
'use strict'
let change = true;
const Clock = document.getElementById("Clock");
const RedButt = document.getElementById("Red")
const Dateh = document.getElementById("Dateh")

function redbut(){
    RedButt.style.height = "1px"
    setTimeout(()=>{
        RedButt.style.height = "8px"
    }, 500)

    if(change){
        Dateh.style.display = "flex"
        Clock.style.display = "none"
        change = false
    }else{
        Dateh.style.display = "none"
        Clock.style.display = "flex"
        change = true
    }

}

const year = new Date().getFullYear()
const month = new Date().getMonth()
const day = new Date().getDay()

Dateh.textContent = `${year}/${month}/${day}`

setInterval(()=>{
    const hour = new Date().getHours().toString().padStart(2, '0')
    const min = new Date().getMinutes().toString().padStart(2, '0')
    const sec = new Date().getSeconds().toString().padStart(2, '0')
    Clock.textContent = `${hour}:${min}:${sec}`
}, 1000)
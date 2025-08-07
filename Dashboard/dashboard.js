let Wpage = document.getElementById('wp');
let Npage = document.getElementById('np');
let Tpage = document.getElementById('tp');
let Stask = document.getElementById('st');
let Mpage = document.getElementById('mc');
let Ebuttom = document.getElementById('eb')
let ul = document.getElementById('Ulist')
let TaskNum = 0;


function but1() {
    Wpage.style.boxShadow = "0px 4px 10px black";
    Wpage.style.scale = "1.1";
    setTimeout(()=> {Wpage.style.transform = "translateX(-600px)"},1000);
    setTimeout(()=> {Wpage.style.opacity  = "0"},1300);
    setTimeout(()=> {Wpage.style.display  = "none"},3000);
    setTimeout(()=> {Npage.style.display = "flex"},3000);
    setTimeout(()=> {Npage.style.opacity = "1"},3100);
}

function but2() {
    Wpage.style.boxShadow = "0px 4px 10px black";
    Wpage.style.scale = "1.1";
    setTimeout(()=> {Wpage.style.transform = "translateX(-600px)"},1000);
    setTimeout(()=> {Wpage.style.opacity  = "0"},1300);
    setTimeout(()=> {Wpage.style.display  = "none"},3000);
    setTimeout(()=> {Tpage.style.display = "flex"},3000);
    setTimeout(()=> {Tpage.style.opacity = "1"},3100);
}


function but3() {
    Wpage.style.boxShadow = "0px 4px 10px black";
    Wpage.style.scale = "1.1";
    setTimeout(()=> {Wpage.style.transform = "translateX(-600px)"},1000);
    setTimeout(()=> {Wpage.style.opacity  = "0"},1300);
    setTimeout(()=> {Wpage.style.display  = "none"},3000);
    setTimeout(()=> {Npage.style.display = "flex"},3000);
    setTimeout(()=> {Npage.style.opacity = "1"},3100);
}

function Addtask() {
    let Task = document.getElementById('Task').value;
    if(Task.trim() == ""){
        return
    }else{
        const li = document.createElement("li");
        li.textContent = `${Task}`;
        ul.appendChild(li);
    }
        
}

function fulltask() {
    Stask.style.zIndex = "3";
    Stask.style.position = "absolute";
    Tpage.style.animation = "notepage infinite ease";
    Stask.style.width = "600px";
    Mpage.style.backgroundColor = "rgb(2, 15, 15)";
    Tpage.style.border = "none";
    Ebuttom.style.display = "flex"
}

function Escape() {
    Stask.style.zIndex = "3";
    Stask.style.position = "relative";
    Tpage.style.animation = "notepage infinite 4s ease";
    Stask.style.width = "60%";
    Mpage.style.backgroundColor = "rgb(30, 196, 196)";
    Tpage.style.border = "border: 3px solid white;";
    Ebuttom.style.display = "none"
}

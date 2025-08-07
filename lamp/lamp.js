let on = false;
let range = document.getElementById("ran")
let hour = new Date().getHours();

if(hour > 19 || hour < 6){
    document.getElementById("li").style.opacity = '1';
    document.getElementById('si').style.boxShadow = `50px -30px 10px black`
    document.getElementById('bi').style.boxShadow = `50px -30px 10px black`
    on = true
}

function clickam() {
    if(on == true){
        document.getElementById("li").style.opacity = '0';
        document.getElementById('si').style.boxShadow = 'none'
        document.getElementById('bi').style.boxShadow = 'none'
        on = false
    } else{
        document.getElementById("li").style.opacity = '1';
        document.getElementById('si').style.boxShadow = `50px -30px 10px black`
        document.getElementById('bi').style.boxShadow = `50px -30px 10px black`
        on = true
    }
}

function adjust() {
    document.getElementById("li").style.opacity = `${range.value / 100}`;
    document.getElementById('si').style.boxShadow = `${range.value}px -${range.value}px 10px black`
    document.getElementById('bi').style.boxShadow = `${range.value}px -${range.value}px 10px black`
}






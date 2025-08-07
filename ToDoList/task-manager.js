let task = document.getElementById('inputID');
const submit = document.getElementById('sub');
const changebut = document.getElementById('taskbut');
let editTask = document.getElementById('editinput');
let tasknum = 0;
let editnum = 0;

function addtask() {
    tasknum++;
    if(tasknum > 5){
        window.alert("you can add only five tasks")
    }
    document.getElementById(`task${tasknum}`).textContent = `${task.value} .${tasknum}`;
    document.getElementById(`edit${tasknum}`).style.display = 'block'
    document.getElementById('alert').style.display = 'none'; 
    switch(tasknum){
        case 1 :
            document.getElementById('taskD').style.display = 'flex';
            break;
        case 2 :
            document.getElementById('taskD1').style.display = 'flex';
            break;
        case 3 :
            document.getElementById('taskD2').style.display = 'flex';
            break;
        case 4 :   
            document.getElementById('taskD3').style.display = 'flex';
            break;
        case 5 :
            document.getElementById('taskD4').style.display = 'flex';
            break;

    }
   
}

function viewtask() {
    
    if(tasknum === 0){
        document.getElementById('alert').style.marginLeft = '170px';
        document.getElementById('alert').style.marginTop = '50px';
        document.getElementById('alert').style.fontSize = '50px';
        document.getElementById('alert').style.position = 'absolute';
        document.getElementById('alert').textContent = "EMPTY...";
    }
    document.getElementById('view-task').style.display = 'block';
    setTimeout(() => {
        document.getElementById('view-task').style.width = '500px';
        document.getElementById('view-task').style.opacity = '1';
        document.getElementById('editPL').style.height = '0';
    }, 10)
}

function closetask() {
    setTimeout(() => {
        document.getElementById('view-task').style.width = '0';
        document.getElementById('view-task').style.opacity = '0';
        document.getElementById('editPL').style.height = '0'
        document.getElementById('editPL').style.display = 'none';
        document.getElementById('editPL').style.marginTop = '-11%'
    }, 10)
}

function deletetask() {
    document.getElementById(`task${tasknum}`).textContent = '';
    document.getElementById(`edit${tasknum}`).style.display = 'none';
    tasknum--;
    if(tasknum === 0){
        document.getElementById('alert').style.display = 'block';
        document.getElementById('taskD').style.display = 'none';
        document.getElementById('taskD1').style.display = 'none';
        document.getElementById('taskD2').style.display = 'none';
        document.getElementById('taskD3').style.display = 'none';
        document.getElementById('taskD4').style.display = 'none';
    }
}


function editPlace1() {
    document.getElementById('editPL').style.display = 'flex';
    document.getElementById('editPL').style.height = '150px'
    document.getElementById('editPL').style.opacity = '1';
    document.getElementById('editPL').style.zIndex = '1'
    document.getElementById('editPL').style.marginTop = '0.5%'
    editnum = 1;
}

function editPlace2() {
    document.getElementById('editPL').style.display = 'flex';
    document.getElementById('editPL').style.height = '150px'
    document.getElementById('editPL').style.opacity = '1';
    document.getElementById('editPL').style.zIndex = '1'
    document.getElementById('editPL').style.marginTop = '0.5%'
    editnum = 2;
}

function editPlace3() {
    document.getElementById('editPL').style.display = 'flex';
    document.getElementById('editPL').style.height = '150px'
    document.getElementById('editPL').style.opacity = '1';
    document.getElementById('editPL').style.zIndex = '1'
    document.getElementById('editPL').style.marginTop = '0.5%'
    editnum = 3;
}

function editPlace4() {
    document.getElementById('editPL').style.display = 'flex';
    document.getElementById('editPL').style.height = '150px'
    document.getElementById('editPL').style.opacity = '1';
    document.getElementById('editPL').style.zIndex = '1'
    document.getElementById('editPL').style.marginTop = '0.5%'
    editnum = 4;
}

function editPlace5() {
    document.getElementById('editPL').style.display = 'flex';
    document.getElementById('editPL').style.height = '150px'
    document.getElementById('editPL').style.opacity = '1';
    document.getElementById('editPL').style.zIndex = '1'
    document.getElementById('editPL').style.marginTop = '0.5%'
    editnum = 5;
}



function subedit() {
    document.getElementById(`task${editnum}`).textContent = `${editTask.value} .${editnum}`;
    document.getElementById('editPL').style.opacity = '0';
    document.getElementById('editPL').style.marginTop = '-11%'
    document.getElementById('editPL').style.height = '0'
}   



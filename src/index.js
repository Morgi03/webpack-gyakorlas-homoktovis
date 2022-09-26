import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';


function bogyoskatt(){
    let clicknum = document.getElementById('bogyoscaption').textContent;
    if (clicknum == "") {
        clicknum = 1;
        document.getElementById('bogyoscaption').innerHTML = clicknum;
    } else {
        clicknum++;
        document.getElementById('bogyoscaption').innerHTML = clicknum;
    }
}

function parlatkatt(){
    let clicknum = document.getElementById('parlatoscaption').textContent;
    if (clicknum == "") {
        clicknum = 1;
        document.getElementById('parlatoscaption').innerHTML = clicknum;
    } else {
        clicknum++;
        document.getElementById('parlatoscaption').innerHTML = clicknum;
    }
}

function szaritottbogyoskatt(){
    let clicknum = document.getElementById('szaritottbogyoscaption').textContent;
    if (clicknum == "") {
        clicknum = 1;
        document.getElementById('szaritottbogyoscaption').innerHTML = clicknum;
    } else {
        clicknum++;
        document.getElementById('szaritottbogyoscaption').innerHTML = clicknum;
    }
}

function szaritotttorlemenyeskatt(){
    let clicknum = document.getElementById('szaritotttorlemenyescaption').textContent;
    if (clicknum == "") {
        clicknum = 1;
        document.getElementById('szaritotttorlemenyescaption').innerHTML = clicknum;
    } else {
        clicknum++;
        document.getElementById('szaritotttorlemenyescaption').innerHTML = clicknum;
    }
}
function szinvaltas(e){
    let szin = e.currentTarget.value;
    document.getElementById('h2headermasodikoldal').style.backgroundColor = szin;
}

function init(){
    document.getElementById('bogyos').addEventListener('click',bogyoskatt);
    document.getElementById('parlat').addEventListener('click',parlatkatt);
    document.getElementById('szaritottbogyo').addEventListener('click',szaritottbogyoskatt);
    document.getElementById('szaritotttorlemeny').addEventListener('click',szaritotttorlemenyeskatt);
    document.getElementById('szin').addEventListener('input',szinvaltas);
}

document.addEventListener('DOMContentLoaded', init);

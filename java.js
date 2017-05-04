/**
 * Created by Ucenik on 4.5.2017..
 */
var x = document.getElementById("dodavanje");
x.style.display="none";

function myFunction() {
    if(x.style.display === "none"){
        x.style.display = "block";
        document.getElementById("gumb").innerHTML = "Hide";
    }else{
        x.style.display = "none";
        document.getElementById("gumb").innerHTML = "Show";
    }
}

function dodaj() {
    var para = document.createElement("p");
    var node = document.createTextNode(document.getElementById("tekst").value);
    para.appendChild(node);
    var element = document.getElementById("ptag");
    element.appendChild(para);
    document.getElementById("tekst").value="";
}

function bojatron() {
    var boja = document.getElementById("bojica").value;
    var divide = document.getElementById("ptag");
    divide.style.color = boja;
    document.getElementById("sir").innerHTML=boja;
    document.getElementById("bojica").value="";
}

function widith() {
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    document.getElementById("visina").innerHTML = h;
    document.getElementById("sirina").innerHTML = w;
}

function noviprozor() {
    window.open("https://www.google.hr/","_blank","width=420,height=420")
}
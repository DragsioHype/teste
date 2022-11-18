$(document).ready(function (){
    var el = document.getElementById('suicida');
    var passos=
    [
        {
            "name":"Passo1",
            "content":"Teste",
            "img":"hg.jpg"
        },
        {
            "name":"Passo2",
            "content":"Teste2",
            "img":"ard.jpeg"
        }
    ];
    var content='';
    for (i= 0; i<passos.length;i++){
        content+="<div id='img' ><img alt='imgs"+i+"' width='100%' height='auto' src='"+ passos[i].img +"' style='border: 2px solid black'></div>";
        content+="<div id='desc' style='color:black;width:50%;'><h1>"+passos[i].name + "</h1><br>";
        content+="<p>"+passos[i].content+"</p></div>";
    }
    el.innerHTML = content;
    }
)
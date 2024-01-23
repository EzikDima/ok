document.getElementById("btn1").addEventListener("click", func1);
    
function func1() {
  let newDiv = document.createElement("div");
 let newContent = document.createTextNode("Это div1");
  newDiv.appendChild(newContent);
  
  let currentDiv = document.getElementById("div1"); 
  currentDiv.appendChild(newDiv);
}
document.getElementById("btn2").addEventListener("click", func2);

function func2() {
  let newP = document.createElement("p");
  let newContent = document.createTextNode("Это p2");
  newP.appendChild(newContent);
  
  let currentDiv = document.getElementById("div2"); 
 currentDiv.appendChild(newP);
}
document.getElementById("btn3").addEventListener("click", func3);

function func3() {
  let newImg = document.createElement("img");
  newImg.setAttribute("alt", "Это img3");
  
  let currentDiv = document.getElementById("div3"); 
  currentDiv.appendChild(newImg);
}
document.getElementById("btn4").addEventListener("click", func4);

function func4() {
  let newUl = document.createElement("ul");
  let newContent = document.createTextNode("Это ul4");
  newUl.appendChild(newContent);
  
  let currentDiv = document.getElementById("div4"); 
 currentDiv.appendChild(newUl);
}
document.getElementById("btn5").addEventListener("click", func5);

function func5() {
    let li = document.createElement("li");
    let text = document.createTextNode("Это li5");
    li.appendChild(text);
  
    let div5 = document.getElementById("div5");
    div5.appendChild(li);
  }
  document.getElementById("btn6").addEventListener("click", func6);

function func6() {
  let table = document.createElement("table");
  let text = document.createTextNode("Это table6");
  table.appendChild(text);

  let div6 = document.getElementById("div6");
  div6.appendChild(table);
}
document.getElementById("btn7").addEventListener("click", func7);

function func7() {
    let tr = document.createElement("tr");
    let text = document.createTextNode("Это tr7");
    tr.appendChild(text);
  
    let div7 = document.getElementById("div7");
    div7.appendChild(tr);
  }
  document.getElementById("btn8").addEventListener("click", func8);

  function func8() {
    let td = document.createElement("td");
    let text = document.createTextNode("Это td8");
    td.appendChild(text);
  
    let div8 = document.getElementById("div8");
    div8.appendChild(td);
  }


  document.getElementById("btn9").addEventListener("click", func9);

function func9() {
  let h = document.createElement("H1");
  let t = document.createTextNode("Это h19");
  h.appendChild(t);
  document.getElementById("div9").appendChild(h);
}
document.getElementById("btn10").addEventListener("click", func10);

function func10() {
  let s = document.createElement("SPAN");
  let t = document.createTextNode("Это span10");
  s.appendChild(t);
  document.getElementById("div10").appendChild(s);
}

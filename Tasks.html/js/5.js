let item = document.getElementById('item1');
item.remove();

let sp1 = document.createElement("div");
sp1.setAttribute("id", "newSpan");

let sp1_content = document.createTextNode("Canned Fish x 4");
sp1.appendChild(sp1_content);
let sp2 = document.getElementById("item2");
let parentDiv = sp2.parentNode;
parentDiv.replaceChild(sp1, sp2);

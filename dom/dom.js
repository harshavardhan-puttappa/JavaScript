// console.dir(document);
// console.log(document.domain);
// console.log(document.doctype);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.all);
// document.title = "New title";
// document.all[10].textContent = "New title";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//* GET ELEMENTS BY ID //
// let headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// headerTitle.textContent = "Text Title";
// headerTitle.innerText = "Inner Title";
// headerTitle.innerHTML = "<h3>Header 3</h3>";
// console.log(headerTitle);
// headerTitle.style.borderBottom = "1px solid #000";

// * GET ELEMENTS BY CLASS NAME
// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[0]);
// items[0].textContent = "Hello 0";
// items[0].style.fontWeight = "bold";
// items[0].style.backgroundColor = "yellow";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "grey";
// }
//* GET ELEMENTS BY TAG NAME
// let li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "pink";
// }

//* QUERY SELECTOR
// var header = document.querySelector("#main-header");
// header.style.borderBottom = "3px solid red";

// var input = document.querySelector("input");
// input.value = "input field";

// var submit = document.querySelector("input[type='submit']");

// submit.value = "SEND";

// var item = document.querySelector(".list-group-item");
// item.style.color = "red";

// var lastitem = document.querySelector(".list-group-item:last-child");
// lastitem.style.color = "green";

// var nthitem = document.querySelector(".list-group-item:nth-child(2)");
// nthitem.style.color = "coral";

//* QUERY SELECTOR ALL
// var titles = document.querySelectorAll(".title");
// console.log(titles);
// titles[0].textContent = "hello";

// var odd = document.querySelectorAll("li:nth-child(odd)");
// var even = document.querySelectorAll("li:nth-child(even)");

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";
//   even[i].style.backgroundColor = "#ccc";
// }

// * Traversing the DOM
let itemList = document.querySelector("#items");
//console.log(itemList);

//* parentNode
// console.log(itemList.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";

//* parentElement
// console.log(itemList.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);
// itemList.parentElement.style.backgroundColor = "#ccc";

//* childNodes
//console.log(itemList.childNodes);

//* children
// console.log(itemList.children);
// console.log(itemList.children[0]);
// itemList.children[2].style.color = "coral";
// itemList.children[1].style.backgroundColor = "yellow";

//* firstChild
// console.log(itemList.firstChild);

//* firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "hello 1";
// itemList.firstElementChild.style.color = "red";

//* lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = "hello 4";
// itemList.lastElementChild.style.color = "brown";

//* nextSibling & nextElementSibling
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);

//* previousSibling and previousElementSibling
// console.log(itemList.previousSibling);
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = "green";

//* create element
// var newDiv = document.createElement("div");

// //* Add class
// newDiv.className = "hello";

// //* Add id
// newDiv.id = "hello1";

// //* Add attribute
// newDiv.setAttribute("title", "hello title");

// //*Create Text node
// var divText = document.createTextNode("Hello world");

// //*Append child
// newDiv.appendChild(divText);

// const cont = document.querySelector("header .container");
// const h1 = document.querySelector("header h1");

// //* Add element to the DOM
// cont.insertBefore(newDiv, h1);

// newDiv.style.fontSize = "30px";

//* Adding Evend handlers/listeners

//document.getElementById("button").addEventListener("click",
//buttonClick);

//function buttonClick(e) {
//   console.log("button clicked");
//   document.getElementById("header-title").textContent = "changed";
//   document.querySelector("#main").style.backgroundColor = "#ccc";
//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.className);
//   var output = document.getElementById("output");
//   output.innerHTML = "<h1>" + e.target.id + "</h1>";
//   console.log(e.type);
//   console.log(e.clientX);
//   console.log(e.clientY);
//   console.log(e.offsetX);
//   console.log(e.offsetY);
//   console.log(e.altKey);
//}

var button = document.getElementById("button");
var box = document.getElementById("box");
//button.addEventListener("click", runEvent);
//button.addEventListener("dblclick", runEvent);
//button.addEventListener("mouseup", runEvent);
//button.addEventListener("mousedown", runEvent);

//box.addEventListener("mouseenter", runEvent);
//box.addEventListener("mouseleave", runEvent);
//box.addEventListener("mouseover", runEvent);
//box.addEventListener("mouseout", runEvent);
box.addEventListener("mousemove", runEvent);

var output = document.getElementById("output");

function runEvent(e) {
  console.log("Event Type:" + e.type);
  // output.innerHTML = "<h1>XLocation:" + e.offsetX + "</h1>" + "<h1>YLocation:" + e.offsetY + "</h1>";

  box.style.backgroundColor = "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
}

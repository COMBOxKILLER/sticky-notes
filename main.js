var container2 = document.getElementsByClassName("container2")[0];
var container3 = document.getElementsByClassName("container3")[0];
let checkIcon = document.getElementById("check-icon");
let xIcon = document.getElementById("x-icon");
let i = 0;



var btn0 = document.getElementById("button0");
var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
const customContextMenu = document.querySelector(".custom-context-menu");

xIcon.addEventListener("click", function(){
    typeNote();
})

checkIcon.addEventListener("click", function(){
    createNote();
})

function typeNote(){
    if(container3.style.display == "none"){
        container3.style.display = "block";
    }
    else{
        container3.style.display = "none";
    }
}

function createNote(){
    var noteText = document.getElementById("note-text").value;
    var node0 = document.createElement("div");
    var node1 = document.createElement("h1");

    node1.innerHTML = noteText;

    node1.setAttribute("style", "width:250px; height:250px; font-size:26px; padding:25px; margin-top:10px; overflow:hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)");

    node1.style.margin = margin();
    node1.style.transform = rotate();
    node1.style.background = color();



    node0.appendChild(node1);

    container2.insertAdjacentElement("beforeend", node0);

    node0.addEventListener("mouseenter", function(){
        node0.style.transform = "scale(1.1)";
    })

    node0.addEventListener("mouseleave", function(){
        node0.style.transform = "scale(1)";
    })



    document.getElementById("note-text").value ='';

    node0.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        let topPosition = e.clientY;
        let leftPosition = e.clientX;
        customContextMenu.classList.add("active");

        customContextMenu.style.left = leftPosition + "px";
        customContextMenu.style.top = topPosition + "px";
      });

      window.addEventListener("click", () => {
        customContextMenu.classList.remove("active");
      });

      btn2.addEventListener("click", function(){
        node0.remove()

    });

    btn1.addEventListener("click", function() {
        node1.contentEditable = true;
      } );
   


      btn0.addEventListener("click", function() {
        node1.contentEditable = false;
      } )
}


function margin(){
    var random_margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];

    return random_margin[Math.floor(Math.random()*random_margin.length)];
}

function rotate(){
    let random_rotate = ["rotate(3deg)", "rotate(1deg)", "rotate(-1deg)", "rotate(-3deg)", "rotate(-5deg)", "rotate(-10deg)", ];

    return random_rotate[Math.floor(Math.random()*random_rotate.length)];
}

function color(){
    let random_color = ["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"];

    if(i>random_color.length-1){
        i=0;
    }
    return random_color[i++];
}



dragElement(document.getElementById("button0"));

function dragElement() {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(btn0 + "header")) {
    
    document.getElementById(btn0 + "header").onmousedown = dragMouseDown;
  } else {
    
    btn0.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
   
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
   
    document.onmouseup = null;
    document.onmousemove = null;
  }
}





let leftUpper = document.querySelector(".upper").children;
let input = leftUpper[1].children[0];
input.value = "#878787";
let btn = document.querySelector(".btn-notes");
let rightNotes = document.querySelector(".notesArea");

let textarea = document.querySelector("textarea");

let btn2 = document.querySelector(".buttons");

let emptyMessage = document.querySelector(".notesNotAdded");

let count = 0;


btn.addEventListener("click" , ()=>{
    if(leftUpper[0].value == ""){
        alert("Enter some text");
        return;
    }
    addNotes(leftUpper[0].value, input.value);
    leftUpper[0].value = "";
    document.querySelector(".notesNotAdded").style.display = "none";
    button2 = document.querySelectorAll(".buttons");
    removeNotes();
    if(rightNotes.children.length < 1){
      rightNotes.appendChild(emptyMessage);
  }
  
});

function addNotes(note, color) {
    let div1 = document.createElement("div");
    div1.innerHTML = `<p>${note}</p> <button class="buttons" >X</button>`;
    div1.style.backgroundColor = `${color}`;
    div1.classList.add("card");
    rightNotes.appendChild(div1);
    count++;
    allNotes = document.querySelectorAll(".card");
    console.log("all notes=", allNotes);
    if(rightNotes.children.length < 1){
      rightNotes.appendChild(emptyMessage);
  }
  console.log(count);
}

function removeNotes() {
    btn2 = document.querySelectorAll(".buttons");
    btn2.forEach((val) => {
      val.addEventListener("click", () => {
        val.parentElement.remove();
      });
    });
}
  

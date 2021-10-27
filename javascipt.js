
//create the squares
let boxCount = 16





// create the correct # of squares
function createArena(boxCount) {
    const container = document.querySelector(".container");
  

    for (i = 0 ; i < boxCount**2; i ++) {
        const box = document.createElement("div");
        container.appendChild(box);
        box.className = "box";
        
    }

    // change the CSS to display the # of columns and rows correctly

    container.style.gridTemplateColumns = `repeat(${boxCount}, minmax(0.1px, auto)`;

    container.style.gridAutoRows = "auto";

    }

//the drawing change color
function color() {
const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        
        box.addEventListener("mouseenter", () => {
            box.classList.add("color");
        })
        // box.addEventListener("mouseleave", () => {
        //     box.classList.remove("color");
        // })
    });
}
const button = document.querySelector(".btn");
button.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box)=>{
        box.classList.remove("color");
        box.parentElement.removeChild(box);
    
    
    })
    
    
  

    do {
        boxCount = prompt("Enter how many boxes")
    }
    while (boxCount >100);
    createArena(boxCount);
    color();
    
});


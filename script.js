// // // Make sure there is an element with class "disha" in your HTML
// // let btn1=document.querySelector("#btn1");

// // btn1.onclick=(e) =>{
// //     console.log(e);
// //     console.log("button was clicked");
// //     alert("hello world");
// // };
// // let div = document.querySelector(".disha");
// // div.addEventListener("mouseover", (e) => {
// //     console.log("div was hovered hsandler21");
// // });
// // const divhsandler22 = () => {
// //     console.log("div was hovered hsandler22");
// // };
// // div.addEventListener("mouseover", divhsandler22);
// // div.addEventListener("mouseover", (e) => {
// //     console.log("div was hovered hsandler23");
// // });
// // div.addEventListener("mouseover", (e) => {
// //     console.log("div was hovered hsandler24");
// // });
// // div.removeEventListener("mouseover", divhsandler22);
// let modeButton = document.querySelector("#mode");
// let currentMode = "light";
// modeButton.addEventListener("click", () =>{
// if(currentMode === "light"){
//     currentMode = "dark";
//     document.querySelector("body").style.background = "black";
// } else {
//     currentMode = "light";
    
//     document.querySelector("body").style.background = "white";
// }
// console.log(currentMode);
// });
let boxes = document.querySelectorAll(".box");
let reset_btn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno= true ;//playerX,playerY;

const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
]
const resetgame=()=> {
   turno = true;
   enableBoxes();
   msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        
        if (turno) {
            box.innerText = "o";
            turno = false;
        } else {
            box.innerText = "x";
            turno = true;
        }
        box.setAttribute("disabled", true);
        checkwinner();
    });
});
const disableBoxes=()=> {
    for (let box of boxes) {
        box.disabled = true;
    }
}

    const enableBoxes=()=> {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ""; // Optionally clear the box text on reset
    }
}

     const showwinner=(winner)=> {

    msg.innerText = `congrats! winner is ${winner}`;
    msgcontainer.classList.remove("hide");
}

const checkwinner=()=> {
    for (let pattern of winpattern) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
           
            showwinner(pos1val);
            // Optionally, you can add more logic here to display the winner or stop the game

        }
    }
}
newgamebtn.addEventListener("click", resetgame);
reset_btn.addEventListener("click", resetgame);
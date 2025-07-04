const container=document.querySelector(".container");
const resizeButton=document.getElementById("resize");

function createGrid(number){
    const squareSize=960/number;
    container.innerHTML=''; //this changes wtv was inside and basically empties it;
    for(let i=0;i<number*number;i++){
        const square=document.createElement("div");
        square.classList.add("square");
        square.style.width=`${squareSize}px`;
        square.style.height=`${squareSize}px`;

        square.addEventListener("mouseenter",()=>{
            square.style.backgroundColor=`rgb(${randrgb()},${randrgb()},${randrgb()})`;
        })
        container.appendChild(square);

    }
    

}

function randrgb(){
    return Math.floor(Math.random()*256);
}
resizeButton.addEventListener("click",showPrompt);
function showPrompt(){
    let newSize=parseInt(prompt("enter new grid size: "))
    if(newSize>0 && newSize<200){
        createGrid(newSize);
    }else{
        alert("Please enter valid newSize(less than 200)");
    }
}
createGrid(16);
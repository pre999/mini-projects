 //Rock Paper Scissors Game
//  let rock=document.getElementById("rock");
// rock.addEventListener("mouseClick",()=>{

// })
// let paper=document.getElementById("paper");
// paper.addEventListener("mouseClick",()=>{

// })
// let scissors=document.getElementById("scissors");
// rock.addEventListener("mouseClick",()=>{

// })

let choices=document.querySelectorAll(".choice");
let userScore=0;
let compScore=0;
let score=document.getElementsByClassName("score")
console.log(score);
let user=score[0].querySelector("#user-score");
let comp=score[1].querySelector("#comp-score");
const msg=document.getElementById("msg");


let result;
let playGame=(id)=>{
    console.log("User choice is:", id);
    let compChoice= genCompChoice();
    console.log("Computers choice is:",compChoice);
    if(id==="scissors" && compChoice==="rock" || id==="paper" &&compChoice==="scissors"|| id==="rock" && compChoice==="paper" ){
        result="loose";
        
    }
    else if(id==="scissors" && compChoice==="paper" || id==="rock" && compChoice==="scissors" || id==="paper" && compChoice==="rock"){
        result="win";
        
    }
    else if(id==="scissors" && compChoice==="scissors"||id==="rock" && compChoice==="rock"|| id==="paper" && compChoice==="paper"){
        result="draw";
        
    }
    console.log("You",result);
    if (result=="win"){
        userScore++;
        msg.innerText=`You win!! your ${id} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        msg.style.borderRadius='10%' ;
 
    }
    else if(result=="loose"){
        compScore++;
        msg.innerText=`You loose!! ${compChoice} beats your ${id}`;
        msg.style.backgroundColor="red";
        msg.style.borderRadius='10%' ;

    }
    else{
        msg.innerText="Game was Draw. Play Again.";
        msg.style.backgroundColor="cyan";
        msg.style.borderRadius='10%';
    }
    console.log("User score ",userScore);
    console.log("Comp score ",compScore);
    user.innerText=userScore;
    comp.innerText=compScore;
    
    

}
const genCompChoice=()=>{
    let options=["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);
    return options[index];
    
}
choices.forEach((a)=>{
    console.log(a);
    a.addEventListener("click",()=>{
    let userIn= a.getAttribute("id");
    playGame(userIn);
    
    })
})

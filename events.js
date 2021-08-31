
let counter = 0;
let startButton = document.getElementById("startButton");
let displayCount=document.getElementById("displayCount");
let upgradeLevel1=document.getElementById("upgradeLevel1");


    //CLICK BUTTON AND EXTRA POINTS
startButton.onclick = function(){
    counter ++;
    displayCount.innerHTML=counter;

    if(counter>=60){
    counter +=2;
    upgradeLevel1.innerHTML="NOW YOU KNOCKING WITH BOTH HANDS!!!"; 
    };
    
    if (counter>=80) {
    counter -=2;
    upgradeLevel1.innerHTML=" ";
    }};


    //COUNTDOWN and RESULT
function countdown(){
    // resetButton.disabled=true;
let timeLeft=10;
let downloadTimer=setInterval(() => {
    if(counter>=1){
document.getElementById("cps").innerHTML=timeLeft + " seconds";
timeLeft -=1;
};
    if(timeLeft<=0){
    clearInterval(downloadTimer);
    document.getElementById("cps").innerHTML= "TIME IS UP!"
    if (counter>50){
    //    console.info("COME IN!") ;
      let img=document.createElement("img");
      img.src= "COME IN (1).png";
     let src=document.getElementById("picture");
     src.appendChild(img);



     console.info(img)
    } if (counter<50){
        // console.info("GAME OVER");
        let div=document.querySelector("#cps");
        alert( "GAME OVER" );

    }
    document.getElementById("startButton").disabled = true;   
    // resetButton.disabled=false;
    

}},1000);
}

this.timeLeft=countdown();

function refreshPage(){
    window.location.reload();
} 



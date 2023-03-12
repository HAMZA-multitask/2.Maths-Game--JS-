




//start working on this process flow:-
var playing = false;
var score;

var action;
var timeremaining;

var correctAnswer;

   //  if we click on the start/reset button
     document.getElementById("startreset").onclick = function(){
         
//         if we are playing
         if(playing == true)
             {
//                reload page
                 location.reload();
             }
         else{    // if we are not playing
            
             
             
//             change mode to playing
             playing = true;
             
             score = 0;     // set score to 0
             document.getElementById("scorevalue").innerHTML = score;
             
             
             
//              show countdown box
//       document.getElementById("timeremaining").style.display = "block";
             show("timeremaining");
                  timeremaining = 60;
             document.getElementById("timeremainingvalue").innerHTML = timeremaining;
             
             //hide gameover box:-
             hide("gameOver");
             
             
//             change button to reset:-
             document.getElementById("startreset").innerHTML = "Reset Game";
             
//             start countdown:-
             startCountdown();
             
             
//             generate new Q&A:-
             generateQA();
             
         }
         
     }

     
     
    //Clicking on an answer box:-
     
for(i=1; i<5; i++){
     document.getElementById("box"+i).onclick = 
     function(){ 
                //check if we are playing:-
     
   if(playing == true){//yes
                     if(this.innerHtml == correctAnswer){
                     //correct answer
                         
                     // increase score by 1.     
                         score++;
                         
             document.getElementById("scorevalue").innerHTML = score;
                         
        // hide wrong box and show correct box:-
         show("correct");
                         
         hide("wrong");
                         
                         
      setTimeout(function(){
            hide("correct");
                         }, 1000);
                         
                // generate new QA
                    generateQA();
                             
                     }
                     else{ 
                    //wrong answer
                    
                    hide("correct");
                         show("wrong");
                         
                         setTimeout(function(){
                             hide("wrong");
                         }, 1000);
                    
                          
                     }
                     
                 }
     
          }
            
}   
                 
                 
     
 
     
     
     
     
     
     
     
     
     
     
     
     
//functions:-
     

//     start Counter function:-
     
function startCountdown(){
    
    action = setInterval(function(){
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        
        if(timeremaining == 0)
            {  //gameover
                stopCountdown();
                
//                document.getElementById("gameOver").style.display = "block";
                show("gameOver");
                
                document.getElementById("gameOver").innerHTML = "<p>Game over</p><p>Your score is " + score + ".</p>";
                
//               document.getElementById("timeremaining").style.display = "none";
                hide("timeremaining");
                hide("correct");
                hide("wrong");
                
                playing = false;
                
        // change text Reset Gameto start game when the game is over:-   
                document.getElementById("startreset").innerHTML = "Start Game";
            }
    }, 1000);
    
}

// stop counter function:-

function stopCountdown()
{
    clearInterval(action);
}



// hide an certain element:-

function hide(Id)
{
    document.getElementById(Id).style.display = "none";
    
}


// show an certain element:-

function show(Id)    
{
    document.getElementById(Id).style.display = "block";
}


// generate questions and multiple answers:-

function generateQA()
{
    var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
     correctAnswer = x*y;
    
    document.getElementById("question").innerHTML = x + "x" + y;
    
    
    var correctPosition = 1+Math.round(3*Math.random());
    
    // fill one box with the correct answer:-
    document.getElementById("box"+correctPosition).innerHTML = correctAnswer;
    
    //fill other boxes with the wrong answers:-
    
    var answers = [correctAnswer];
    
    for(i=1; i<5; i++){
        
        if(i != correctPosition){
            var wrongAnswer;
            do{
                wrongAnswer = (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));   //a wrong                                       answer.
               }
              while(answers.indexOf(wrongAnswer)>-1)
            
            
            document.getElementById("box"+i).innerHTML = wrongAnswer;
            
            answers.push(wrongAnswer);
        }
    }
    
 
}








//flowchart of the game,Process flow:-


//  if we click on the start/reset button
//        if we are playing
//                reload page
//        if we are not playing
//                set score to 0
//                show countdown box
//                reduce time by 1sec in loops
//                             timeleft?
//                                 yes->continue
//                                 no-> gameover
//                change button to reset
//                generate new Q/A


//    if we click on answer box
//          if we are playing
//                  correct?
//                      yes
//                          increase score by 1
//                          show correct box for 1sec
//                          generate new Q/A 

//                      no
//                          show try again box for 1sec


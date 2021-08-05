 function guessNumber(){
                let number = document.getElementById("guessNumber");
                var para = document.getElementById("result");
                var resultNumber = Math.ceil(Math.random()*5);
                
                if(parseInt(number.value) === resultNumber){
                    
                    para.innerHTML = " Correct Guess!!!!! The number is "+resultNumber;
                    //var text = document.createTextNode("Correct Guess!!!!! and the number is ",resultNumber);
                    //para.appendChild(text);
                    //$("#result").innerHTML("Correct Guess!!!!! and the number is ",resultNumber);
                }
                else if(number.value>5){
                    para.innerHTML="Invalid input. Number should be between 1 to 5"
                }
                else{
                    para.innerHTML = " Better luck next time :( The number is "+resultNumber;
                    //$("#result").innerHTML("Better luck next time :( The number is ",resultNumber);
                }
            }
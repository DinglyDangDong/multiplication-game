var player = localStorage.getItem("i1");
var score = 0;
function askQuestion (){
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    
    document.getElementById("number1").style.display = "none";
    document.getElementById("number2").style.display = "none";
    document.getElementById("theOnlyButton").style.display = "none";
    document.getElementById("answer").style.display = "inline";
    document.getElementById("theAnswerButton").style.display = "inline";
    
    var equation = "<h3>" + number1 + "x" + number2 + "=" + "?" + "</h3>";
    document.getElementById("output").innerHTML = equation;  
}
function answerQuestion (){
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var joe = document.getElementById("answer").value; 
    var rightAnswer = number1 * number2;
    
    var success = "<h3>" + "You have answered correctly " + player + "</h3>" + "<br>" + "<button class='button btn-primary' onclick='resetPage()'>Reset</button>";
    var failed = "<h3>" + "Wrong answer" + "</h3>" + "<br>" + "<button class='button btn-primary' onclick='resetPage()'>Reset</button>";

    console.log(rightAnswer);
    console.log(joe);
    console.log(number2);
    console.log(number1);
    if(rightAnswer == joe){
        document.getElementById("output").innerHTML = "";
        document.getElementById("output").innerHTML = success;
        score = score + 1;
        score = score;
        document.getElementById("pscore1").innerHTML = score;
        
    }else{
        document.getElementById("output").innerHTML = "";
        document.getElementById("output").innerHTML = failed;
        
        
    }

}
function resetPage (){
    document.getElementById("output").innerHTML = "";

    document.getElementById("number1").style.display = "block";
    document.getElementById("number2").style.display = "block";
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
    document.getElementById("answer").value = "";
    document.getElementById("theOnlyButton").style.display = "block";
    document.getElementById("answer").style.display = "none";
    document.getElementById("theAnswerButton").style.display = "none";
     
}
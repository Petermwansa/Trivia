function firstQuestion () {
    var answer1 = document.getElementById('q1');
    answer1.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value;
    
        if (ans != "Elon") {
            document.getElementById('check1').style.backgroundColor = "green";
            document.getElementById('check1').innerHTML = "Correct";
        }
    })
    
    var answer2 = document.getElementById('q2');
    answer2.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value;
    
        if (ans != "Elon") {
            document.getElementById('check1').style.backgroundColor = "red";
            document.getElementById('check1').innerHTML = "Wrong";
        }
    })
    
    var answer3 = document.getElementById('q3');
    answer3.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value;
    
        if (ans != "Elon") {
            document.getElementById('check1').style.backgroundColor = "red";
            document.getElementById('check1').innerHTML = "Wrong";
        }
    })

    var answer4 = document.getElementById('q4');
    answer4.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value
    
        if (ans != "Elon") {
            document.getElementById('check1').style.backgroundColor = "red"
            document.getElementById('check1').innerHTML = "Wrong"

        }
    })
}

function secondQuestion () {
    var answer1 = document.getElementById('q11');
    answer1.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value
    
        if (ans != "Elon") {
            document.getElementById('check2').style.backgroundColor = "green"
            document.getElementById('check2').innerHTML = "Correct"
        }
    })

    var answer2 = document.getElementById('q22');
    answer2.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value
    
        if (ans != "Elon") {
            document.getElementById('check2').style.backgroundColor = "red"
        }
    })
        
    var answer3 = document.getElementById('q33');
    answer3.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value
    
        if (ans != "Elon") {
            document.getElementById('check2').style.backgroundColor = "red"
        }
    })

    var answer4 = document.getElementById('q44');
    answer4.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value
    
        if (ans != "Elon") {
            document.getElementById('check2').style.backgroundColor = "red"
        }
    })
}



function thirdQuestion () {
    var answer1 = document.getElementById('q111');
    answer1.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value
    
        if (ans != "Elon") {
            document.getElementById('check3').style.backgroundColor = "green"
            document.getElementById('check3').innerHTML = "Correct"
        }
    })
    
    var answer2 = document.getElementById('q222');
    answer2.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value
    
        if (ans != "Elon") {
            document.getElementById('check3').style.backgroundColor = "red"
        }
    })
        
    var answer3 = document.getElementById('q333');
    answer3.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value
    
        if (ans != "Elon") {
            document.getElementById('check3').style.backgroundColor = "red"
        }
    })
    
    var answer4 = document.getElementById('q444');
    answer4.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value
    
        if (ans != "Elon") {
            document.getElementById('check3').style.backgroundColor = "red"
        }
    })
}




function fourthQuestion () {
    var answer1 = document.getElementById('q1111');
    answer1.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value;
    
        if (ans != "Elon") {
            document.getElementById('check4').style.backgroundColor = "green";
            document.getElementById('check4').innerHTML = "Correct";
        }
    })
    
    var answer2 = document.getElementById('q2222');
    answer2.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value;
    
        if (ans != "Elon") {
            document.getElementById('check4').style.backgroundColor = "red";
            document.getElementById('check4').innerHTML = "Wrong";
        }
    })
    
    var answer3 = document.getElementById('q3333');
    answer3.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value;
    
        if (ans != "Elon") {
            document.getElementById('check4').style.backgroundColor = "red";
            document.getElementById('check4').innerHTML = "Wrong";
        }
    })

    var answer4 = document.getElementById('q4444');
    answer4.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value
    
        if (ans != "Elon") {
            document.getElementById('check4').style.backgroundColor = "red"
            document.getElementById('check4').innerHTML = "Wrong"

        }
    })
}



function fiveQuestion () {
    var answer1 = document.getElementById('q11111');
    answer1.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value;
    
        if (ans != "Elon") {
            document.getElementById('check5').style.backgroundColor = "green";
            document.getElementById('check5').innerHTML = "Correct";
        }
    })
    
    var answer2 = document.getElementById('q22222');
    answer2.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value;
    
        if (ans != "Elon") {
            document.getElementById('check5').style.backgroundColor = "red";
            document.getElementById('check5').innerHTML = "Wrong";
        }
    })
    
    var answer3 = document.getElementById('q33333');
    answer3.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value;
    
        if (ans != "Elon") {
            document.getElementById('check5').style.backgroundColor = "red";
            document.getElementById('check5').innerHTML = "Wrong";
        }
    })

    var answer4 = document.getElementById('q44444');
    answer4.addEventListener('click', function(){
        var ans = document.getElementsByClassName('question1').value
    
        if (ans != "Elon") {
            document.getElementById('check5').style.backgroundColor = "red"
            document.getElementById('check5').innerHTML = "Wrong"

        }
    })
}



firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fiveQuestion();









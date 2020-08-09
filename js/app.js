function checkresults()
{
    var count       = 0;
    var correct_ans = 0;
    var wrong_ans   = 0;
    //Question One
    var q1_ans1 = document.getElementById('q1_opt1');
    var q1_ans2 = document.getElementById('q1_opt2');
    var q1_ans3 = document.getElementById('q1_opt3');
    var q1_ans4 = document.getElementById('q1_opt4');

    if(q1_ans3.checked == true)
    {        
        count++;
        correct_ans++;
    }else{
        wrong_ans++;
    }

    //Question Two
    var q2_ans1 = document.getElementById('q2_opt1');
    var q2_ans2 = document.getElementById('q2_opt2');
    var q2_ans3 = document.getElementById('q2_opt3');
    var q2_ans4 = document.getElementById('q2_opt4');

    if(q2_ans2.checked == true)
    {        
        count++;
        correct_ans++;
    }else{
        wrong_ans++;
    }

        //Question Three
    var q3_ans1 = document.getElementById('q3_opt1');
    var q3_ans2 = document.getElementById('q3_opt2');
    var q3_ans3 = document.getElementById('q3_opt3');
    var q3_ans4 = document.getElementById('q3_opt4');

    if(q3_ans3.checked == true)
    {        
        count++;
        correct_ans++;
    }else{
        wrong_ans++;
    }

    // Question Four

    var q4_ans1 = document.getElementById('q4_opt1');
    var q4_ans2 = document.getElementById('q4_opt2');
    var q4_ans3 = document.getElementById('q4_opt3');
    var q4_ans4 = document.getElementById('q4_opt4');

    if(q4_ans1.checked == true)
    {        
        count++;
        correct_ans++;
    }else{
        wrong_ans++;
    }

    alert('Your score is '+count+' Correct Answers: '+correct_ans+' Wrong Answers: '+wrong_ans);

}
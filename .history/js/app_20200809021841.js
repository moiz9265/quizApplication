function checkresults()
{
    //Question One

    var q1_ans1 = document.getElementById('q1_opt1');
    var q1_ans2 = document.getElementById('q1_opt1');
    var q1_ans3 = document.getElementById('q1_opt1');
    var q1_ans4 = document.getElementById('q1_opt1');

    console.log(q1_ans1);
    var count = 0;
    var correct_ans = 0;
    var wrong_ans   = 0;
    if(document.getElementById('q1_opt1').checked == true)
    {
        
        alert(q1_opt1);
        count++;
        correctans++;
    }else{
        alert('else');
        wrongans++;
    }

    // alert('your score is '+count+' '+correctans);
}
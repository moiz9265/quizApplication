function checkresults()
{
    //Question One

    var q1_opt1 = document.getElementById('q1_opt1');
    var q1_opt2 = document.getElementById('q1_opt1');
    var q1_opt3 = document.getElementById('q1_opt1');
    var q1_opt4 = document.getElementById('q1_opt1');

    console.log(q1_opt3);
    var count = 0;
    var correct_ans = 0;
    var wrong_ans   = 0;
    if(q1_opt3.checked == true)
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
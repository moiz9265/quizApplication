function checkresults()
{
    //Question One

    var q1_opt1 = document.getElementById('q1_opt1');
    var q1_opt2 = document.getElementById('q1_opt1');
    var q1_opt3 = document.getElementById('q1_opt1');
    var q1_opt4 = document.getElementById('q1_opt1');

    var count = 0;
    var correctans = 0;
    var wrongans   = 0;
    if(q1_opt3.checked == true)
    {
        count++;
        correctans++;
    }else{
        wrongans++;
    }

    alert(your score is);
}
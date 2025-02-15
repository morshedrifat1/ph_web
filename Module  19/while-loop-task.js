/***
task 1
-------------------
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

let tsk1 = 1;

while(tsk1<=60){
    console.log("I will invest at least 6 hrs every single day for next 60 days!",tsk1);
    tsk1++;
}


/***

task-2:

Find all the odd numbers from 61 to 100.

 */

let tsk2 = 61;

while(tsk2 <= 100){
    if(tsk2 % 2 ==0){
        console.log(tsk2);
    }
    tsk2++;
}


/***

task-3:

Find all the even numbers from 78 to 98.

 */

let tsk3 = 78;

while(tsk3 <= 98){
    if(tsk3 % 2 !=0){
        console.log(tsk3);
    }
    tsk3++;
}

    
/***

task-4:

Display sum of all the odd numbers from 81 to 131.

 */

let tsk4 = 81;
let sum1 = 0;

while(tsk4 <= 131){

    if(tsk4 % 2 != 0){
        sum1=sum1+tsk4;
        console.log("sum1" + "=", sum1);
    }

    tsk4++;
}


/***

task-5:

Display sum of all the even numbers from 206 to 311.

 */

let tsk5 = 206;
let sum2 = 0;

while(tsk5 <= 311){

    if(tsk5 % 2 == 0){
        sum2=sum2+tsk5;
        console.log("sum2 " + "=", sum2);
    }

    tsk5++;
}


/***
task:6
-------------------
As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

let tsk6 = 1;

let nam = 5;

while(tsk6 <= 10){
    let mul = nam * tsk6;
    console.log(nam , "*" , tsk6 , "=" , mul) ;
    tsk6++;
}
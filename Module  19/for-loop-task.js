/***
task : 1
----------------
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */


for(tsk1 = 1; tsk1 <= 60; tsk1++){
    console.log("I will invest at least 6 hrs every single day for next 60 days!",tsk1);
}



/***

task-2:

Find all the odd numbers from 61 to 100.

 */


for(let tsk2 = 61; tsk2 <= 100; tsk2++){
    if(tsk2 % 2 != 0){
        console.log("odd = ",tsk2);
    }
}


/***

task-3:

Find all the even numbers from 78 to 98.

 */

for(let tsk3 = 78; tsk3 <= 98; tsk3++){
    if(tsk3 % 2 == 0){
        console.log("even = ",tsk3);
    }
}



/***

task-4:

Display sum of all the odd numbers from 91 to 129.

 */

let sum1 = 0;

for(let tsk4 = 91; tsk4 <= 129; tsk4++){
    if(tsk4 % 2 != 0){
        sum1=sum1+tsk4;
    }
    console.log(sum1);
}


/***
task-5:

Display sum of all the even numbers from 51 to 85.

 */


let sum2 = 0;

for(let tsk5 = 51; tsk5 <= 85; tsk5++){
    if(tsk5 % 2 == 0){
        sum2=sum2+tsk5;
    }
    console.log(sum2);
}



/***
task-6:
Generate a multiplication table for number 9

 */


let num = 9;

for(let tsk = 1; tsk <= 10; tsk++){
    let mul = num * tsk;
    console.log(num + "*" + tsk + "=" + mul);
}
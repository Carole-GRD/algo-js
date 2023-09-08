// Ask the user to enter its age. If its age is at least 18 display "You are an adult". If it's not the case display "You are not yet an adult".


let age  = parseInt(prompt("What's your age ?"));

let majority = age < 18 ? 'You are not yet an adult' : 'You are an adult';

alert(majority);
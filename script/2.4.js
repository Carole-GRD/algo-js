// Count from 1 to 100. For every even number display the result of their division by 2. For every odd number display the result of their multiplication by 3.

for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        console.log(i/2);
    }
    else {
        console.log(i*3);
    }
}
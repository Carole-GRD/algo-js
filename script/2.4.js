// Count from 1 to 100. For every even number display the result of their division by 2. For every odd number display the result of their multiplication by 3.

for (let i = 1; i < 101; i++) {
    let value = (i % 2 === 0) ? i/2 : i*3;
    console.log(value);
}
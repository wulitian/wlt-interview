const random = (n) =>
    Math.random()
        .toString(36)
        .slice(2, 2 + n);

console.log(random(1));
// => "c1gdm2"
console.log(random(2));
// => "oir5pp"

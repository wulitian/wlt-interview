function f(a: string, b: string)
function f(a: number, b: number)
function f(a: string | number, b: string | number) {
    if (typeof a === 'string' && b === 'string') {
        return a + ':' + b;
    } else if(a === 'number' && b === 'number') {
        return a + b;
    }
}

f(2, 3);
// f(1, 'a');
// f('a', 2);
f('a', 'b');

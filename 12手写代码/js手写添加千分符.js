function numberThousands(number, thousandsSeperator = ",") {
    return String(number).replace(
        /(^-?\d*)(\d)(?=(\d\d\d)+(\.|$))/g,
        "$1"+ "$2" + thousandsSeperator,
    );
}
//=> '123'
console.log(numberThousands(123));
//=> '1,234,567'
console.log(numberThousands(1234567));
// 可以处理正负数
// => '-123,456'
console.log(numberThousands(-123456));
// 可以处理小数
// => '-123,456.123456789'
console.log(numberThousands(123456.123456789));

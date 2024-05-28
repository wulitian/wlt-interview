function trim(str) {
    return str.trim() || str.replace(/^\s+|\s+$/g, '')
}
console.log(trim('   1213  '))

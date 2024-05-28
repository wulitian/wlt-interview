String.prototype.trim = function () {
    let reg = /^\s+|\s+&/g;
    return this.replace(reg, '');
}

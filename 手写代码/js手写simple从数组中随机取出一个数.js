Array.prototype.sample = function () {
 return  this[Math.floor(Math.random() * this.length)]
};
console.log(['张三',2,'李四'].sample())

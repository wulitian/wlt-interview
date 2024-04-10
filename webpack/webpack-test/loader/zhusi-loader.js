module.exports = function(source) {
   source = source.replace(new RegExp(/(console.log\()(.*)(\))/g), '');
   console.log(source);
   return source;
}
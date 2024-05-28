const pattern1 = /[\u4e00-\u9fa5]+/g;
const contents = "[微笑][撇嘴][发呆][得意][流泪]";
let content = contents.match(pattern1);
console.log(content)

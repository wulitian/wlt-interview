// const object = { a: [{ b: { c: 3 } }] };
// //=> 3
// get(object, "a[0].b.c");
// //=> 3
// get(object, 'a[0]["b"]["c"]');
// //=> 10086
// get(object, "a[100].b.c", 10086);
function get(source, path, defaultValue = undefined) {
    const paths = path
        .replace(/\[(\w+)\]/,'.$1')
        .replace(/\['(\w+)'\]/,'.$1')
        .replace(/\["(\w+)"\]/,'.$1')
        .split('.')
    console.log(paths)
    let res = source;
    for (const p of paths) {
        res = res?.[p]
    }
    return res === undefined ? defaultValue : res;
}
const object = { a: [{ b: { c: 3 } }] };
const result = get(object, "a[0].b.c", 1);
console.log(result)

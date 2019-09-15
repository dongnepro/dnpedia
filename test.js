// const testObj = {}
// console.log(testObj)
// callByRef(testObj)
// console.log(testObj)
// const b = 3;
// console.log(b)
// callByValue(b)
// console.log(b)
// function callByValue(v) {
//     v = 4
//     console.log(v)
// }
// function callByRef(obj) {
//     obj.a = 3
//     console.log(obj)
// }

// 클로저
// 1-20까지 만들기 
for (var i = 1; i < 20; i++) {
    setTimeout(() => {
        console.log(i)
    }, i * 100);
}
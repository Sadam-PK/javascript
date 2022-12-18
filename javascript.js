// //------------ arrow functions --------------

// sayHello =(name, greeting)=> {console.log('hi' + name + greeting)}


// sayHello('sadam', 'morning')  


// const x ={
//     name:'sadam',
//     age:22,
//     show:function(){
//         console.log(this.name)
//     }
// }

// x.show()

// //------------- foreach function ------------------

// friends = ['shoaib', 'bilal', 'mukhlis']


// friends.forEach(element=>{
//     console.log(element)
// })

// for (element in friends){
//     console.log(friends[element])
// }

// for(element of friends){
//     console.log(element)
// }

// let employee={
//     name:'Ali',
//     age : 22
// }

// for (element in employee){
//     console.log(`${element} = ${employee[element]}`)
// }

// list = [
//     {
//         name : 'asd',
//         age: 22,
//     },
//     {
//         name : 'ali',
//         age: 12,
//     },
//     {
//         name : 'sk',
//         age: 33,
//     }
// ]

// list.forEach(element => {
//     console.log(element)
// });

// for(element of list){
//     console.log(element)
// }

// for(element in list){
//     console.log(list[element])
// }


// // //-------- event handling ------------ 

// let a = prompt('Enter a number');

// let x =  function(e){
//     alert('Hello')
// }
// let y =  function(e){
//     alert('Hello 2')
// }

// btn.addEventListener('click', x)


// btn.addEventListener('click', y)


// if (a == '1'){
//     btn.removeEventListener('click', x)
// }

// let arr = [3,2]
// let [a, b] = arr

// console.log(arr)

// let arr = [2,4,6,5,3,10]
// let [a,s,d,f, ...rest]=arr

// console.log(a,s,d,f,rest)



// let arr = [2,4,6,5,3,10]
// let [a,,,, ...rest]=arr

// console.log(a,rest)


// let {a,b} = {a:2, b:3}

// console.log(a,b

// )

// let arr1 = [3,5,10]

// let obj1 = [...arr1, 20]

// console.log(obj1)


// let arr2 = [3,5,10]

// let obj2 = {...arr1, 3:50}

// console.log(obj2)

// let arr = [1,2,3,4,5]
// function sum(a,b,c,d,e){
//     return a+b+c+d+e
// }
// console.log(sum(...arr))


//  // ------------- Async -- callbacks ----------------

// console.log('Start')
// setTimeout(function(){
//     console.log('Hey, I am late because I am in async function..')
// }, 3000);

// console.log('End')

// function loadScript(src, callBack){
//     var script = document.createElement('Script')
//     script.src = src
//     script.onload=function(){
//         callBack()
//     }
//     document.body.appendChild(script)
// }
// function Hello(){
//     alert('Hellowwwww')
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", Hello);


//  // ------------- Promises ----------------

// let promise = new Promise(function(resolve, reject){
//     alert('Hello from Promise')
//     resolve(56)
// })

// console.log('Hello')

// setTimeout(function(){
//     console.log('Hello from settimeout')
// }, 2000)

// console.log(promise)

// //------- map -----------

let arr = [10, 20, 30, 40]

let a = arr.map((value)=>{  // map is used for creating new array
    console.log(value);     // foreach is used for new operation on array
    return value+1
})

console.log(a);
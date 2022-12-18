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


// //-------- event handling ------------ 

let a = prompt('Enter a number');

let x =  function(e){
    alert('Hello')
}
let y =  function(e){
    alert('Hello 2')
}

btn.addEventListener('click', x)


btn.addEventListener('click', y)


if (a == '1'){
    btn.removeEventListener('click', x)
}
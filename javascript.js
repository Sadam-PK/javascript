sayHello =(name, greeting)=> {console.log('hi' + name + greeting)}


sayHello('sadam', 'morning')  


const x ={
    name:'sadam',
    age:22,
    show:function(){
        console.log(this.name)
    }
}

x.show()
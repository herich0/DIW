function changeName(name){
    this.name= name
    updatedAt = new Date()
}

const task1 = {
    name:'task1',
    createdAt: new Date(),
    completed:false
}
const task2= {
    name: 'task2',
    createdAt: new Date(),
    completed: false,
    changeName:function(name){
        this.name = name
    }
}
console.log(task2)
task2.changeName('task2 updated')
console.log(task2)
/* console.log(task1)
task1.name = 'Task 1'
task1.updatedAt =new Date()
console.log(task1) */
function Task(name){
    this.name = name
    this.createdAt = new Date()
    this.changeName = function (name){
        this.name = name
    }
}

const task1 =new Task('task 1')
console.log (task1)
task1.changeName('task 2')
console.log(task1)
task1.name ='atualizada'
console.log(task1)

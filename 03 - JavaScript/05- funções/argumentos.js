function somarArray(arr){
    let total= 0
    for (let i=0; i<arr.length ;i++){
        total+=arr[i]
    }
    return total
}

function somarArguments(){
    let total= 0
    for (let i=0; i<arguments.length ;i++){
        total+=arguments[i]
    }
    return total
}
console.log(somarArray([1,2,4]))
console.log(somarArguments(1,2,4,8,16))
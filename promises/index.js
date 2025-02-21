function delayFn(time){
    return new Promise((resolve)=> setTimeout(resolve, time))
} 
console.log("started"); 
delayFn(2000).then(()=> console.log('delayFn started')); 
console.log('end')
// 
function divideFn(num1, num2){
    return new Promise((resolve, reject)=> {
        if(num2 ===0){
            reject('Not a number')
        }
        resolve(num1/num2)
    })
}

divideFn(10,2).then((res)=> console.log(res)).catch((err)=> console.log(err))
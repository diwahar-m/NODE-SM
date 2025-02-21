async function division(n1, n2){
    try {
        if(n2 === 0){
             throw new Error('Number 2 is not a number')
        }
        return n1/n2
    }catch(err){
        return err
    }
}

(async function(){
    await division(10, 5).then(res => console.log(res)).catch(err => console.log(err))
    await division(10, 2).then(res => console.log(res)).catch(err => console.log(err))
})()
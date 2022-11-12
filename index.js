function showText(text, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {            
            resolve(text)
        }, time)
    })
}

function myPromiseAll(promises) {
    let result = [];
    return new Promise((resolve, reject) => {
        promises.forEach((p, index) => {
            p.then((res) => {
                result.push([res,index])
                    if(result.length===promises.length){
                        resolve(result)
                    }
                    
                
            }).catch((err) => reject(err));
        });
    })
}

myPromiseAll([showText("Task 1", 500),showText("Task 2", 8000),showText("Task 3", 3000),showText("Task 4", 2500)]).then((value) => {
    console.log(value)
})

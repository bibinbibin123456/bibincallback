function makewaffle(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("waffle is ready")
        }, 2500);
    })
}
function geticecreame(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let icecreame=false;
            if(icecreame){
                resolve("got icecreame")
                
            }else{
                reject("did not get ice creame  ")
            }
            
        },1500);
    })
}
function snack(){
    makewaffle()
    .then(function(data){
        console.log(data);
        return geticecreame()
            
     
    }
    )
    .then(function(data){
        console.log(data);
        console.log("set up the table")
    })
    .catch(function(error){
        console.log(`${error} so make choclate syrup`)
    })
}
snack()
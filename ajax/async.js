function makewaffle(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("waffle is ready")
            resolve("waffle is ready")
        }, 2500);
    })
}
function geticecreame(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let icecreame=true;
            if(icecreame){
                console.log("got icecreame")
                resolve("got icecreame");
                
            }else{
                reject("did not get ice creame  ")
            }
            
        },1500);
    })
}
async function snack(){
    try {
        await makewaffle();
        await geticecreame();
        console.log("set up the table")
    } catch (error) {
        console.log(`${error} so make choclate syrup`)
    }
}
snack()
makewaffle(geticecreame);

 function makewaffle(callback){
    setTimeout(() => {
       console.log("set the table") ;
       console.log("waffle is ready") ;

       callback()
    }, 2500);
 };

 function geticecreame(){
    setTimeout(() => {
        let icecreame=false;
        if(icecreame){
        console.log("got the icecreame")
         }else{
            console.log("did not get the icecreame")
         } ;
    }, 1500);
   
 }
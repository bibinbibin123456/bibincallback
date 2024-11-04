// calculateArea(2,4,calculateperimeter);
// function calculateArea(l,b,callback){
//     var area=l*b;
//     console.log(`the area is ${area}`);
//     callback(l,b);
// };
// function calculateperimeter(a,b){
//     var perimeter= 2*(a+b);
//     console.log(`the perimeter is ${perimeter}`);
// }


// Square(2,cube);
// function Square(a,callback){
//     var square=a*a;
//     console.log(`the square of ${a} is ${square}`);
//     callback(square,a);


// };
// function cube(c,b){
//     var cube=c*b;
//     console.log(`the cube is ${cube}`);




//}
    
calculateArea(3,circumference);
function calculateArea(a,callback){
    var area=Math.PI*a*a;
    console.log(`the area of circle is${area}`)
    callback(a);
};
function circumference(a){
    var circumference=2*Math.PI*a;
    console.log(`the circumference of circle is${circumference}`)

}

    


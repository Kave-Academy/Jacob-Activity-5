function run(){

    var b = document.getElementById("input_base").value;
    var n = document.getElementById("input_exponent").value;

    let result = (b,n) => b ** n;
   
    document.getElementById("output").innerHTML = result(b,n);
}



// function run(b,n){

//     var b = document.getElementById("input_base").value;
//     var n = document.getElementById("input_exponent").value;

//         let ans = (b,n) => {

//         for (let i =1; i <= n; i++)
//         {
//             ans = b ** n;        
//         }
//             return ans;
//         }

//         document.getElementById("output").innerHTML = ans(b,n);
// }

// function run(b,n){

//     var b = document.getElementById("input_base").value;
//     var n = document.getElementById("input_exponent").value;

//     let ans = (b,n) => {
//         let i = 1;
//         i <= n; i++
//         ans = b ** n
//         return ans;
//     }

//     document.getElementById("output").innerHTML = ans(b,n);
// }


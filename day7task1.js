// 1. Solving problems using array functions on the rest countries' data.
// a) Get all the countries from the Asia continent /region using the Filter function

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response);
    let result = data.filter((element)=>{
        return element.region==="Asia";
    })
    console.log(result);
}
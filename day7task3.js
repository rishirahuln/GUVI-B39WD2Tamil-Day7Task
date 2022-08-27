// 1. Solving problems using array functions on the rest countries' data.
// c) Print the following details name, capital, flag using forEach function

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response);
    data.forEach((element)=>{
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flag);
    })
}
// 1. Solving problems using array functions on the rest countries' data.
// b) Get all the countries with a population of less than 2 lakhs using Filter function

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response);
    let result = data.filter((element)=>{
        return element.population<200000;
    })
    console.log(result);
}

// 1. Solving problems using array functions on the rest countries' data.
// d) Print the total population of countries using reduce function

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response);
    let popul = data.filter((element)=>{
        return element.population;
    })
    let arr = [];
    popul.forEach((elem)=>{
        arr.push(elem.population);
    })
    let result = arr.reduce((accu, curr)=>{
        return accu+curr;
    })
    console.log(result);
}

// 1. Solving problems using array functions on the rest countries' data.
// e) Print the country which uses US Dollars as currency.

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.send();
xhr.onload = function(){
    const data = JSON.parse(xhr.response);
    let res = data.filter((elem)=>{
        return elem.currencies;
    })
    let result = res.filter((element)=>{
        return element.currencies[0].code === "USD";
    })
    console.log(result);
}
const baseUrl="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdowns = document.querySelectorAll(".dropdown select");
let button= document.querySelector("button");
const fromCurr=document.querySelector("from.select");
const toCurr=document.querySelector("to.select");
const msg= document.querySelector(".msg");

// console.log(button);
// for (code in countryList){
//   console.log(code, countryList[code]);
// }
console.log("Hi app.js");
for (let select of dropdowns){
  for(currCode in countryList){
    let newOption= document.createElement("option");
      newOption.innerText = currCode;
      newOption.value= currCode;
      if(select.name==="from" && currCode=== "USD"){
        newOption.selected="selected"
      }
      if(select.name==="to" && currCode=== "NPR"){
        newOption.selected="selected"
      }
      select.append(newOption);
  }
  select.addEventListener("change",(evt)=>{
    updtFlag(evt.target);

  })

}


const updtFlag=(element)=>{
  let currencCode= element.value;
  let countryCode=countryList[currencCode];
  console.log(countryCode);
  let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
  let img=  element.parentElement.querySelector("img");
  img.src=newSrc;
}
button.addEventListener("click", async (evt)=>{
  evt.preventDefault();
  let amount= document.querySelector(".amount input");
  let amtVal=amount.value;
  
  if(amtVal===""|| amtVal<1 || typeof amtVal === 'string'){
    amtVal=1;
    amount.value="1";
  }
  console.log(amtVal);
  const URL= `${baseUrl}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
  let response=await fetch(URL);
  let data=await response.json;
  let rate= data[toCurr.value.toLowerCase()];
  console.log(rate);
  let finalAmt=amtVal*rate;
  msg.innerText=`${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
});




// let opt=document.querySelector('.from select' );
// console.log(opt);

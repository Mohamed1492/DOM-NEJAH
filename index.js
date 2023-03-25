// console.log(document);
// const inputeBox=document.getElementsByTagName("input");
// console.log(inputeBox);
// const btnPlus=document.getElementsByClassName("plus");
// console.log(btnPlus);
// const total=document.getElementById("total");
// console.log(total)
// const btnMinus=document.querySelectorAll("button")
// console.log(btnMinus)
const btnPlus = document.querySelectorAll(".plus");
// console.log(btnPlus);

for (var i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", increment);
}

function increment(e) {
  const btn = e.target;
  //   console.log(btn)
  const divElt = btn.parentElement;
  // console.log(divElt);
  var quntityTag = divElt.querySelector("p");
  //   console.log(quntityTag);
  var quntityValue = Number(quntityTag.innerHTML);
  // console.log(typeof(quntityValue))
  quntityValue++;
  // console.log(quntityValue)
  quntityTag.innerHTML = quntityValue;
  // console.log(typeof(quntityTag.innerHTML))
  const unitePrice = Number(
    divElt.parentElement.parentElement.querySelector(".unitPrice").innerHTML
  );
  const tdElt=divElt.parentElement;
  const trElt=tdElt.parentElement;
  var priceTag=trElt.querySelector(".price");
//   console.log(priceTag);

var priceValue=Number(priceTag.innerHTML)
priceValue+=unitePrice
priceTag.innerHTML=priceValue
}

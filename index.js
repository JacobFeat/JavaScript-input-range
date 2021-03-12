const prices = [8, 12, 16, 24 ,36];
const pricesDiscount = [];
const pageviews = ["10K", "50K", "100K", "500K", "1M"];

const btn = document.querySelector(".btn");
const toggle = document.querySelector("#toggle");
const input = document.querySelector(".moneyChooser");
const output = document.querySelector(".price-value");
const amountOfPageviews = document.querySelector(".amount-of-pageviews");

input.oninput = displayPrice;

function displayPrice(){
  const valuePercent =  (this.value/this.max)*100;
  input.style.background = `linear-gradient(to right, hsl(174, 77%, 80%), hsl(174, 77%, 80%) ${valuePercent}%, hsl(224, 65%, 95%) ${valuePercent}%, hsl(224, 65%, 95%) 100%)`;

  if(toggle.checked == true){
    output.innerHTML = prices[this.value]*0.75;
    amountOfPageviews.innerHTML = pageviews[this.value];
  }
  else{
    output.innerHTML = prices[this.value];
    amountOfPageviews.innerHTML = pageviews[this.value];
  }
}

btn.addEventListener("mouseenter", function(){
  this.classList.add('toggle-hover');
});

btn.addEventListener("mouseleave", function(){
  this.classList.remove('toggle-hover');
});

toggle.addEventListener("change", function(){
  const value = input.value;
  if(toggle.checked == true){
    output.innerHTML = prices[value]*0.75;
  }
  else{
    output.innerHTML = prices[value];
  }
})

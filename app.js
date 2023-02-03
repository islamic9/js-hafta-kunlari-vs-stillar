

let input = document.querySelector("input");
let btn = document.querySelector("#btn");
let toggleClass = document.querySelector("#toggleClass");
let background = document.querySelector("#background");



toggleClass.addEventListener("click", () => {
  background.style.display = ("none")
  input.style.background = ("rgb(174, 105, 9)")
  toggleClass.style.color = ("rgb(45, 45, 45)")
  input.style.hover = ("rgb(174, 105, 9)")
  btn.style.background = ("rgb(174, 105, 9)")
})

toggleClass.addEventListener("dblclick", () => {
  background.style.display = ("block")
  toggleClass.style.color = ("rgb(255, 239, 198)")
  input.style.background = ("linear-gradient(162deg, rgb(229, 184, 118), rgb(174, 105, 9),rgb(24, 15, 1))")
  input.style.hover = ("linear-gradient(162deg, rgb(242, 217, 117), rgb(248, 214, 24),rgb(190, 192, 57))")
  btn.style.background = ("linear-gradient(162deg, rgb(229, 184, 118), rgb(174, 105, 9),rgb(24, 15, 1))")
})

btn.addEventListener("click", function (){
    if (document.querySelector("#input").value === "dushanba") {
      document.querySelector("#input").value = "monday";
    } 
    else if (document.querySelector("#input").value === "seshanba") {
      document.querySelector("#input").value = "tuesday";
    } 
    else if (document.querySelector("#input").value === "chorshanba") {
      document.querySelector("#input").value = "wednesday";
    } 
    else if (document.querySelector("#input").value === "payshanba") {
      document.querySelector("#input").value = "thursday";
    } 
    else if (document.querySelector("#input").value === "juma") {
      document.querySelector("#input").value = "friday";
    } 
    else if (document.querySelector("#input").value === "shanba") {
      document.querySelector("#input").value = "saturday";
    } 
    else if (document.querySelector("#input").value === "yakshanba") {
      document.querySelector("#input").value = "sunday";
    } 
    else {
      document.querySelector("#input").value = "O'yin qimasdan narmalniy yozin bratan!";
    }
  }
)

const mainContainer = document.querySelector(".container");
const thankyouContainer = document.querySelector(".thank-you");

const submitButton = document.getElementById("submit");
const rateAgainButton = document.getElementById("rate-again");

submitButton.addEventListener("click", ()=>{
    thankyouContainer.classList.remove("hidden");
    // one way : but this method having some bugs on continuous working bcz in actual maincontainer doesn't have any hidden class so style method would be efficient
    // mainContainer.classList.add("hidden");
    // 2nd way
    mainContainer.style.display = "none";
})

rateAgainButton.addEventListener("click", () =>{
    thankyouContainer.classList.add("hidden")
    mainContainer.style.display = "block";
})
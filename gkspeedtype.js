let speedTypingTest = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");
let count = 0;
let counting = setInterval(function() {
    timer.textContent = count;
    count += 1;
}, 1000);

function timerCount() {
    if (quoteDisplay.textContent === quoteInput.value) {
        clearInterval(counting);
        result.textContent = "You typed in " + count + " seconds";
    } else {
        result.textContent = "You typed incorrect scentence";
    }
}

function getQuote() {
    let options = {
        method: "GET"
    };
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsondata) {
            speedTypingTest.classList.remove("d-none");
            spinner.classList.add("d-none");
            quoteDisplay.textContent = jsondata.content;
        });
}
getQuote()
submitBtn.addEventListener("click", timerCount);
resetBtn.addEventListener("click", function() {
    speedTypingTest.classList.add("d-none");
    spinner.classList.remove("d-none");
    getQuote();
})
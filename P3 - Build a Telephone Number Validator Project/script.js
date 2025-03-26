const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

const validatePhoneNumber = (number) => {
    const USregex = /^(1\s?)?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;
    return USregex.test(number);
};


const checkUserInput = () => {
    
    if (userInput.value === "") {
        alert("Please provide a phone number");
        return;
    }

    const isValid = validatePhoneNumber(userInput.value);
    resultsDiv.innerHTML = `
    <p class="${isValid ? 'valid' : 'invalid'}">
        ${isValid ? 'Valid' : 'Invalid'} US number: ${userInput.value}
    </p>
    `;
};

const clearInput = () => {
    userInput.value = "";
    resultsDiv.innerHTML = "";
};

checkButton.addEventListener("click", checkUserInput);
clearButton.addEventListener("click", clearInput);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkUserInput();
    }
});
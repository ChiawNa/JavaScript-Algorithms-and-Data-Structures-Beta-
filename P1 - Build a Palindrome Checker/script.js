const inputUser = document.getElementById('text-input');
const buttonCheck = document.getElementById('check-btn');
const resultDisplay = document.getElementById('result');

const checkForPalindrome = input => {
    if (!input) {
    alert("Please input a value.");
    return;
    }

    // Clear previous result
    resultDisplay.innerHTML = ""; // Alternative to replaceChildren()

   // Remove the previous result
//   resultDisplay.replaceChildren();

    let cleanText = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    let isPalindrome = cleanText === [...cleanText].reverse().join("");

    const pTag = document.createElement("p");
    pTag.className = "user-input";
    pTag.innerText = `${input} ${isPalindrome ? "is" : "is not"} a palindrome.`;
    resultDisplay.appendChild(pTag);

    // Ensure result is visible
    resultDisplay.classList.remove("hidden");
};

buttonCheck.addEventListener("click", () => {
    checkForPalindrome(inputUser.value);
    inputUser.value = "";
});

inputUser.addEventListener("keydown", e => {
    if (e.key === "Enter") {
    checkForPalindrome(inputUser.value);
    inputUser.value = "";
    }
});
  
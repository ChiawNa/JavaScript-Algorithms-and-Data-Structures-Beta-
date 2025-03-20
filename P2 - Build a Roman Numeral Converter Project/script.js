const number = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

const checkUserInput = () => {
    output.classList.remove("error", "show");

    if (number.value === "") {
        showError("Please enter a valid number.");
    } else if (number.value < 1) {
        showError("Please enter a number greater than or equal to 1.");
    } else if (number.value > 3999) {
        showError("Please enter a number less than or equal to 3999.");
    } else {
        convertToRoman(number.value);
    }
}

const showError = (message) => {
    output.innerHTML = message;
    output.classList.add("error", "show");
}

const convertToRoman = (num) => {
    const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let result = "";
    for(const i of romanNumerals){
        while(num >= i.value){
            result += i.numeral;
            num -= i.value;
        }
    }

    output.innerHTML = result;
    output.classList.add("show");
}

convertBtn.addEventListener('click', () => {
    output.classList.remove("hidden");
    checkUserInput();
})

number.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkUserInput();
    }
  });
// Elementos
const generatePasswordBtn = document.querySelector("#gerar-senha");
const generatedPasswordElement = document.querySelector("#generator-container");

// Funções
// Letras, Números e Símbolos
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (getLetterLowerCase, getLetterUperCase, getNumber, getSymbol) => {
    let password = "";
    const passwordLength = 10;

    const generators = [
        getLetterLowerCase,
        getLetterUperCase,
        getNumber,
        getSymbol,
    ];
    
    for (let i = 0; i < passwordLength; i = i + 4) {
        generators.forEach(() => {
            const randomValue = generators[Math.floor(Math.random() * generators.length)]();

            password += randomValue;
        });
    }

    password = password.slice(0, passwordLength);

    generatedPasswordElement.computedStyleMap.display = "block";
    generatedPasswordElement.querySelector("h4").innerText = password;
};

// Eventos
generatePasswordBtn.addEventListener("click", () => {
    generatePassword(getLetterLowerCase, getLetterUperCase, getNumber, getSymbol);
});

// Carregamento inicial
console.log(generatePassword(getLetterLowerCase, getLetterUperCase, getNumber, getSymbol));
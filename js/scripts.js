// Elementos
const generatePasswordBtn = document.querySelector("#gerar-senha");
const generatedPasswordElement = document.querySelector("#generator-container");

// Mais opções
const maisOpcoes = document.querySelector("#mais-opcoes");
const optionsContainer = document.querySelector("#opcoes");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordBtn = document.querySelector("#copy-password")

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


    const passwordLength = +lengthInput.value;

    const generators = [];

    if (lettersInput.checked) {
        generators.push(getLetterLowerCase, getLetterUperCase);
    }

    if (numbersInput.checked) {
        generators.push(getNumber);
    }

    if (symbols.checked) {
        generators.push(getSymbol);
    }

    if (generators.length === 0) {
        return;
    }
    
    for (let i = 0; i < passwordLength; i = i + generators.length) {
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
maisOpcoes.addEventListener("click", () => {
    optionsContainer.classList.toggle("hide");
});

generatePasswordBtn.addEventListener("click", () => {
    generatePassword(getLetterLowerCase, getLetterUperCase, getNumber, getSymbol);
});

copyPasswordBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const password = generatedPasswordElement.querySelector("h4").innerText;
    navigator.clipboard.writeText(password).then(() => {
        copyPasswordBtn.innerText = "Copiado!";

        setTimeout(() => {
            copyPasswordBtn.innerText = "Copiar";
        }, 1000);
    });
});

// Carregamento inicial
generatePassword(getLetterLowerCase, getLetterUperCase, getNumber, getSymbol);
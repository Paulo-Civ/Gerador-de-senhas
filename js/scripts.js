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
    let password = "";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

// Eventos
generatePasswordBtn.addEventListener("click", () => {
    console.log(getLetterLowerCase(), getLetterUperCase(), getNumber(), getSymbol());
});
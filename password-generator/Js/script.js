

const passwordLengthdElement = document.getElementById('password-length');
const inputPasswordElement = document.getElementById('inputpassword');
const inputrangeElement = document.getElementById('inputrange');
const uppercaseElement = document.getElementById('checkbox-uppercase');
const lowercaseElement = document.getElementById('checkbox-lowercase');
const numbersElement = document.getElementById('checkbox-numbers');
const symbolsElement = document.getElementById('checkbox-symbols');
const buttonGenerateElement = document.getElementById('button');

const allowedCharacters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ1234567890+-.,!"·$%&/()=?{}';

const regexUppercase = /[A-Z]/g;
const regexLowercase = /[a-z]/g;
const regexNumbers = /[0-9]/g;
const regexSymbol = /[^a-zA-Z0-9\s]/g;

const uppercaseLetters = allowedCharacters.match(regexUppercase);
const lowercaseLetters = allowedCharacters.match(regexLowercase);
const numbersGenerate = allowedCharacters.match(regexNumbers);
const symbolsGenerate = allowedCharacters.match(regexSymbol);

const changeRange = (e) => {
  passwordLengthdElement.textContent = e.target.value;
}

const clickToPassword = () => {
  if (uppercaseElement.checked || lowercaseElement.checked || numbersElement.checked || symbolsElement.checked) {
    buttonGenerateElement.classList.add('button');
    buttonGenerateElement.classList.remove('button-disabled');
    buttonGenerateElement.removeAttribute('disabled');
  } else {
    buttonGenerateElement.classList.remove('button');
    buttonGenerateElement.classList.add('button-disabled');
    buttonGenerateElement.setAttribute('disabled')
  }
};

const generatePassword = () => {
  let allAllowedCharacters = '';

  if (uppercaseElement.checked) {
    allAllowedCharacters += uppercaseLetters.join('');
  }
  if (lowercaseElement.checked) {
    allAllowedCharacters += lowercaseLetters.join('');
  }
  if (numbersElement.checked) {
    allAllowedCharacters += numbersGenerate.join('');
  }
  if (symbolsElement.checked) {
    allAllowedCharacters += symbolsGenerate.join('');
  }


  const generated = inputrangeElement.value;
  let result = '';

  for (let index = 0; index < generated; index++) {
    const randomIndex = Math.floor(Math.random() * allAllowedCharacters.length);
    result += allAllowedCharacters[randomIndex];
  }

  inputPasswordElement.value = result;
};



uppercaseElement.addEventListener('click', clickToPassword);
lowercaseElement.addEventListener('click', clickToPassword);
numbersElement.addEventListener('click', clickToPassword);
symbolsElement.addEventListener('click', clickToPassword);
inputrangeElement.addEventListener('input', changeRange);
buttonGenerateElement.addEventListener('click', generatePassword);

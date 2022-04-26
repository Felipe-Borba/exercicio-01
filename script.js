const firstNumber = Number(prompt("Insira o primeiro numero!"));
const secondNumber = Number(prompt("Insira o segundo numero"));

const sum = firstNumber + secondNumber;
alert(`A soma dos dois números é: ${sum}`);
alert(`A subtração dos dois números é: ${firstNumber - secondNumber}`);
alert(`A multiplicação dos dois números é: ${firstNumber * secondNumber}`);
alert(`A divisão dos dois números é: ${firstNumber / secondNumber}`);
alert(`O resto da divisão dos dois números é: ${firstNumber % secondNumber}`);
alert(
  `A soma dos dois números é ${
    firstNumber % secondNumber === 0 ? "par" : "ímpar"
  }: ${sum}`
);
alert(
  `Os dois números são ${
    firstNumber === secondNumber ? "iguais" : "diferentes"
  }`
);

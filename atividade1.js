// 1- String (Textos)
// Exercício 1 - Crie uma variável nome com seu nome e exiba no console.
let nome = "Júlia"
console.log(nome)

// ______________________________________________________
// Exercício 2 - Crie uma variável sobrenome e mostre nome + sobrenome.
let sobrenome = "Pardim"
console.log(nome + " " + sobrenome)
// ________________________________________________________

// Exercício 3 - Crie uma frase usando Template String.
let versiculo = "Proverbios 3;5 diz: "
let frase = "Confie no Senhor de todo o seu coração"
console.log(versiculo + frase)

// ___________________________________________________________

// Exercício 4 - Guarde o nome de uma escola e exiba.
let nomeEscola = "SENAI"
console.log(nomeEscola)

// _______________________________________________________
// Exercício 5 - Crie duas strings e junte em uma frase.
let frase1 = "Júlia"
let frase2 = " é estudiosa"
console.log(frase1 + frase2)

// _______________________________________________________

// Exercício 6 - Exiba uma mensagem de boas-vindas.
let boasVindas = "Seja bem-vindo(a) !"
console.log(boasVindas)

// ________________________________________________________
// Exercício 7 - Mostre o tamanho de uma string.
let tamanho = "Olá, eu sou a Júlia"
console.log(tamanho.length)

// ________________________________________________________

// Exercício 8 - Transforme um texto em letras maiúsculas.
let maior = "São Paulo"
console.log(maior.toUpperCase())

// _______________________________________________________

// Exercício 9 - Transforme um texto em letras minúsculas.
let menor = "São Paulo"
console.log(menor.toLowerCase())

// _______________________________________________________

// Exercício 10 - Crie uma frase com nome e cidade.
let outroNome = "Júlia"
let cidade = "Guarulhos"
console.log(outroNome + " mora em " + cidade)

// _________________________________________________________

// 2- Number (Números)
// Exercício 1 - Crie dois números e exiba a soma.
let adicao = 10 + 40
console.log(adicao)

// ____________________________________________________________

// Exercício 2 - Calcule a subtração.
let subtracao = 20 - 5
console.log(subtracao)

// ____________________________________________________________

// Exercício 3 - Calcule a multiplicação.
let multipliacacao = 10 * 2
console.log(multipliacacao)

// ______________________________________________________________

// Exercício 4 - Calcule a divisão.
let divisao = 10 / 2
console.log(divisao)

// _____________________________________________________________
// Exercício 5 - Calcule a média de dois números.
let media = 10 + 20
console.log(media / 2)

// _____________________________________________________________

// Exercício 6 - Calcule o dobro de um número.
let dobroNumero = 100 * 2

// _____________________________________________________________

// Exercício 7 - Calcule o resto da divisão.
let dividendo = 15
let divisor = 4
let resto = dividendo % divisor;
console.log(resto)

// _____________________________________________________________

// Exercício 8 - Crie um preço e um desconto.
let precoOriginal = 100.00
let descontoPercentual = 15
let precoFinal = precoOriginal * (1 - descontoPercentual / 100);
console.log(precoFinal)

// _____________________________________________________________
// Exercício 9 - Converta idade em meses.
let idadeAnos = 25 * 12
console.log(idadeAnos)

// ____________________________________________________________

// Exercício 10 - Calcule o quadrado de um número.3
let quadrado = 6 ** 2
console.log(quadrado)

// _____________________________________________________________

// 3- Boolean (Verdadeiro ou Falso)
// Exercício 1 - Crie uma variável ativo com true.

let maiorDeIdade = true;
let menorDeIdadee = false;

console.log(maiorDeIdade); //exibe true 
console.log (menorDeIdadee); // exibe false '""
// ________________________________________________________
// Exercício 2 - Verifique se um número é maior que 10.
let Number = 11;
let liberado = Number >=10;
console.log(liberado);
// ______________________________________________________

// Exercício 3 - Verifique se a idade é maior ou igual a 18.
let idade = 20;
let podeDirigir = idade >=18;
console.log(podeDirigir);
// _______________________________________________________

// Exercício 4 - Compare dois números iguais.
let num1 = 10
let num2 = 10
let resultado = num1 === num2
console.log (resultado)
// _______________________________________________________

// Exercício 5 - Compare dois números diferentes.
let num3 = 20
let num4 = 10
let resultado1 = num1 !== num2
console.log (resultado1)
// _______________________________________________________

// Exercício 6 - Verifique se um número é par.
let par = 92
let resultado2 = par % 2 === 0
console.log(resultado2)
// ________________________________________________________

// Exercício 7 - Use AND (&&) em uma condição.
let idade3 = 20;
let temCarteira = true;

console.log(idade3 >= 18 && temCarteira);
// ________________________________________________________
    
// Exercício 8 - Use OR (||) em uma condição.
let temDinheiro = false;
let temCartao = true;

console.log(temDinheiro || temCartao);
// __________________________________________________________

// Exercício 9 - Negue um valor boolean.
let estaChovendo = true;
console.log(!estaChovendo);

// ___________________________________________________________

// Exercício 10 - Compare texto e número;
let num5 = 20
let texto = "olaaa"
let resultado5 = texto === num5
console.log (resultado5)

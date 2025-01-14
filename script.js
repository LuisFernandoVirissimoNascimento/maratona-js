/*1. Soma de Dois Números
Descrição:
Peça ao usuário dois números e exiba a soma deles.
Tarefas:
Crie uma função soma que receba dois números como parâmetros.
Exiba o resultado no console ou em um alert.*/

function exercicio1(numero1Texto, numero2Texto){
    var numero1 = parseInt(numero1Texto);
    var numero2 = parseInt(numero2Texto);
    var soma = numero1 + numero2;
    console.log("1º Exercício : " + soma);
}

var numero1 = prompt("Qual o primeiro número para o 1º Exercício?");
var numero2 = prompt("Qual o segundo número para o 1º Exercício?");
exercicio1(numero1,numero2);

/*
2. Verificação de Par ou Ímpar
Descrição:
Peça ao usuário um número e diga se ele é par ou ímpar.
Tarefas:
Crie uma função que receba um número.
Verifique se o número é divisível por 2.
Exiba no console "O número é par" ou "O número é ímpar".*/

function exercicio2(numero1Texto){
    var numero1 = parseInt(numero1Texto);
    if(numero1 % 2 === 0){
        console.log("2º Exercício : Par");
    }else{        
        console.log("2º Exercício : Ímpar");
    }
}

var numero1Ex2 =  prompt("Qual o número a ser checado par ou ímpar para o 2º Exercício?");
exercicio2(numero1Ex2);

/*

3. Contagem de Números
Descrição:
Exiba os números de 1 a 10 usando um loop.
Tarefas:
Utilize um loop for para imprimir os números no console.
Modifique o exercício para usar um while.*/

function exercicio3(){
    var numero1Ex3 = 0;
    while(numero1Ex3 != 10){
        numero1Ex3++;
        console.log("3º Exercício : " + numero1Ex3);
    }
}

exercicio3();
/*

4. Tabuada de um Número
Descrição:
Crie uma tabuada para um número informado pelo usuário.
Tarefas:
Peça ao usuário um número.
Use um loop for para multiplicar o número de 1 a 10.
Exiba o resultado no console.*/

function exercicio4(numero1Texto){
    var numero1 = parseInt(numero1Texto);
    for (let index = 1; index < 11; index++) {
        var multiplicacao = numero1 * index;
        console.log("4º Exercício : " + multiplicacao)        
    }
}

var numero1Ex4 =  prompt("Qual o número a ser checado a tabela para o 4º Exercício?")
exercicio4(numero1Ex4);
/*

5. Encontrar o Maior Número em uma Lista
Descrição:
Dado um array de números, encontre o maior valor.
Tarefas:
Crie um array como [3, 7, 2, 9, 5].
Use um loop para comparar os números e encontrar o maior.
Exiba o maior número no console.*/

function exercicio5(){
    var arrayEx5 = [3,7,2,9,5];
    var maiorNumero = 0;
    for (let index = 0; index < arrayEx5.length; index++) {
        if(arrayEx5[index] > maiorNumero){
            maiorNumero = arrayEx5[index]
        }        
    }
    console.log("5º Exercício : " + maiorNumero);
}

exercicio5();

/*

6. Inverter uma Palavra
Descrição:
Peça ao usuário uma palavra e exiba-a invertida.
Tarefas:
Crie uma função que receba uma string.
Converta a string para um array com o método split.
Inverta a ordem com o método reverse e transforme novamente em string com join.*/

function exercicio6(palavra){
    var invertida = palavra.split("").reverse().join("");
    console.log("6º Exercício : " + invertida)
}

var palavra = prompt("Qual a palavra para ser invertida?")
exercicio6(palavra);

/*

7. Soma de Elementos de um Array
Descrição:
Calcule a soma dos elementos de um array.
Tarefas:
Crie um array como [1, 2, 3, 4, 5].
Use um loop ou o método reduce para somar os valores.
Exiba o resultado no console.*/

function exercicio7(){
    var arrayEx7 = [1,2,3,4,5];
    var soma = 0;
    for (let index = 0; index < arrayEx7.length; index++) {
        soma += arrayEx7[index];        
    }
    console.log("7º Exercício : " + soma);
}

exercicio7();

/*

8. Número Primo
Descrição:
Verifique se um número informado pelo usuário é primo.
Tarefas:
Crie uma função que receba um número.
Verifique se ele é divisível apenas por 1 e por ele mesmo.
Exiba "É primo" ou "Não é primo".*/

function exercicio8(numero1Texto) {
    numero1Ex8 = parseInt(numero1Texto);
    for (let index = 2; index <= Math.sqrt(numero1Ex8); index++) {
      if (numero1Ex8 % index === 0) {
        return console.log("8º Exercício : Não é primo")
      }
    }
    
    console.log("8º Exercício : É primo")
  }

var numero1Ex8 = prompt("Qual o número a ser verificado se é primo para o 8º exercício.")

exercicio8(numero1Ex8);

/*

9. Fatorial de um Número
Descrição:
Calcule o fatorial de um número informado pelo usuário.
Tarefas:
Crie uma função que receba um número.
Use um loop para multiplicar os números de 1 até o número informado.
Exiba o resultado no console.*/

function exercicio9(numero1Texto) {
    var numero1Ex9 = parseInt(numero1Texto);
    var fatorial = 1;
    for (let index = 1; index <= numero1Ex9; index++) {
      fatorial *= index;
    }
    console.log("9º Exercício : " + fatorial);
  }

var numero1Ex9 = prompt("Qual o número a ser informado o fatorial para o 9º exercício.")

exercicio9(numero1Ex9);
/*

10. Verificar Palíndromo
Descrição:
Verifique se uma palavra informada pelo usuário é um palíndromo (lê-se igual de trás para frente).
Tarefas:
Crie uma função que receba uma string.
Inverta a string e compare com o original.
Exiba no console se a palavra é ou não um palíndromo.*/

function exercicio10(palavra){
    var invertida = palavra.split("").reverse().join("");
    if(invertida == palavra){
        console.log("10º Exercício : É palíndromo");
    }else{
        console.log("10º Exercício : Não é palíndromo");
    }
}

var palindromo = prompt("Qual a palavra para ser checada se é palíndromo para o 10º exercício?")
exercicio10(palindromo);

/*

11. Contar Vogais em uma Frase
Descrição:
Dada uma frase, conte o número de vogais.
Tarefas:
Peça ao usuário uma frase.
Use um loop para verificar cada caractere.
Conte as vogais (a, e, i, o, u) e exiba o total.*/

function exercicio11(frase){
    var arrayEx11 = frase.split("");
    let totalVogais = 0;
    for (let index = 0; index < arrayEx11.length; index++) {
        if(arrayEx11[index] == "a" || arrayEx11[index] == "e" || arrayEx11[index] == "i" || arrayEx11[index] == "o" || arrayEx11[index] == "u"){
            totalVogais++;
        }        
    }

    console.log("11º Exercício : " + totalVogais);
}

var fraseEx11 = prompt("Qual a frase a ser checada a total de vogais para o 11º exercício.");

exercicio11(fraseEx11);
/*

12. Gerar Números Aleatórios
Descrição:
Gere um número aleatório entre 1 e 100.
Tarefas:
Use a função Math.random e ajuste o intervalo para 1 a 100.
Exiba o número gerado no console.*/

function exercicio12(){
    var randomNumber = Math.floor(Math.random() * 100);
    console.log("12º Exercício : " + randomNumber);
}

exercicio12();
/*

13. Substituir Números Negativos por Zero
Descrição:
Dado um array de números, substitua todos os números negativos por zero.
Tarefas:
Crie um array como [4, -3, 2, -1, 0].
Use um loop para verificar cada número.
Substitua os números negativos por 0 e exiba o array no console.*/

function exercicio13(){
    var arrayEx13 = [4,-3,2,-1,0];
    for (let index = 0; index < arrayEx13.length; index++) {
        if(arrayEx13[index] < 0) arrayEx13[index] = 0;        
    }
    console.log("13º Exercício : " + arrayEx13);
}

exercicio13();
/*

14. Verificar Palavras Proibidas em um Texto
Descrição:
Verifique se uma frase contém palavras proibidas.
Tarefas:
Crie um array de palavras proibidas como ['palavra1', 'palavra2'].
Peça ao usuário uma frase.
Verifique se a frase contém alguma palavra do array e exiba uma mensagem de alerta.*/

function exercicio14(frase){
    let arrayEx14 = frase.split(" ");
    let arrayPalavrasProbidas = ["palavra1","palavra2"];
    for (let index = 0; index < arrayEx14.length; index++) {
        if(arrayPalavrasProbidas.includes(arrayEx14[index])) alert("Tem palavra proibida no 14º exercício.");        
    }
}

var fraseEx14 = prompt("Qual a frase a ser checada palavras proibidas para o 14º exercício")

exercicio14(fraseEx14);

/*

15. Gerar uma Lista de Números Pares
Descrição:
Crie uma lista de números pares entre 1 e 20.
Tarefas:
Use um loop para gerar os números pares.
Adicione os números a um array e exiba-o no console.
*/

function exercicio15(){
    let arrayEx15 = [];
    for (let index = 1; index < 21; index++) {        
        if(index % 2 === 0){
            arrayEx15.push(index);
        }        
    }
    console.log("15º Exercício : " + arrayEx15);
}

exercicio15();
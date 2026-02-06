/*Escreva em JavaScript um programa que informe o retorno de um investimento
(montante) com base nos valores do capital inicial, tempo em meses e taxa de juros
mensal, fornecidos pelo usuário.*/


let capital= (prompt ("Informe o capital inicial."))
let taxa = (prompt ("Informe aporcentagem da taxa mensal."))
let tempo = (prompt ("Informe o tempo em meses que voce ria deixar o investimento."))

alert("Olá, seu investimento rendera " + (capital *((taxa / 100 +1) ** tempo)))   

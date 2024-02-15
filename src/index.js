const perguntas = [
    {
        pergunta: "Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        resposta: [
            "var",
            "let",
            "const"
        ],
        correta: 2
    },
    {
        pergunta: "Qual dessas opções é uma maneira válida de comentar seu código em JavaScript?",
        resposta: [
            "<!-- Comment -->",
            "// Comment",
            "/* Comment */"
        ],
        correta: 1
    },
    {
        pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
        resposta: [
            ".push()",
            ".pop()",
            ".join()"
        ],
        correta: 0
    },
    {
        pergunta: "Qual destes operadores é usado para comparar igualdade em valor e tipo em JavaScript?",
        resposta: [
            "==",
            "===",
            "!="
        ],
        correta: 1
    },
    {
        pergunta: "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
        resposta: [
            "parseInt()",
            "parseFloat()",
            "String()"
        ],
        correta: 0
    },
    {
        pergunta: "Como você declara uma função em JavaScript?",
        resposta: [
            "function myFunction()",
            "myFunction = function()",
            "let myFunction = () => {}"
        ],
        correta: 0
    },
    {
        pergunta: "Qual desses métodos é usado para remover o último elemento de um array em JavaScript?",
        resposta: [
            ".remove()",
            ".splice()",
            ".pop()"
        ],
        correta: 2
    },
    {
        pergunta: "Qual destas declarações de loop é usada apenas para interação sobre propriedades de um objeto em JavaScript?",
        resposta: [
            "for loop",
            "while loop",
            "for...in loop"
        ],
        correta: 2
    },
    {
        pergunta: "Qual destas é uma maneira de declarar uma string em JavaScript?",
        resposta: [
            "'string'",
            "`string`",
            '"string"'
        ],
        correta: 2
    },
    {
        pergunta: "Qual destes métodos é usado para juntar os elementos de um array em uma string em JavaScript?",
        resposta: [
            ".concat()",
            ".join()",
            ".split()"
        ],
        correta: 1
    }
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.resposta) {
        const dt= quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.resposta.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }

            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }
        
        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()


    quiz.appendChild(quizItem)
}
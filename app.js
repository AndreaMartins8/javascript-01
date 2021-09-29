// alert("olá mundo")
// função alert( )

//console.log("Olá mundo")
//console.log("Aprendendo Javascript")

/*tipos de dados JS
texto (string) --> "Andréa", "25"
número (number) --> 25
inteiro (int) --> 25
decimal (float) --> 25.9
Booleano --> Verdadeiro (true) ou falso (false)
*/

//console.log("Andréa")
//console.log(25)
//console.log(true)

/*
OPERADORES MATEMÁTICOS
+ --> adição
- --> subtração
* --> multiplicação
/ --> divisão 
*/

//console.log(10+20)
//console.log(10-3)
//console.log(3*5)
//console.log(20/4)

/* 
VARIÁVEL 
espaço reservado na memória com um nome
let --> criar variável
*/

//let nome = "Andréa"
//let idade = 25
//console.log("Olá " + nome)
//console.log(idade + 3)

let nomeDoAluno = "Andréa Martins"
let notaDoPrimeiroBimestre = 9
let notaDoSegundoBimestre = 7
let notaDoTerceiroBimestre = 8
let notaDoQuartoBimestre = 7
let media = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

let mediaFixada = media.toFixed(1)

// concactenação ( + )
console.log("Boas Vindas " + nomeDoAluno)

/*prioridade: * ou / depois +ou- colocar entre parênteses  */
console.log(mediaFixada)

if(media>= 5) {
    document.write ("Aprovado");
}

if(media<= 5) {
    document.write ("Reprovado");
}


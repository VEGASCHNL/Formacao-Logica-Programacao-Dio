//DESAFIO SURPRESA REALIZADO NA FORMAÇÃO DE LÓGICA DE PROGRAMAÇÃO PELA DIO.ME
//DIA 12/12/2024

const nomeJogo = "Pokemon Go: "
let pokemon = [
    // nome, nivel, sexo, vidaAtual, maxVida.

    ["Poochyena",2,"M",13,13],
    ["Zigzagoon",2,"F",13,13],
    ["Dragonite",5,"M",25,25],
    ["Dragonite",5,"F",24,24],
    ["Dragonite",5,"F",24,24],
    ["Poochyena",3,"F",15,15],
    ["Hurhple",2,"M",7,14]

]

console.log(nomeJogo + pokemon[6][0] + " Lvl: " + pokemon[6][1] + " Sex: " + pokemon[6][2] + " Health: " + pokemon[6][3] + "/" + pokemon[6][4] + " Cadastrado com Sucesso!")


//RESULTADO CONSOLE:

//Pokemon Go: Hurhple Lvl: 2 Sex: M Health: 7/14 Cadastrado com Sucesso!
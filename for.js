let contador = 1 
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    console
    contador ++
}

 for (let i = 1; i <= 10; i++) {
     console.log(`i = ${i}`)
 }

 const notas = [6.7, 7.4, 8.5 , 9.6]
 for(i = 0; i< notas.length;  i++) {
     console.log(`nota = ${notas [i]}`)
 }

 const pessoa = {
     nome: 'Ana', 
     sobrenome: 'Silva', 
     idade: 29, 
     peso: 64
 }

 for(let atributo in pessoa) {
     console.log(`${atributo} = ${pessoa[atributo]}`)
 }
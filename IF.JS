function SoBoaNoticia (nota) {
    if(nota >= 7 ) {
        console.log('aprovado com ' + nota)
    }
}

SoBoaNoticia(8.0)
SoBoaNoticia(6.1)

function Seforverdade(valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

Seforverdade(9)
Seforverdade(undefined)
Seforverdade(0)
Seforverdade(8)
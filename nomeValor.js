function ex() {
    const saudacao = 'opa'
    return saudacao
}

//Objetos são grupos alinhados com nomes e valores 

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90, 
    endereço: {
        longadouro: 'Rua muito legal',
        numero: 123,
    }
}

console.log(ex())
console.log(cliente) 
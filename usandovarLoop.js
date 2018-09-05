const outra = []

for (let  loka = 0; loka <10; loka++){
    outra.push(function() {
           console.log(loka)
           console.log(typeof loka)
    })
}


outra[2]()
outra[8]()
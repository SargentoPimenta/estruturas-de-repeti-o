//tabuada de 5 em for
console.log("tabuada de 5")
for(let i = 1; i<=10; i++) {
let valor=i*5
console.log('5 x' , i , "=" , valor)}


//PAR ou ÍMPAR
console.log("tabuada de 5")
let valor
let divisão = 2

for(let i = 1; i<=10; i++) {
valor=i*5
console.log('5 x ' , i , "=" , valor,".")

if (valor % divisão == 0) {
    console.log (`resultado da tabuada de 5 x ${i} é par`)
} else {
    console.log (`resultado da tabuada de 5 x ${i} é par`)
  }
}

//array
let frutas = ["abacaxi", "melão"];
    frutas.push("melancia")
let primeiro = frutas[0]  // ele receberá a primeira variável informado no array. Depedendo da posição. a variável "primeiro" receberá um valor diferente.
   console.log (primeiro)
let terceiro = frutas[2]
   console.log (terceiro)
//frutas.pop() para remover um ítem
//frutas.unshift() para adicionar um item no começo


//notas_array
let notas = [5,5,5]
let soma = 0
for(let i = 0; i<notas.length; i++){   ///notas.lengh irá verificar o tamanho do array
     soma+= notas[i]
}
   console.log (`A soma é ${soma}` )
   console.log (`A soma é ${soma/notas.length}` )











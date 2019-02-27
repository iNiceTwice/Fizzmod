// ***************** Actividad Nro 6 ******************
(function () {
    "use strict"
    console.log("***************** Actividad Nro 6 ******************")
    let x = 1
    let y = 2
    let arr = []
    let res = []
    arr.push(x, y)
    arr.forEach((n, index) => {
        console.log(`El numero en el indice ${index} es : ${n}`);
        res.push(n)
    })
    res.forEach(n => n + 1)
    console.log(res) // [2,3]
})()
// ************* Actividad 3 **************
console.log("***************** Actividad Nro 3 ******************")
let numeros = [1, 2, 3, 4]

function recorrer(array,callback){
    let arrayNuevo = [];
    for (let i = 0; i < array.length; i++)
        arrayNuevo.push(callback(array[i], i, this));
    return arrayNuevo;  
}
recorrer(numeros, numero => console.log(numero + 1)) //[2,3,4,5]
console.log(" ")
recorrer(numeros, (numero, indice) => console.log(numero + indice)) //[1,3,5,7]
console.log(" ")
recorrer(numeros, numero => console.log({ })) //[undefined,undefined,undefined,undefined]


// *********** Actividad  Nro4 *****************
console.log("***************** Actividad Nro 4 ******************")
Array.prototype.recorrerProto = function (callback) {
    let arreglo = [];
    for (let i = 0; i < this.length; i++)
        arreglo.push(callback(this[i], i, this));
    return arreglo;
};

numeros.recorrerProto(numero => console.log(numero + 1)) //[2,3,4,5]
console.log(" ")
numeros.recorrerProto((numero, indice) => console.log(numero + indice)) //[1,3,5,7]
console.log(" ")
numeros.recorrerProto(numero => console.log({ })) //[undefined,undefined,undefined,undefined]
console.log(" ")
console.log(numeros.hasOwnProperty("recorrerProto")) //false
console.log("recorrerProto" in numeros) //true

// ************ Actividad Nro 5 ****************
console.log("***************** Actividad Nro 5 ******************")
/*
* 5) Los miembros de trabajo especificados en el siguiente objeto usan su nombre como indice y su edad como valor. Separa los miembros mayores de 40 años y menores de 25 años en un array y todo el resto en un segundo array. Ambos arrays tienen que estar compuestos únicamente por los nombres de las personas. Por último cada array tiene que estar ordenado alfabeticamente.
*/

let miembros = { pedro: 35, ana: 18, carlos: 43, juan: 21, maria: 29, angela: 31, jose: 23, mariana: 41, eugenio: 19 }

let edad40_25 = [];
let edadResto = [];

for(let i in miembros){
    if (miembros[i] > 40 || miembros[i] < 25){
        edad40_25.push(i);
        edad40_25.sort();
    }else{
        edadResto.push(i);
        edadResto.sort();
    }
}

console.log(edad40_25)
console.log(edadResto)



   
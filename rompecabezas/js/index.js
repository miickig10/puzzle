const container = document.querySelector("#container"); // Selecciono el contenedor.

const f = document.createDocumentFragment(); // Creo un fragmento para no sobrecargar

var counter = 1; // Creo un contador para generar un id no aleatorio pero diferente en cada vuelta de mi ciclo for.

var images = ["./puzzel/img1.png",
"./puzzel/img2.png",
"./puzzel/img3.png",
"./puzzel/img4.png",
"./puzzel/img5.png",
"./puzzel/img6.png",
"./puzzel/img7.png",
"./puzzel/img8.png",
"./puzzel/img9.png",
"./puzzel/img10.png",
"./puzzel/img11.png",
"./puzzel/img12.png",
"./puzzel/img13.png",
"./puzzel/img14.png",
"./puzzel/img15.png",
"./puzzel/img16.png",
"./puzzel/img17.png",
"./puzzel/img18.png",
"./puzzel/img19.png",
"./puzzel/img20.png"];


for (let index = 0; index < 20; index++) {    // Creo 20 divs con la class pieza. cada elemento tiene un id diferente.
    const div = document.createElement("div")
    div.className = ("pieza")
    div.id = `div${counter++}`
    f.appendChild(div)
}

window.onload = function() {
const div1 = document.getElementById("div1");
const img = document.createElement("img");
img.src="./puzzle/img1.png";
console.log(div1)
console.log(img)

div1.appendChild(img)

    
};




container.appendChild(f);
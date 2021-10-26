"use strict"

const Listicons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

/*
    1 - ciclo sul mio array per recuperare ogni singola icona
    2 - pusho in un nuovo array l'icona presa ad ogni ciclo in base al tipo
    3 - stampo in html il mio array, in base a cosa seleziono nel select

*/

const select = document.getElementById("category-icons")
const row = document.querySelector(".row")
const valueSelect = document.getElementById("category-icons").value
console.log(valueSelect);


const arrayAnimal = []
const arrayVegetable = []
const arrayUser = []


for (let i = 0; i < Listicons.length; i++) {
	const {type} = Listicons[i];
	if (type === "animal"){
		arrayAnimal.push(Listicons[i])
	}
	if (type === "vegetable"){
		arrayVegetable.push(Listicons[i])
	}
	if (type === "user"){
		arrayUser.push(Listicons[i])
	}
}


function stampInHTML(array){
    row.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        const {name, prefix, type, family} = array[i];
        
        row.innerHTML += `  <div class="my-card ${type}">
                                <i class="${family} ${prefix}${name}"></i>
                                <h5>${name}</h5>
                            </div>`
    }
}

stampInHTML(Listicons)
select.addEventListener("change", function () {
    
    if (select.value === "all") {
        stampInHTML(Listicons)
    }
    if (select.value === "animal") {
        stampInHTML(arrayAnimal)
    }
    if (select.value === "vegetable") {
        stampInHTML(arrayVegetable)
    }
    if (select.value === "user") {
        stampInHTML(arrayUser)
    }
    
})
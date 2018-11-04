function err() {
	document.getElementById("loading").style.display = "none";
	const btn = document.querySelectorAll('button');
	btn[0].textContent = "Some Error Occured";
}

function onResponse(response) {
	if(response.ok) {
		return response.json();
	}
	else {
		err()
		return ;
	}
}

class Car {
	constructor(carContainer, maker, model, price) {
		const card = document.createElement('div');
		const make = document.createElement('span');
		const mode = document.createElement('span');
		const pric = document.createElement('span');
		make.innerHTML = maker;
		mode.innerHTML = model;
		pric.innerHTML = price;
		card.className = "card";
		make.className = "title";
		mode.className = "title";
		pric.className = "price";
		card.appendChild(make)
		card.appendChild(mode)
		card.appendChild(pric);
		carContainer.appendChild(card);
	}
}

function printCars(data) {
	this.carInfo = data;
	const carContainer = document.querySelector('#cards');
	carContainer.innerHTML = '';
	for(const info of this.carInfo) {
		const car = new Car(carContainer, info.maker, info.model, info.price);
	}
	const btn = document.querySelectorAll('button');
	btn[0].textContent = "Items are loaded";
}

function load() {
	document.getElementById("loading").style.display = "flex";
	const btn = document.querySelectorAll('button');
	btn[0].textContent = "Loading";
	fetch("http://demo4296963.mockable.io/listCars").catch(err).then(onResponse).then(printCars);
}

const btn = document.querySelectorAll('button');
for (const i of btn) {
    i.addEventListener('click', load);
}

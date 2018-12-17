import Planet from './Planet.js'
import AltPlanet from './AltPlanet.js'

export default class Main {
	constructor() {
		this.planets = []
		this.createPlanets()
	}


	createPlanets() {
		const randNum = Math.floor(Math.random() * 5) + 5
		for (var i = 0; i < randNum; i++) {
			this.planets.push(new Planet())
		}
		console.log(this.planets)
		this.checkHabitablePlanet()
		// renderPlanets()
	}

	checkHabitablePlanet() {
		let index = 0 
		for (let i = 0; i < this.planets.length; i++) {
			console.log(this.planets[i].isHabitable)
			if (!this.planets[i].isHabitable) {
				index += 1
			}
		}
		if (index >= this.planets.length)
		{
			this.planets.push(new AltPlanet())
			console.log(this.planets)
		}

	}

	// Exemple pour mettre dans le dom 
	renderPlanets() {
		for (var i = 0; i < planets.length; i++) {
			// on crée l'élement dom qui doit représenter la planète (mucho simplifié, tu auras surement d'autres trucs à faire)
			const planetElement = document.createElement('div')
			planetElement.style.color = planets[i].color
			planetElement.style.width = planets[i].width
			planetElement.innerText = planets[i].name

			if (planets[i].isAlien) {
				planetElement.classList.add('planet-alien')
			} else {
				planetElement.classList.add('planet-normal')
			}

			// on met la planete dans le dom
			document.body.appendChild(planetElement)
		}
	}
}
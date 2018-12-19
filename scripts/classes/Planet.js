export default class Planet {
	constructor(config = {
		habitable: false
	}) {
		this.habitable = config.habitable
		this.type = this.getRandomPlanetType()
		this.name = this.getPlanetName()
		this.width = this.getPlanetWidth()
		this.weight = this.getPlanetWeight()
		this.atmosphere = this.getPlanetAtmosphere()
		this.temperature = this.getPlanetTemperature()
		this.liquid = this.getPlanetLiquid()
		this.gravity = this.getPlanetGravity()
		this.pressure = this.getPlanetPressure()
		this.distance = this.getPlanetDistance()
		this.day = this.getPlanetDay()
		this.year = this.getPlanetYear()
		this.attribute = this.getPlanetAttribute()
		this.isHabitable = this.checkHabitable()
		this.actions = {
			checkHabitable: this.checkHabitable.bind(this)
		}
	}

	getPlanetName() {
		// Random name for the new planet
		return ((1 << 24) * Math.random() | 0).toString(16)
	}

	getRandomPlanetType() {
		// Function to get a higher probability on some parameters 

		const salt = Math.floor(Math.random() * 100)
		if (salt < 60) {
			return 1
		} else if (salt > 60 && salt < 90) {
			return 2
		} else {
			return 3
		}


	}

	getPlanetWidth() {
		// Give a random width to the new planet
		if (this.type === 1) {
			return (Math.random() * 1050) + 4500
		} else if (this.type === 2) {
			return (Math.random() * 45000) + 1500
		} else {
			return (Math.random() * 100000) + 50000
		}
	}

	getPlanetWeight() {
		// Give a Weigh depending on the width of the planet
		if (4500 < this.width && this.width < 15000) {
			return (Math.random() * 7) + 0.3
		} else if (15000 < this.width && this.width < 50000) {
			return (Math.random() * 75) + 8
		} else {
			return (Math.random() * 1820) + 80
		}
	}

	getPlanetAtmosphere() {
		// Define if there is an atmosphere and if the planet is a gas planet or not
		if (!!Math.round(Math.random() * 1) === true) {
			const isgas = !!Math.round(Math.random() * 1)
			return {
				isgas: isgas,
				present: true,
				composition: this.getPlanetAtmosphereComposition(isgas)
			}
		} else {
			const isgas = !!Math.round(Math.random() * 1)
			return {
				isgas: isgas,
				present: false,
				composition: this.getPlanetAtmosphereComposition(isgas)
			}
		}
	}

	getPlanetAtmosphereComposition(_isgas) {
		//Composition de l'atmosphère parmis les gaz suivants 
		const available = [
			'Argon ',
			'O2 ',
			'CO ',
			'H2O ',
			'Monoxyde d’azote ',
			'Néon ',
			'Krypton ',
			'Xénon ',
			'Ozone ',
			'Méthane ',
			'Hélium ',
			'Dioxyde de soufre ',
			'Oxygène ',
			'Sodium ',
			'Hydrogène ',
			'Azote '
		]

		const elements = [
			'CO2',
			'Diazote'
		]

		let remaining = 3

		for (let i = 0; i < available.length; i++) {
			if (!!Math.round(Math.random()) && remaining > 0) {
				elements.push(available[i])
				remaining -= 1
			}
		}

		return elements
	}

	getPlanetLiquid() {
		// Etat de l'eau sur la planète s'il y en a 
		for (let j = 0; j < this.atmosphere.composition.length; j++) {

			if (this.atmosphere.composition.includes('H2O')) {

				if (this.temperature < 0) {
					return "à l'état solide"
				} else if (0 < this.temperature && this.temperature < 100) {
					return "à l'état liquide"
				} else {
					return "à l'état gazeux"
				}
			} else {
				return "non présente"
			}
		}
	}

	getPlanetGravity() {
		// Gravité sur la planète en m/s^(-2)
		if (0.3 < this.weight && this.weight < 7.3) {
			return (Math.random() * 2) + 3
		} else if (7.3 < this.weight && this.weight < 83) {
			return (Math.random() * 5) + 5
		} else {
			return (Math.random() * 15) + 10
		}
	}

	getPlanetPressure() {
		//Pression atmosphérique en bar
		if (this.type === 1) {
			return (Math.random() * 50) + 0.1
		} else if (this.type === 2) {
			return (Math.random() * 25) + 50
		} else {
			return (Math.random() * 25) + 75
		}
	}

	getPlanetTemperature() {
		// Temperature en °C
		return Math.floor((Math.random() * 700) - 300)
	}

	getPlanetDistance() {
		//Distance par rapport au soleil en 10^6 km
		if (-300 < this.temperature && this.temperature < -50) {
			return (Math.random() * 3500) + 2500
		} else if (-50 < this.temperature && this.temperature < 150) {
			return (Math.random() * 2300) + 200
		} else {
			return (Math.random() * 160) + 40
		}
	}

	getPlanetYear() {
		// cycle annuel en années
		if (40 < this.distance && this.distance < 200) {
			return (Math.random() * 2) + 0.1
		} else if (200 < this.distance && this.distance < 1500) {
			return (Math.random() * 43) + 2
		} else {
			return (Math.random() * 85) + 45
		}
	}

	getPlanetDay() {
		// Cycle journalier sur la planète en heures
		if (this.type === 1) {
			return Math.floor((Math.random() * 140) + 10)
		} else if (this.type === 2) {
			return Math.floor((Math.random() * 750) + 150)
		} else {
			return Math.floor((Math.random() * 5000) + 900)
		}
	}


	getPlanetAttribute() {
		const rings = !!Math.round(Math.random())
		const moons = !!Math.round(Math.random())

		if (moons === true) {
			const moonNumber = Math.floor(Math.random() * 7) + 1
			return {
				moons: true,
				moonNumber: moonNumber
			}
		}

		else if (rings === true) {
			const ringNumber = Math.floor(Math.random() * 7) + 1
			return {
				rings: true,
				ringNumber: ringNumber
			}
		}
		
		return {
			rings: false,
			moons : false
		}
	}

	checkHabitable() {
		if (!this.atmosphere.composition.includes('H2O') || !this.atmosphere.composition.includes('O2')) {
			return false
		}
		if (this.temperature < -100 || this.temperature > 70) {
			return false
		}
		if (this.gravity < 5 || this.gravity > 11) {
			return false
		}
		if (this.year < 0.8 || this.year > 2) {
			return false
		}
		if (this.pressure < 0.8 || this.pressure > 2) {
			return false
		}
		if (this.weight < 2 || this.weight > 8) {
			return false
		}
		if (this.atmosphere.present === false) {
			return false
		}
		if (this.distance < 100 || this.distance > 300) {
			return false
		}
		if (this.day < 20 || this.day > 28) {
			return false
		}
		if (this.attribute.moons === false) {
			return
		}
		return true
	}
}
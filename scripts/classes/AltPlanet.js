export default class AltPlanet {
    constructor() {
        this.altPlanet = true
        this.name = this.getAltPlanetName()
        this.width = this.getAltPlanetWidth()
        this.weight = this.getAltPlanetWeight()
        this.atmosphere = this.getAltPlanetAtmosphere()
        this.temperature = this.getAltPlanetTemperature()
        this.liquid = this.getAltPlanetLiquid()
        this.gravity = this.getAltPlanetGravity()
        this.pressure = this.getAltPlanetPressure()
        this.distance = this.getAltPlanetDistance()
        this.day = this.getAltPlanetDay()
        this.year = this.getAltPlanetYear()
        this.attribute = this.getAltPlanetAttribute()
    }

    getAltPlanetName() {
        // Random name for the new planet
        return ((1 << 24) * Math.random() | 0).toString(16)
    }

    getAltPlanetWidth() {
        // Give a random width to the new planet

        return (Math.random() * 1050) + 4500
    }

    getAltPlanetWeight() {
        // Give a Weigh depending on the width of the planet
        return (Math.random() * 6) + 2
    }

    getAltPlanetAtmosphere() {
        // Define if there is an atmosphere and if the planet is a gas planet or not
        const isgas = !!Math.round(Math.random() * 1)
        return {
            isgas: isgas,
            present: true,
            composition: this.getAltPlanetAtmosphereComposition(isgas)
        }

    }

    getAltPlanetAtmosphereComposition(_isgas) {
        //Composition de l'atmosphère parmis les gaz suivants 
        const available = [
            'Argon ',
			'CO ',
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
            'O2',
            'H2O'
        ]

        let remaining = 2

        for (let i = 0; i < available.length; i++) {
            if (!!Math.round(Math.random()) && remaining > 0) {
                elements.push(available[i])
                remaining -= 1
            }
        }

        return elements
    }

    getAltPlanetLiquid() {
        // Etat de l'eau sur la planète s'il y en a 

        if (this.temperature < 0) {
            return "à l'état solide"
        } else {
            return "à l'état liquide"
        }

    }

    getAltPlanetGravity() {
        // Gravité sur la planète en m/s^(-2)
        return (Math.random() * 6) + 5
    }

    getAltPlanetPressure() {
        // Pression atmosphérique en bar
        return (Math.random() * 1.2) + 0.8
    }

    getAltPlanetTemperature() {
        // Temperature en °C
        return Math.floor((Math.random() * 170) - 100)
    }

    getAltPlanetDistance() {
        //Distance par rapport au soleil en 10^6 km

        return (Math.random() * 300) + 100
    }

    getAltPlanetYear() {
        // cycle annuel en années
        return (Math.random() * 1.2) + 0.8
    }

    getAltPlanetDay() {
        // Cycle journalier sur la planète en heures

        return Math.floor((Math.random() * 8) + 20)

    }


    getAltPlanetAttribute() {
        const rings = !!Math.round(Math.random())
        const moons = true
        const moonNumber = Math.floor(Math.random() * 7) + 1
        return {
            moons: moons,
            moonNumber: moonNumber
        }


        if (rings === true) {
            const ringNumber = Math.floor(Math.random() * 7) + 1
            return {
                rings: true,
                ringNumber: ringNumber
            }
        }
    }

}
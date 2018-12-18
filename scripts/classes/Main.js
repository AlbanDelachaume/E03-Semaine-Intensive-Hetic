import Planet from './Planet.js'
import AltPlanet from './AltPlanet.js'

export default class Main {
	constructor() {
		this.planets = []
		this.createPlanets()
	}


	createPlanets() {
		const randNum = Math.floor(Math.random() * 5) + 2
		for (var i = 0; i < randNum; i++) {
			this.planets.push(new Planet())
		}
		console.log(this.planets)
		this.checkHabitablePlanet()
		this.renderPlanets()
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
			
		}

	}

	renderPlanets() {
		const distanceArray = this.planets.sort((a,b) => a.distance-b.distance )
		console.log(distanceArray)
		const planets_create = document.querySelector('.planets-create')
		
		for (let i = 0; i < this.planets.length; i++) {
			
			const planetElement = document.createElement('div')
			const data_hover = document.createElement('div')
			planetElement.classList.add(`planet-${i+1}`)
			data_hover.classList.add(`data-hover-${i+1}`)
			planetElement.setAttribute(`is-${this.planets[i].distance}`, '')
			
			this.planetWidth(planetElement, i)

			const planetAttribute = this.planets[i].attribute
			console.log(this.planets[i].attribute)
			if (planetAttribute) {
				if (planetAttribute.rings === true)
				{
					const randImg = Math.floor(Math.random() * 5) + 1
					planetElement.style.backgroundImage = `url('/images/rings/${randImg}.png')`
					planetElement.style.backgroundSize = `contain`
					planetElement.style.backgroundPosition = `center`
					planetElement.style.backgroundRepeat = `no-repeat`
				}
				else
				{
					const randImg = Math.floor(Math.random() * 5) + 1
					planetElement.style.backgroundImage = `url('/images/nothing/${randImg}.png')`
					planetElement.style.backgroundSize = `contain`
					planetElement.style.backgroundPosition = `center`
					planetElement.style.backgroundRepeat = `no-repeat`
				}
			}

			// data_hover.style.position = `absolute`
			// data_hover.style.background = `white`
			// data_hover.style.width = `8%`
			// data_hover.style.height = `40%`
			// data_hover.style.left = `3%`
			// data_hover.style.top = `-18%`
			// data_hover.style.visibility = `hidden`
			
			planets_create.appendChild(planetElement)
			planetElement.appendChild(data_hover)
			console.log(planetElement)
		}
	}


	planetWidth(widthStyle, i){
		if (4500 < this.planets[i].width && this.planets[i].width < 15000) 
		{
			widthStyle.style.width = '20%'
			widthStyle.style.height = '40%'
		} 
		else if (15000 < this.planets[i].width && this.planets[i].width < 50000) {
			widthStyle.style.width = '20%'
			widthStyle.style.height = '50%'
		} 
		else {
			widthStyle.style.width = '20%'
			widthStyle.style.height = '60%'
		}
	}

	

}

const popup_presentation = () =>
{
	const section_1 = document.querySelector('#section1')
	
	const presentation = document.createElement('div')
	presentation.classList.add('presentation')
	section_1.appendChild(presentation)

	const title_presentation = document.createElement('h1')
	title_presentation.classList.add('title-presentation')
	presentation.appendChild(title_presentation)
	title_presentation.textContent = "Bienvenue “aventurier(e)” dans Home Away. "

	const text_presentation = document.createElement('p')
	text_presentation.classList.add('text-presentation')
	presentation.appendChild(text_presentation)
	text_presentation.textContent = "Je vous attendais ! J'espère que vous êtes prêt(e) à voyager dans l’espace, car oui, tout est possible aujourd’hui ! Le voyage Terre Neptune se fait bien en 5 heures. ”Pourquoi voyager ?” vous allez dire, c’est simple, avec plus de 7,5 milliards d’individus sur la planète Terre, l’Homme est en quête d’habitat pour préserver son espèce. Vous êtes responsable de cette quête, à vous de trouver une nouvelle “Terre” pour l’humanité !"

	const button_presentation = document.createElement('a')
	button_presentation.classList.add('button-presentation')
	presentation.appendChild(button_presentation)
	button_presentation.textContent = "START"

	const img_presentation = document.createElement('div')
	img_presentation.classList.add('img-presentation')
	presentation.appendChild(img_presentation)
	img_presentation.style.backgroundImage = `url('../images/presentation.png')`
	img_presentation.backgroundSize = `contain`
	img_presentation.style.backgroundPosition = `center`
	img_presentation.style.backgroundRepeat = `no-repeat`
	img_presentation.style.zIndex = `3`

	button_presentation.addEventListener('click', () =>
	{
		presentation.classList.remove('presentation')
		title_presentation.classList.remove('title-presentation')
		text_presentation.style.display = `none`
		button_presentation.classList.remove('button-presentation')
		img_presentation.classList.remove('img-presentation')
		
	})
	
}
popup_presentation()


import Planet from './Planet.js'
import AltPlanet from './AltPlanet.js'

export default class Main {
	constructor() {
		this.planets = []
		this.createPlanets()
	}


	createPlanets() {
		const randNum = Math.floor(Math.random() * 2) + 5
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

			const data_title_hover = document.createElement('div')
			data_title_hover.classList.add(`data_title_hover-${i+1}`)


			planetElement.setAttribute(`is-${this.planets[i].distance}`, '')
			
			this.planetWidth(planetElement, i)

			const planetAttribute = this.planets[i].attribute
			console.log(this.planets[i].attribute)
			if (planetAttribute) {
				if (planetAttribute.rings === true)
				{
					const randImg = Math.floor(Math.random() * 14) + 1
					planetElement.style.backgroundImage = `url('/images/rings/${randImg}.png')`
					planetElement.style.backgroundSize = `contain`
					planetElement.style.backgroundPosition = `center`
					planetElement.style.backgroundRepeat = `no-repeat`
				}
				else
				{
					const randImg = Math.floor(Math.random() * 14) + 1
					planetElement.style.backgroundImage = `url('/images/nothing/${randImg}.png')`
					planetElement.style.backgroundSize = `contain`
					planetElement.style.backgroundPosition = `center`
					planetElement.style.backgroundRepeat = `no-repeat`
				}
			}

			planets_create.appendChild(planetElement)
			planetElement.appendChild(data_hover)
			planetElement.appendChild(data_title_hover)
			console.log(planetElement)

			this.planetDatas(data_hover, i)
			this.planetName(data_title_hover, i)
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

	planetName(data_title_hover, i)
	{
		const seeName = this.planets[i].name

		data_title_hover.innerHTML = `<p>${seeName}</p>`
		
	}

	planetDatas(data_hover, i)
	{

	const seeDistance = this.planets[i].distance
	const seeWeight = this.planets[i].weight
	const seeComposition = this.planets[i].atmosphere.composition
	const seeTemperature = this.planets[i].temperature
	const seeWater = this.planets[i].liquid
	const seeGravity = this.planets[i].gravity 
	const seeYear = this.planets[i].year
	const seeDay = this.planets[i].day
	const seeMoon = this.planets[i].attribute.moons
	
	
	
	if(seeMoon === true)
	{
	
	data_hover.innerHTML = `
	<p> Distance = ${Math.floor(seeDistance)} million km (10^6)</p>
	<p> Masse = ${Math.round(seeWeight * 100) / 100} * 10^24 kg
	<p> Atmosphère = ${seeComposition}</p>
	<p> Température = ${seeTemperature} °C </p>
	<p> Eau ${seeWater}</p>
	<p> Gravité = ${Math.round(seeGravity * 100) / 100} m/s^(-2)</p>
	<p> Cycle annuel = ${Math.round(seeYear * 100) / 100} an(s)</p>
	<p> Cycle journalier = ${seeDay} h</p>
	<p>Possède ${this.planets[i].attribute.moonNumber} lunes</p>`
	} 
	else 
	{
	data_hover.innerHTML = `
	<p> Distance = ${Math.floor(seeDistance)} million km (10^6)</p>
	<p> Masse = ${Math.round(seeWeight * 100) / 100} * 10^24 kg
	<p> Atmosphère = ${seeComposition}</p>
	<p> Température = ${seeTemperature} °C </p>
	<p> Eau ${seeWater}</p>
	<p> Gravité = ${Math.round(seeGravity * 100) / 100} m/s^(-2)</p>
	<p> Cycle annuel = ${Math.round(seeYear * 100) / 100} an(s)</p>
	<p> Cycle journalier = ${seeDay} h</p>
	<p>Ne possède pas de lune</p>`
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

const lesson = () =>
{

	const section_1 = document.querySelector('#section1')

	const div_spaceman = document.createElement('div')
	div_spaceman.classList.add('div-spaceman')
	section_1.appendChild(div_spaceman)

	const img_spaceman = document.createElement('img')
	div_spaceman.appendChild(img_spaceman)
	img_spaceman.src = `../images/spaceman.png` 
	img_spaceman.alt = `spaceman`

	const div_book = document.createElement('div')
	div_book.classList.add('div-book')
	section_1.appendChild(div_book)

	const img_book = document.createElement('img')
	div_book.appendChild(img_book)
	img_book.src = `../images/book.png` 
	img_book.alt = `book`

	div_spaceman.addEventListener('click', () =>
	{
	
		const section_1 = document.querySelector('#section1')
		const lesson = document.createElement('div')
		lesson.classList.add('lesson')
		section_1.appendChild(lesson)

		const lesson_name = document.createElement('div')
		lesson_name.classList.add('lesson-physics')
		lesson.appendChild(lesson_name)
		
		const title_name = document.createElement('h2')
		title_name.classList.add('title-physics')
		lesson_name.appendChild(title_name)
		title_name.textContent = "Caractéristiques physiques"

		const text_name = document.createElement('p')
		text_name.classList.add('text-physics')
		lesson_name.appendChild(text_name)
		text_name.textContent = "La composition de l’atmosphère est extrêmement importante. Elle permet à l’eau de passer de l’état gazeux à l’état gazeux. Pour se faire, l’atmosphère de la planète en question doit être composé exactement de 74% d’hydrogène, de 24% d’hélium, de 1% d’oxygène et tous les autres éléments réunis ne représentent que 1% de la matière ordinaire."

		const button_next = document.createElement('a')
		button_next.classList.add('button-next-physics')
		lesson_name.appendChild(button_next)
		button_next.textContent = "SUIVANT"

		const button_previous = document.createElement('a')
		button_previous.classList.add('button-previous-physics')
		lesson_name.appendChild(button_previous)
		button_previous.textContent = "PRÉCÉDENT"

		const div_cross = document.createElement('div')
		div_cross.classList.add('div-cross')
		lesson.appendChild(div_cross)

		const img_cross = document.createElement('img')
		div_cross.appendChild(img_cross)
		img_cross.classList.add('img-cross')
		img_cross.src = `../images/cross.png` 
		img_cross.alt = `cross`

		
	div_cross.addEventListener('click', () =>
	{
		div_cross.classList.remove('div-cross')
		img_cross.style.visibility = `hidden`
		lesson.classList.remove('lesson')
		text_name.classList.remove('text-name')
		text_name.style.display = `none`
		title_name.classList.remove('title-name')
		title_name.style.display = `none`
		button_next.style.display = `none`
		button_previous.style.display = `none`
	})

	button_next.addEventListener('click', () =>
	{

	if(index === 0)
	{
		index++
		// console.log(index)
		lesson.classList.add('lesson')
		lesson_name.classList.add('lesson-atmosphere')

		title_name.classList.add('title-atmosphere')
		title_name.textContent = "Atmosphère"

		text_name.classList.add('text-atmosphere')
		text_name.textContent = "bloblo"
		text_name.style.display = `block`

		
		button_next.classList.add('button-next-atmosphere')
		button_next.classList.remove('button-next-physics')

		button_previous.classList.add('button-previous-atmosphere')

		
	}
	else if(index === 1)
	{
		index++
		console.log(index)
		lesson.classList.add('lesson')
		lesson_name.classList.add('lesson-cycle')

		title_name.classList.add('title-cycle')
		title_name.textContent = "Cycles"

		text_name.classList.add('text-cycle')
		text_name.textContent = "bloblo"
		text_name.style.display = `block`
		
		
		button_next.classList.add('button-next-cycle')
		button_next.classList.remove('button-next-atmosphere')


	}
	else if( index === 2)
	{
		
		index++
		console.log(index)
		lesson.classList.add('lesson')
		lesson_name.classList.add('lesson-interne')

		title_name.classList.add('title-interne')
		title_name.textContent = "Caractéristique internes"

		text_name.classList.add('text-interne')
		text_name.textContent = "blibli"
		text_name.style.display = `block`

		button_next.classList.add('button-next-interne')
		button_next.classList.remove('button-next-cycle')
	}
	})	
	
	
	button_previous.addEventListener('click', () =>
	{
	if(index === 1)
	{
		index--
		console.log(index)
		lesson.classList.add('lesson')
		lesson_name.classList.add('lesson-physics')

		title_name.classList.add('title-physics')
		title_name.textContent = "Caractéristiques physiques"

		text_name.classList.add('text-physics')
		text_name.textContent = "La composition de l’atmosphère est extrêmement importante. Elle permet à l’eau de passer de l’état gazeux à l’état gazeux. Pour se faire, l’atmosphère de la planète en question doit être composé exactement de 74% d’hydrogène, de 24% d’hélium, de 1% d’oxygène et tous les autres éléments réunis ne représentent que 1% de la matière ordinaire."
		text_name.style.display = `block`

		button_previous.classList.add('button-previous-physics')
		button_previous.classList.remove('button-previous-atmosphere')
	}
	else if(index === 2)
	{
		index--
		console.log(index)
		lesson.classList.add('lesson')
		lesson_name.classList.add('lesson-atmosphere')

		title_name.classList.add('title-atmosphere')
		title_name.textContent = "Atmosphère"

		text_name.classList.add('text-atmosphere')
		text_name.textContent = "bloblo"
		text_name.style.display = `block`

		button_previous.classList.remove('button-previous-physics')
		button_previous.classList.add('button-previous-cycle')
	}
	else if( index === 3)
	{
		
		index--
		console.log(index)
		lesson.classList.add('lesson')
		lesson_name.classList.add('lesson-cycle')

		title_name.classList.add('title-cycle')
		title_name.textContent = "Cycle"

		text_name.classList.add('text-cycle')
		text_name.textContent = "bloblo"
		text_name.style.display = `block`

		button_previous.classList.remove('button-previous-interne')
		button_previous.classList.add('button-previous-cycle')
	}
	})	

})
}

let index = 0
lesson()


	

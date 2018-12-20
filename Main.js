import Planet from './Planet.js'
import AltPlanet from './AltPlanet.js'

export default class Main {
	constructor() {
		this.planets = []
		this.eliminatePlanetNumber = 0
		this.createPlanets()
	}


	createPlanets() {
		const randNum = Math.floor(Math.random() * 2) + 4
		for (var i = 0; i < randNum; i++) {
			this.planets.push(new Planet())
		}
		this.checkHabitablePlanet()
		this.renderPlanets()
	}

	checkHabitablePlanet() {
		let index = 0
		for (let i = 0; i < this.planets.length; i++) {
			if (!this.planets[i].isHabitable) {
				index += 1
			}
		}
		if (index >= this.planets.length) {
			this.planets.push(new AltPlanet())

		}

	}

	renderPlanets() {
		const distanceArray = this.planets.sort((a, b) => a.distance - b.distance)
		const planets_create = document.querySelector('.planets-create')

		for (let i = 0; i < this.planets.length; i++) {

			const planetElement = document.createElement('div')
			const newPlanet = document.createElement('div')
			const data_hover = document.createElement('div')
			const planetEliminate = document.createElement('div')
			newPlanet.dataset.ishabitable = this.planets[i].altPlanet
			newPlanet.style.opacity = 1
			newPlanet.classList.add(`planet`)
			newPlanet.classList.add(`planet-${i+1}`)
			data_hover.classList.add(`data-hover-${i+1}`)
			planetEliminate.classList.add(`eliminate`)
			planetEliminate.style.cursor = 'pointer'

			const data_title_hover = document.createElement('div')
			data_title_hover.classList.add(`data_title_hover-${i+1}`)


			planetElement.setAttribute(`is-${this.planets[i].distance}`, '')

			this.planetWidth(newPlanet, i)

			const planetAttribute = this.planets[i].attribute
			if (planetAttribute) {
				if (planetAttribute.rings === true) {
					const randImg = Math.floor(Math.random() * 14) + 1
					newPlanet.style.backgroundImage = `url('/images/rings/${randImg}.png')`
					newPlanet.style.backgroundSize = `contain`
					newPlanet.style.backgroundPosition = `center`
					newPlanet.style.backgroundRepeat = `no-repeat`
				} else {
					const randImg = Math.floor(Math.random() * 14) + 1
					newPlanet.style.backgroundImage = `url('/images/nothing/${randImg}.png')`
					newPlanet.style.backgroundSize = `contain`
					newPlanet.style.backgroundPosition = `center`
					newPlanet.style.backgroundRepeat = `no-repeat`
				}
			}

			planets_create.appendChild(planetElement)
			planetElement.appendChild(data_hover)
			planetElement.appendChild(data_title_hover)
			planetElement.appendChild(newPlanet)
			planetElement.appendChild(planetEliminate)

			this.planetDatas(data_hover, i)
			this.planetName(data_title_hover, i)
			this.eliminatePlanet(planetEliminate, newPlanet)


			newPlanet.addEventListener('mouseover', () => {
				data_hover.style.visibility = 'visible'
				data_title_hover.style.visibility = 'visible'
			})

			newPlanet.addEventListener('mouseout', () => {
				data_hover.style.visibility = 'hidden'
				data_title_hover.style.visibility = 'hidden'
			})

		}
	}


	planetWidth(widthStyle, i) {
		if (4500 < this.planets[i].width && this.planets[i].width < 15000) {
			widthStyle.style.width = '100%'
			widthStyle.style.height = '40%'
		} else if (15000 < this.planets[i].width && this.planets[i].width < 50000) {
			widthStyle.style.width = '100%'
			widthStyle.style.height = '50%'
		} else {
			widthStyle.style.width = '100%'
			widthStyle.style.height = '60%'
		}
	}

	planetName(data_title_hover, i) {
		const seeName = this.planets[i].name

		data_title_hover.innerHTML = `<p>${seeName}</p>`

	}

	planetDatas(data_hover, i) {

		const seeDistance = this.planets[i].distance
		const seeWeight = this.planets[i].weight
		const seeComposition = this.planets[i].atmosphere.composition
		const seeTemperature = this.planets[i].temperature
		const seeWater = this.planets[i].liquid
		const seeGravity = this.planets[i].gravity
		const seeYear = this.planets[i].year
		const seeDay = this.planets[i].day
		const seeMoon = this.planets[i].attribute.moons



		if (seeMoon === true) {

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
		} else {
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

	eliminatePlanet(planetEliminate, newPlanet) {
		let index = 0
		planetEliminate.addEventListener('click', () => {
			if (index === 0) {
				newPlanet.style.opacity = '0.5'
				index = 1
				this.eliminatePlanetNumber += 1
			} else {
				newPlanet.style.opacity = '1'
				index = 0
				this.eliminatePlanetNumber -= 1
			}

			const container = document.querySelector('#section1')
			const goodbye = document.createElement('div')
			const content = document.createElement('div')
			const txt = document.createElement('div')
			const gbyebtn = document.createElement('div')

			goodbye.classList.add('results')
			content.classList.add('content')
			txt.classList.add('text')
			gbyebtn.classList.add('button-continue')
			gbyebtn.innerText = "Recommencer une partie"
			gbyebtn.addEventListener('click', () => window.location = '/')

			if (this.checkGameOver()) {
				txt.innerText = "Désolé, tu n’as pas trouvé notre prochaine planète ! Réessaye, la prochaine fois sera la bonne. N’hésite pas à relire mes conseils. Mais n’oublie pas que la meilleure planète reste la notre et qu’il faut tout faire pour la préserver. "
			} else {
				txt.innerText = `Bien joué, tu as trouvé notre prochaine planète ! Nous savons à présent où aller quand toutes les ressources de notre planètes seront épuisées. Mais n’oublie pas que la meilleure planète reste la notre et qu’il faut tout faire pour la préserver. Si tu désire en savoir plus, n’hésite pas à lire notre cours plus détaillé.`
			}

			if (this.planets.length - 1 === this.eliminatePlanetNumber) {
				content.appendChild(txt)
				content.appendChild(gbyebtn)
				goodbye.appendChild(content)
				container.appendChild(goodbye)
			}
		})
	}

	checkGameOver() {
		if (this.planets.length - 1 === this.eliminatePlanetNumber) {
			if (this.checkLastPlanet()) {
				return true
			} else {
				return false
			}
		} else {
			return false
		}
	}

	checkLastPlanet() {
		const planets = document.querySelectorAll('.planet')
		let index = 0

		for (const planet of planets) {
			if (planet.dataset.ishabitable === 'true') {
				if (!parseInt(planet.style.opacity) < 1) {
					index += 1
				}
			}
		}

		if (index > 0) {
			return false
		} else {
			return true
		}
	}
}

const audio = new Audio('../sound/sound.mp3');

const popup_presentation = () => {
	const section_1 = document.querySelector('#section1')

	const presentation = document.createElement('div')
	presentation.classList.add('presentation')
	section_1.appendChild(presentation)

	const title_presentation = document.createElement('h2')
	title_presentation.classList.add('title-presentation')
	presentation.appendChild(title_presentation)
	title_presentation.textContent = "Bienvenue “aventurier(e)” dans Home Away. "

	const text_presentation_p = document.createElement('p')
	presentation.appendChild(text_presentation_p)
	text_presentation_p.textContent = "Je vous attendais ! J'espère que vous êtes prêt(e) à voyager dans l’espace, car oui, tout est possible aujourd’hui ! ”Pourquoi voyager ?” vous allez dire, c’est simple, avec plus de 7,5 milliards d’individus sur la planète Terre, l’Homme est en quête d’habitat pour préserver son espèce. Vous êtes responsable de cette quête, à vous de trouver une planète qui réunie toute les conditions pour être terraformable. À vous de jouer !!"

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
		presentation.classList.add('animation')
		audio.play()
	})
}
popup_presentation()

const button_audio = document.querySelector('.equalizer')

button_audio.addEventListener('click', () =>
{
	function togglePlay() {
		if (audio.paused) 
		{
			audio.play()
			button_audio.classList.remove('stop-sound')
			button_audio.classList.add('equalizer')


		}
		else {
			audio.pause()
			button_audio.classList.add('stop-sound')
			button_audio.classList.remove('equalizer')
		}
	};
		
togglePlay()


})


const lesson = () => {

	const section_1 = document.querySelector('#section1')

	const div_spaceman = document.createElement('div')
	div_spaceman.classList.add('div-spaceman')
	section_1.appendChild(div_spaceman)

	const div_bubble = document.createElement('div')
	div_bubble.classList.add('div-bubble')
	div_spaceman.appendChild(div_bubble)

	const div_bubble_1 = document.createElement('div')
	div_bubble_1.classList.add('div-bubble-1')
	div_spaceman.appendChild(div_bubble_1)

	const div_bubble_2 = document.createElement('div')
	div_bubble_2.classList.add('div-bubble-2')
	div_spaceman.appendChild(div_bubble_2)

	const litlle_bubble_1 = document.createElement('div')
	litlle_bubble_1.classList.add('little-bubble-1')
	div_bubble.appendChild(litlle_bubble_1)

	const litlle_bubble_2 = document.createElement('div')
	litlle_bubble_2.classList.add('little-bubble-2')
	div_bubble.appendChild(litlle_bubble_2)

	const litlle_bubble_3 = document.createElement('div')
	litlle_bubble_3.classList.add('little-bubble-3')
	div_bubble.appendChild(litlle_bubble_3)

	const img_spaceman = document.createElement('img')
	div_spaceman.appendChild(img_spaceman)
	img_spaceman.src = `../images/spaceman.png`
	img_spaceman.alt = `spaceman`

	const div_book = document.createElement('div')
	div_book.classList.add('div-book')
	section_1.appendChild(div_book)

	const div_book_a = document.createElement('a')
	div_book_a.setAttribute('href', '../lesson.html')
	div_book.appendChild(div_book_a)

	const img_book = document.createElement('img')
	div_book_a.appendChild(img_book)
	img_book.src = `../images/book.png`
	img_book.alt = `book`


	div_spaceman.addEventListener('click', () => {

		const section_1 = document.querySelector('#section1')
		const lesson = document.createElement('div')
		lesson.classList.add('lesson')
		section_1.appendChild(lesson)

		const lesson_name = document.createElement('div')
		lesson_name.classList.add('lesson-physics')
		lesson.appendChild(lesson_name)

		const div_bubble_3 = document.createElement('div')
		div_bubble_3.classList.add('div-bubble-3')
		lesson.appendChild(div_bubble_3)

		const div_bubble_4 = document.createElement('div')
		div_bubble_4.classList.add('div-bubble-4')
		lesson.appendChild(div_bubble_4)

		const title_name = document.createElement('h2')
		title_name.classList.add('title-physics')
		lesson_name.appendChild(title_name)
		title_name.textContent = titleChoice()

		const text_name = document.createElement('p')
		text_name.classList.add('text-physics')
		lesson_name.appendChild(text_name)
		text_name.innerHTML = textChoice()

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

		div_bubble.classList.remove('div-bubble')
		div_bubble_1.classList.remove('div-bubble-1')
		div_bubble_2.classList.remove('div-bubble-2')
		litlle_bubble_1.classList.remove('litlle-bubble-1')
		litlle_bubble_2.classList.remove('litlle-bubble-2')
		litlle_bubble_3.classList.remove('litlle-bubble-3')

		if (index === 0) {
			button_previous.style.display = "none"
		}
		if (index != 0) {
			button_previous.style.display = "block"
			button_next.style.display = "block"
		}
		if (index === 3) {
			button_next.style.display = "none"
		}

		div_cross.addEventListener('click', () => {
			div_cross.classList.remove('div-cross')
			img_cross.style.visibility = `hidden`
			lesson.classList.remove('lesson')
			text_name.classList.remove('text-name')
			text_name.style.display = `none`
			title_name.classList.remove('title-name')
			title_name.style.display = `none`
			button_next.style.display = `none`
			button_previous.style.display = `none`

			div_bubble.classList.add('div-bubble')
			div_bubble_1.classList.add('div-bubble-1')
			div_bubble_2.classList.add('div-bubble-2')
			litlle_bubble_1.classList.add('litlle-bubble-1')
			litlle_bubble_2.classList.add('litlle-bubble-2')
			litlle_bubble_3.classList.add('litlle-bubble-3')
		})

		if (index === 0) {
			button_previous.style.display = "none"
		}

		button_next.addEventListener('click', () => {

			if (index === 0) {
				index++
				// console.log(index)
				lesson.classList.add('lesson')
				lesson_name.classList.add('lesson-atmosphere')

				title_name.classList.add('title-atmosphere')
				title_name.textContent = titleChoice()

				text_name.classList.add('text-atmosphere')
				text_name.innerHTML = textChoice()
				text_name.style.display = `block`


				button_next.classList.add('button-next-atmosphere')
				button_next.classList.remove('button-next-physics')

				button_previous.classList.add('button-previous-atmosphere')
			} else if (index === 1) {
				index++
				console.log(index)
				lesson.classList.add('lesson')
				lesson_name.classList.add('lesson-cycle')

				title_name.classList.add('title-cycle')
				title_name.textContent = titleChoice()

				text_name.classList.add('text-cycle')
				text_name.innerHTML = textChoice()
				text_name.style.display = `block`


				button_next.classList.add('button-next-cycle')
				button_next.classList.remove('button-next-atmosphere')

			} else if (index === 2) {

				index++
				console.log(index)
				lesson.classList.add('lesson')
				lesson_name.classList.add('lesson-interne')

				title_name.classList.add('title-interne')
				title_name.textContent = titleChoice()

				text_name.classList.add('text-interne')
				text_name.innerHTML = textChoice()
				text_name.style.display = `block`

				button_next.classList.add('button-next-interne')
				button_next.classList.remove('button-next-cycle')
			}
			if (index === 0) {
				button_previous.style.display = "none"
			}
			if (index != 0) {
				button_previous.style.display = "block"
				button_next.style.display = "block"
			}
			if (index === 3) {
				button_next.style.display = "none"
			}
		})


		button_previous.addEventListener('click', () => {
			if (index === 1) {
				index--
				console.log(index)
				lesson.classList.add('lesson')
				lesson_name.classList.add('lesson-physics')

				title_name.classList.add('title-physics')
				title_name.textContent = titleChoice()

				text_name.classList.add('text-physics')
				text_name.innerHTML = textChoice()
				text_name.style.display = `block`

				button_previous.classList.add('button-previous-physics')
				button_previous.classList.remove('button-previous-atmosphere')
			} else if (index === 2) {
				index--
				console.log(index)
				lesson.classList.add('lesson')
				lesson_name.classList.add('lesson-atmosphere')

				title_name.classList.add('title-atmosphere')
				title_name.textContent = titleChoice()

				text_name.classList.add('text-atmosphere')
				text_name.innerHTML = textChoice()
				text_name.style.display = `block`

				button_previous.classList.remove('button-previous-physics')
				button_previous.classList.add('button-previous-cycle')
			} else if (index === 3) {

				index--
				console.log(index)
				lesson.classList.add('lesson')
				lesson_name.classList.add('lesson-cycle')

				title_name.classList.add('title-cycle')
				title_name.textContent = titleChoice()

				text_name.classList.add('text-cycle')
				text_name.innerHTML = textChoice()
				text_name.style.display = `block`

				button_previous.classList.remove('button-previous-interne')
				button_previous.classList.add('button-previous-cycle')
			}
			if (index === 0) {
				button_previous.style.display = "none"
			}
			if (index != 0) {
				button_previous.style.display = "block"
				button_next.style.display = "block"
			}
			if (index === 3) {
				button_next.style.display = "none"
			}
		})

	})
}

let index = 0
lesson()



const textChoice = () => {
	switch (index) {
		case 0:
			return `<p>La <span>distance idéale</span> pour une planète se situerait entre <span>100 millions de kilomètres</span> et <span>300 millions de kilomètres</span>.</p>
					<p>La <span>gravité idéale</span> pour l’épanouissement de l’être humain se situe <span>entre 5 et 11 m/s^-2</span>, sachant que sur Terre sa valeur est de 9,8 m/s^-2.</p>`

		case 1:
			return `<p>Une <span>atmosphère idéale</span> doit comporter au moins du <span>carbone</span>, de <span>l'hydrogène</span>, de <span>l'oxygène</span> et de <span>l'azote</span>.</p>
					<p>La <span>pression atmosphérique idéale</span> se trouver entre <span>0,8</span> et <span>2 bar</span>, sachant que la Terre a une pression atmosphérique d’1 bar au niveau de la mer.</p>`

		case 2:
			return `<p>Le <span>cycle annuel</span> est important pour l’homme car il influe directement sur sa condition de vie. Un cycle de vie optimal doit être compris entre <span>0,8</span> et <span>2 ans</span>.</p>
			<p>Le <span>cycle journalier</span> est lui aussi très important, il permet l’équilibre de l’être humain. Un cycle idéal se situerait entre <span>20h</span> et <span>28h</span> terrestre.</p>`
			

		case 3:
			return `<p>L’<span>eau</span> est nécessaire à la survie de n’importe quel corps sur une planète, mais il est aussi important de noter son état. En effet, il est fortement préférable qu’elle soit présente sous forme <span>solide</span> ou <span>liquide</span>.</p>
					<p>La <span>température</span> idéale peut quand à elle se situer entre <span>-100°C</span> et <span>60°C</span> pour assurer un maintien de l’eau à l’état liquide ou solide et ainsi rendre la planète habitable</p>`

		default:
	}
}

const titleChoice = () => {
	switch (index) {
		case 0:
			return "Caractéristiques physique"

		case 1:
			return "Atmosphère"

		case 2:
			return "Cycles"

		case 3:

			return "Caractéristiques interne"

		default:
	}
}
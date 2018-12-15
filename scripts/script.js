/**
 * 
 * 
 *  FULLPAGE.JS
 * 
 *
**/


var myFullpage = new fullpage('#fullpage', {
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourth', 'fifthPage'],
    navigation: true,
    // menu: '#menu',
});


/**
 * 
 * 
 *  PARALLAX SECTION
 * 
 *
**/

/**
 * Lazy load
 */

const lazyElements = [...document.querySelectorAll('.lazy')]

for(const lazy of lazyElements)
{
    const image = document.createElement('img')
    image.addEventListener('load', () =>
    {
        lazy.classList.add('loaded')
        lazy.style.backgroundImage = `url(${image.src})`
    })
    image.src = lazy.dataset.src
}

/*
* Parallax Scroll
*/

const scrollParallaxes = document.querySelectorAll('.parallax-scroll')

window.addEventListener('scroll', () =>
{
    const scrollY = window.scrollY
    for(const scrollParallax of scrollParallaxes)
    {
        const depth = parseFloat(scrollParallax.dataset.parallaxScrollDepth)
        const translateY = depth * scrollY

        scrollParallax.style.transform =`translateY(${translateY}px)`
    }
})

/*
* Sizes
*/
let windowWidth = window.innerWidth
let windowHeight = window.innerHeight

window.addEventListener('resize', () =>
{
    windowWidth = window.innerWidth
    windowHeight = window.innerHeight
})

/*
* Parallax cursor
*/

const cursorParallaxes = document.querySelectorAll('.parallax-cursor')

window.addEventListener('mousemove', (_event) =>
{
    const ratioX = _event.clientX / windowWidth - 0.5
    const ratioY = _event.clientY / windowHeight - 0.5
    
    for(const cursorParallax of cursorParallaxes)
    {
        const depth = parseFloat(cursorParallax.dataset.parallaxCursorDepth)
        const translateX = depth * ratioX * 50
        const translateY = depth * ratioY * 50

        cursorParallax.style.transform = `translate(${-translateX}%, ${-translateY}%)`
    }
})

/**
 * BUTTON START THE EXPERIENCE 
 */

//  const button_begin = document.querySelector('.start')
//  const section_1 = document.querySelector('#section1')

//  button_begin.addEventListener('click', () =>
// {

// }

/**
 * DATE ET HEURE
 */

const T = () =>
{
    const $time_write = document.querySelector('.time')

    const time = new Date()

    const $hours = time.getHours()
    const $minutes = time.getMinutes()
    const $seconds = time.getSeconds()

    $time_write.textContent = `${$hours} : ${$minutes} : ${$seconds}`

    // if($minutes < 10)
    // {
    //     $minutes = "0" + $minutes;
    // }

    // if($seconds < 10)
    // {
    //     $seconds = "0" + $seconds;
    // } 
}

setInterval('T()',1000);


const D = () =>
{
    const $date_write = document.querySelector('.date')

    const date = new Date()

   
    let days_name = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
    let months = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre");
    

    const $days = days_name[date.getDay()] + " ";   
    const $nbr = date.getDate() + " ";   
    const $month = months[date.getMonth()] + '';
    const $years = date.getFullYear()

    $date_write.textContent = `${$days} ${$nbr} ${$month} ${$years}`
}

D()
/**
 * DATE & HOUR
*/

const T = () =>
{
    const $time_write = document.querySelector('.time')

    const time = new Date()

    const $hours = time.getHours()
    const $minutes = time.getMinutes()
    const $seconds = time.getSeconds()

    if($minutes < 10)
    {
    $time_write.textContent = `${$hours} : 0${$minutes} : ${$seconds}`
    }
    else if($seconds < 10)
    {
    $time_write.textContent = `${$hours} : ${$minutes} : 0${$seconds}`
    } 
    else if($hours < 10){
    $time_write.textContent = `0${$hours} : ${$minutes} : ${$seconds}`
    } 
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
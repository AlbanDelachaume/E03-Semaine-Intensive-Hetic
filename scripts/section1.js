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





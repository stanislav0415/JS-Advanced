function walkToUni(steps, footPring, speed){
     let distanceInM = steps * footPring
     let speedMinSec = speed / 3.6
     let time = distanceInM / speedMinSec
     let rest = Math.floor(distanceInM / 500)

     let timeInMinutes = Math.floor(time / 60)
     let timeInSec = Math.round(time - timeInMinutes * 60)
     timeInMinutes += rest
     let hours = Math.floor(timeInMinutes / 60)
     timeInMinutes = timeInMinutes % 60

     let hourToPrint = hours < 10 ? `0${hours}` : `${hours}`
     let minToPrint = timeInMinutes < 10 ? `0${timeInMinutes}` : `${timeInMinutes}`
     let timeInSecPrint = timeInSec < 10 ? `0${timeInSec}` : `${timeInSec}`
 
     console.log(`${hourToPrint}:${minToPrint}:${timeInSecPrint}`);
     
     

}
walkToUni(4000, 0.60, 5)
const costoKm = 0.21;
let costoTot = 0; 
const scontoMin = 0.20;
const scontoAnz = 0.40;

//Definisco il valore che prendo dal bottone clickato
let sendBtnElement = document.getElementById("btn-send");

//Definisco le due variabile che conterranno rispettivamente i chilometri e l'età dell'utente
let userKm;
let userAge;

//Aggiungo l'evento al click

sendBtnElement = sendBtnElement.addEventListener("click", function(){

    userAge = document.getElementById("age");
    userAge = userAge.value; //prendo il valore scritto nell'input
    console.log(userAge);

    userKm = document.getElementById("number");
    userKm = userKm.value; //prendo il valore scritto nell'input
    console.log(userKm);

    userKm = parseInt(userKm);                         
    userAge = parseInt(userAge);      
    
    if(userAge < 18 ){
        costoTot = userKm * costoKm; //number
        console.log(costoTot, typeof costoTot);
        let scontoTot = (costoTot) * scontoMin;
        console.log(scontoTot);
        costoTot = costoTot - scontoTot;
        console.log(costoTot);
        document.getElementById("result").innerHTML = `Il costo totale del tuo biglietto è : ${costoTot.toFixed(2)} grazie allo Sconto Minorenne`;
    } else if(userAge > 65 ){
        costoTot = userKm * costoKm; //number
        console.log(costoTot, typeof costoTot);
        let scontoTot = (costoTot) * scontoAnz;
        console.log(scontoTot);
        costoTot = costoTot - scontoTot;
        console.log(costoTot);
        document.getElementById("result").innerHTML = `Il costo totale del tuo biglietto è : ${costoTot.toFixed(2)} grazie allo Sconto Over 65`;
    } else{
        costoTot = userKm * costoKm;
        console.log(costoTot);
        document.getElementById("result").innerHTML = `Il costo totale del tuo biglietto è : ${costoTot.toFixed(2)}, purtroppo non hai accesso a sconti in quanto non sei né Minorenne né Over 65`;
    }
    
    //document.getElementById("result").innerHTML = `Il costo totale del tuo biglietto è : ${costoTot.toFixed(2)}`; Se voglio stampare solo OUTPUT ALLA FINE E NON PER CONDIZIONE SINGOLA
})


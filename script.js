console.log('biglietto del treno')

//Dati da conoscere: 
// 1) numero chilometri da percorrere
// 2) Età del passeggero

//prezzo del biglietto = 0.21€ al km
// sconti previsti:
// 1) 20% se passeggero minorenne
// 2) 40% se passeggero over 65

// Richiesto che il prezzo sia indicato con massimo due decimali

//Assegno la variabile al prezzo del biglietto
const costokm = 0.21

// Funzione per consentire all'utente di inserire il numero di km
const distanza = parseFloat(prompt('Inserire il numero di km del viaggio'))
//uso parseFloat perchè il numero potrebbe non essere intero
console.log(distanza, "distanza da percorrere")

// Funzione per consentire all'utente di inserire la sua età
const eta = parseInt(prompt("Inserisci l'età del passeggero"))
//uso parseInt perchè il numero è per forza intero
console.log(eta, "età del passeggero")

//Funzione per calcolare il prezzo del biglietto
//1) prezzo base
const prezzoBase = distanza * costokm
console.log(prezzoBase, "prezzo di listino del biglietto")
//2) funzione per calcolare lo sconto
//2.1) uso let anzichè const in quanto lo sconto avrà percentuali diverse a seconda dell'età del passeggero
let pctSconto = 0
if (eta < 18) {
    pctSconto = 20
} else if (eta > 65) {
    // - sconto = 40 * prezzo base / 100
    pctSconto = 40
}

//Calcolo del prezzo finale del biglietto
//applico toFixed a tutte le variabili prezzo e sconto in modo da ottenere solo due decimali 
const sconto =(pctSconto * prezzoBase) / 100
const prezzoFinale = prezzoBase - sconto
console.log(sconto.toFixed(2), "Sconto applicato")
console.log(prezzoFinale.toFixed(2), "Prezzo finale applicato")

//applico toFixed al prezzo del biglietto in modo da ottenere solo due decimali
const message =`Il prezzo del biglietto è di ${prezzoFinale.toFixed(2)} Euro`
console.log(message)

//Completato
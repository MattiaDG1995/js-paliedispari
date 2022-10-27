// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// let parola = prompt('inserisci parola')
// let parolaReverse = '';

// function reverse(x){

//     for( let i = x.length - 1; i >= 0; i-- ){

//         parolaReverse += x[i]
//     }

//     if( parolaReverse == x ){
//         console.log('palindroma')

//     }else{
//         console.log('nope')      
//     }

//  }

//  reverse(parola)


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



function invia(){
    let scelta = document.getElementById("scelta").value; 

    let num = parseInt(document.getElementById("num").value);
    console.log(`numero: ${num}`)
        
    let pc = generateRandom(1, 5)
    console.log(`numeroPC: ${pc}`) 
        
    let somma = num + pc;
    console.log(`la somma è ${somma}`) 
        
    pardisp(somma, scelta);   
}

function generateRandom(min, max) {

    return Math.floor(Math.random() * (max - min +1)) + min; 
           
} 

function pardisp(numero, sceltaUtente){
        
    if( numero % 2 !== 0 && sceltaUtente === 'dispari' ){
        document.getElementById('text').innerHTML = 'Hai vinto';

    }else if( numero % 2 === 0 && sceltaUtente === 'pari' ) {
        // console.log('hai vinto')
        document.getElementById('text').innerHTML = 'Hai vinto';

    }else{
        // console.log('hai perso')
        document.getElementById('text').innerHTML = 'Hai perso';
    }
 
    
}










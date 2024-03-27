## Descrizione consegna :
Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
:one: MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
:two: MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
:musical_note: Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.

## 1. Milestone Approccio e Sviluppo :

#### Parte Input
- Prendo dall'utente in input, dai due input presenti in html, età e km
- Assegno questi valori ad una variabile

#### Parte Logica

- Iniziano i vari controlli dei dati presi in input
    SE ... età è inferiore a 18 : sconto 20%
    Altrimenti SE ... età è maggiore a 65 : sconto 40%
    Altrimenti .. l'età risulta essere tra 18 e 65 ciò significa no sconto.

    ###### Calcoli
    Al verificarsi delle prime due condizioni quindi calcolerò il prezzo totale e sottrarrò a quest'ultimo, il Prezzo totale - sé stesso Scontato.

    Nel caso in cui la fascia d'età sia compresa tra 18 e 65, allora non ci sarà nessuno sconto, calcolo di base il costo : moltiplicando i Km per il costo/Km.


## 2. Milestone Approccio e Sviluppo

#### Parte Input
- Prendo in input, i dati :
    1. Nome e Cognome (Insieme)
    2. Km
    3. Fascia d'età da una lista


#### Parte Logica

- Assegno questi valore a delle variabili che richiamo all'interno di Js
- Essendo Nome e Cognome, un elemento stringa composto da 2 stringhe concatenate, mi servo della funzione split(' ') con lo spazio nella parentesi cosicché mi divide le parole ogni qualvolta è presente lo spazio.
Assegno questo valore ad una variabile, che in questo caso sarà un tipo di dato Array, in maniera molto semplice senza cicli (quindi ipotetica situazione in cui l'utente ha solo 1 Nome ed 1 Cognome), assegno la posizione  Array[0] al Nome, e Array[1] al Cognome.
- Procedo al prendere e convertire subito i Km in numero, così da renderli utilizzabili nei calcoli.
- Dalla lista prendo il valore selezionato dall'utente e lo confronto con dei valori che rispettivamente stanno ad indicare : Minorenne, Maggiorenne, Over 65.
- Procede in ogni caso ai calcoli come nella  <b>Milestone 1</b>

#### Parte Output
- Stampo il Nome Cognome del Passeggero
- Il costo del suo biglietto

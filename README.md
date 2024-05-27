# Food Finder

Food Finder è un'applicazione web che ti aiuta a trovare deliziose ricette in base agli ingredienti che hai a disposizione. Utilizzando l'API di Edamam, puoi cercare ricette inserendo semplicemente gli ingredienti desiderati e ottenere una lista di ricette complete di immagini, ingredienti e link per visualizzare la ricetta completa.

## Caratteristiche
- Cerca ricette in base agli ingredienti inseriti.
- Visualizza una lista di ricette con immagini, ingredienti e link per la ricetta completa.
- Layout responsivo e accattivante grazie a Bootstrap 5.
- Animazioni e transizioni per un'esperienza utente migliorata.

## Tecnologie Utilizzate
- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- Edamam API

## Come Iniziare

### Prerequisiti
- Un browser web moderno (Google Chrome, Mozilla Firefox, etc.)

## Struttura del Progetto
- `index.html`: La pagina principale dell'applicazione.
- `style.css`: File di stile CSS personalizzato.
- `script.js`: File JavaScript contenente la logica per le chiamate API e la visualizzazione delle ricette.

## API Utilizzata
Questo progetto utilizza l'API di [Edamam](https://developer.edamam.com/) per recuperare le ricette. Dovrai ottenere un'app ID e una chiave API da Edamam per far funzionare le chiamate API.

## Personalizzazione
Per utilizzare la tua chiave API, sostituisci i seguenti valori nel file `script.js` con quelli ottenuti dal tuo account Edamam:
```javascript
const response = await fetch(`https://api.edamam.com/search?q=${searchValue}&app_id=TUO_APP_ID&app_key=LA_TUA_CHIAVE_API&from=0&to=10`);

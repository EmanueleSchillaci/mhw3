const leggi1 = document.getElementById("leggi-piu1");
const leggi2 = document.getElementById("leggi-piu2");
const leggi3 = document.getElementById("leggi-piu3");
const leggi4 = document.getElementById("leggi-piu4"); 

const testo1 = document.getElementById("testo-piu-1");
const testo2 = document.getElementById("testo-piu-2");
const testo3 = document.getElementById("testo-piu-3");
const testo4 = document.getElementById("testo-piu-4"); 


const biblocco1 = document.getElementById("biblocco-a-4-1");
const biblocco2 = document.getElementById("biblocco-a-4-2");

const blocco1 = document.getElementById("blocco-a-4-1");
const blocco2 = document.getElementById("blocco-a-4-2");
const blocco3 = document.getElementById("blocco-a-4-3");
const blocco4 = document.getElementById("blocco-a-4-4");

const parteScritta1 = document.getElementById("parte-scritta-1");
const parteScritta2 = document.getElementById("parte-scritta-2");
const parteScritta3 = document.getElementById("parte-scritta-3");
const parteScritta4 = document.getElementById("parte-scritta-4");

leggi1.addEventListener("click" , leggi_piu1);

leggi2.addEventListener("click", leggi_piu2);
leggi3.addEventListener("click" , leggi_piu3);
leggi4.addEventListener("click", leggi_piu4);

var statoBib1 = 0;
var statoBib2 = 0;

var stato1 = 0;
var stato2 = 0;
var stato3 = 0;
var stato4 = 0;

function leggi_piu1 (event) {
    if (stato1 === 0) {
    testo1.classList.remove("testo-piu-hidden");
    testo1.classList.add("testo-piu-show");

    blocco1.classList.remove("blocco-a-4");
    blocco1.classList.add("blocco-a-4-leggi-piu");

    parteScritta1.classList.remove("parte-scritta-new-base");
    parteScritta1.classList.add("parte-scritta-new-show");

    leggi1.textContent = "leggi meno";
    stato1 = 1;

    } else {
        testo1.classList.remove("testo-piu-show");
        testo1.classList.add("testo-piu-hidden");

        blocco1.classList.remove("blocco-a-4-leggi-piu");
        blocco1.classList.add("blocco-a-4");

        parteScritta1.classList.remove("parte-scritta-new-show");
        parteScritta1.classList.add("parte-scritta-new-base");

        leggi1.textContent = "leggi di più";
        stato1 = 0;

    }

    if (stato1 === 1 || stato2 === 1) {
        biblocco1.classList.remove("biblocco-a-4");
        biblocco1.classList.add("biblocco-a-4-leggi-piu");
    }

    if (stato1 === 0 && stato2 === 0) {
        biblocco1.classList.remove("biblocco-a-4-leggi-piu");
        biblocco1.classList.add("biblocco-a-4");
    }
    
}

function leggi_piu2 (event) {
    if (stato2 === 0) {
    testo2.classList.remove("testo-piu-hidden");
    testo2.classList.add("testo-piu-show");

    blocco2.classList.remove("blocco-a-4");
    blocco2.classList.add("blocco-a-4-leggi-piu");

    parteScritta2.classList.remove("parte-scritta-new-base");
    parteScritta2.classList.add("parte-scritta-new-show");

    leggi2.textContent = "leggi meno";
    stato2 = 1;

    } else {
        testo2.classList.remove("testo-piu-show");
        testo2.classList.add("testo-piu-hidden");

        blocco2.classList.remove("blocco-a-4-leggi-piu");
        blocco2.classList.add("blocco-a-4");

        parteScritta2.classList.remove("parte-scritta-new-show");
        parteScritta2.classList.add("parte-scritta-new-base");

        leggi2.textContent = "leggi di più";
        stato2 = 0;

    }

    if (stato1 === 1 || stato2 === 1) {
        biblocco1.classList.remove("biblocco-a-4");
        biblocco1.classList.add("biblocco-a-4-leggi-piu");
    }

    if (stato1 === 0 && stato2 === 0) {
        biblocco1.classList.remove("biblocco-a-4-leggi-piu");
        biblocco1.classList.add("biblocco-a-4");
    }
    
}

function leggi_piu3 (event) {
    if (stato3 === 0) {
    testo3.classList.remove("testo-piu-hidden");
    testo3.classList.add("testo-piu-show");

    blocco3.classList.remove("blocco-a-4");
    blocco3.classList.add("blocco-a-4-leggi-piu");

    parteScritta3.classList.remove("parte-scritta-new-base");
    parteScritta3.classList.add("parte-scritta-new-show");

    leggi3.textContent = "leggi meno";
    stato3 = 1;

    } else {
        testo3.classList.remove("testo-piu-show");
        testo3.classList.add("testo-piu-hidden");

        blocco3.classList.remove("blocco-a-4-leggi-piu");
        blocco3.classList.add("blocco-a-4");

        parteScritta3.classList.remove("parte-scritta-new-show");
        parteScritta3.classList.add("parte-scritta-new-base");

        leggi3.textContent = "leggi di più";
        stato3 = 0;


    }
    if (stato3 === 1 || stato4 === 1) {
        biblocco2.classList.remove("biblocco-a-4");
        biblocco2.classList.add("biblocco-a-4-leggi-piu");
    }

    if (stato3 === 0 && stato4 === 0) {
        biblocco2.classList.remove("biblocco-a-4-leggi-piu");
        biblocco2.classList.add("biblocco-a-4");
    }
}

function leggi_piu4 (event) {
    if (stato4 === 0) {
    testo4.classList.remove("testo-piu-hidden");
    testo4.classList.add("testo-piu-show");

    blocco4.classList.remove("blocco-a-4");
    blocco4.classList.add("blocco-a-4-leggi-piu");

    parteScritta4.classList.remove("parte-scritta-new-base");
    parteScritta4.classList.add("parte-scritta-new-show");

    leggi4.textContent = "leggi meno";
    stato4 = 1;

    } else {
        testo4.classList.remove("testo-piu-show");
        testo4.classList.add("testo-piu-hidden");

        blocco4.classList.remove("blocco-a-4-leggi-piu");
        blocco4.classList.add("blocco-a-4");

        parteScritta4.classList.remove("parte-scritta-new-show");
        parteScritta4.classList.add("parte-scritta-new-base");

        leggi4.textContent = "leggi di più";
        stato4 = 0;

    }

    if (stato3 === 1 || stato4 === 1) {
        biblocco2.classList.remove("biblocco-a-4");
        biblocco2.classList.add("biblocco-a-4-leggi-piu");
    }

    if (stato3 === 0 && stato4 === 0) {
        biblocco2.classList.remove("biblocco-a-4-leggi-piu");
        biblocco2.classList.add("biblocco-a-4");
    }
    


    
}

const logo = document.getElementById("logo-benvenuto");
var LogoStato = 0;

logo.addEventListener("click", cambioLogo);

function cambioLogo(event) {
    if (LogoStato === 0) {
        event.currentTarget.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6278c658-59f1-4319-ac90-e48cf9f8f1c1/d8sruud-04312d46-8b78-409d-ac90-cd1034a0521d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYyNzhjNjU4LTU5ZjEtNDMxOS1hYzkwLWU0OGNmOWY4ZjFjMVwvZDhzcnV1ZC0wNDMxMmQ0Ni04Yjc4LTQwOWQtYWM5MC1jZDEwMzRhMDUyMWQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dM2UwD7Z6MCmvsXtvVMrSGBE-wuYJhxsYuuvwK6rHi0";
        LogoStato = 1;
        event.currentTarget.classList.remove("logo-benvenuto-img");
        event.currentTarget.classList.add("logo-benvenuto-gif");

    }
    else {
        event.currentTarget.src = "https://assets.account.microsoft.com/signedout/compassassets/9e4ea4f6-307f-412f-886c-3bd290f54b40.jpg?n=Microsoft%20Logo.jpg";
        LogoStato = 0;
        event.currentTarget.classList.remove("logo-benvenuto-gif");
        event.currentTarget.classList.add("logo-benvenuto-img");
    }
}


const logo2 = document.getElementById("logo-finale");
var Logo2Stato = 0;

const margineLogoF = document.getElementById("logo-finaleM")

logo2.addEventListener("click", cambioLogo);

function cambioLogo(event) {
    if (Logo2Stato === 0) {
        event.currentTarget.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6278c658-59f1-4319-ac90-e48cf9f8f1c1/d8sruud-04312d46-8b78-409d-ac90-cd1034a0521d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzYyNzhjNjU4LTU5ZjEtNDMxOS1hYzkwLWU0OGNmOWY4ZjFjMVwvZDhzcnV1ZC0wNDMxMmQ0Ni04Yjc4LTQwOWQtYWM5MC1jZDEwMzRhMDUyMWQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dM2UwD7Z6MCmvsXtvVMrSGBE-wuYJhxsYuuvwK6rHi0";
        Logo2Stato = 1;
        event.currentTarget.classList.remove("logo-benvenuto-img");
        event.currentTarget.classList.add("logo-benvenuto-gif");
        margineLogoF.classList.remove("margine-logo-finale-img");
        margineLogoF.classList.add("margine-logo-finale-gif");

    }
    else {
        event.currentTarget.src = "https://assets.account.microsoft.com/signedout/compassassets/9e4ea4f6-307f-412f-886c-3bd290f54b40.jpg?n=Microsoft%20Logo.jpg";
        Logo2Stato = 0;
        event.currentTarget.classList.remove("logo-benvenuto-gif");
        event.currentTarget.classList.add("logo-benvenuto-img");
        margineLogoF.classList.remove("margine-logo-finale-gif");
        margineLogoF.classList.add("margine-logo-finale-img");
    }
}
 // SPOTIFY !!!!!!!!

 // Secret !!!!  d4a94659818c4ce6b193d7fe9c0bdf54

 // ID !!!!  649e127d7e3c4d58989acd2a3b5d97c7 decisamente non sicuro

 // parte da modificare
 function onJson(json) {
    console.log('JSON ricevuto');
    
    // Svuotiamo la libreria
    const library = document.querySelector('#container-risultati');
    library.innerHTML = '';
    // Leggi il numero di risultati
    const results = json.albums.items;
    let num_results = results.length;
    // Mostriamone al massimo 12
    if(num_results > 12)
      num_results = 12;
    // Processa ciascun risultato
    for(let i=0; i<num_results; i++)
    {
      // Leggi il documento
      const album_data = results[i]
      // Leggiamo info
      const title = album_data.name;
      const selected_image = album_data.images[0].url;
      // Creiamo il div che conterrà immagine e didascalia
      const album = document.createElement('div');
      album.classList.add('album');
      // Creiamo l'immagine
      const img = document.createElement('img');
      img.src = selected_image;
      // Creiamo la didascalia
      const caption = document.createElement('span');
      caption.textContent = title;
      // Aggiungiamo immagine e didascalia al div
      album.appendChild(img);
      album.appendChild(caption);
      // Aggiungiamo il div alla libreria
      library.appendChild(album);
    } 
  }

 function onResponse(response) {
    console.log('Risposta ricevuta');
    return response.json();
  }

 function Ricerca(event)
{
  // Impedisci il submit del form
  console.log("siamo qui");
  event.preventDefault();
  // Leggi valore del campo di testo
  const album_input = document.querySelector('#barra-scrittura');
  const album_value = encodeURIComponent(album_input.value);
  console.log('Eseguo ricerca: ' + album_value);
  // Esegui la richiesta
  fetch("https://api.spotify.com/v1/search?type=album&q=" + album_value,
    {
      headers:
      {
        'Authorization': 'Bearer ' + token
      }
    }
  ).then(onResponse).then(onJson);
}

function onTokenJson(json)
{
  // Imposta il token global
  console.log("token ricevuto");
  token = json.access_token;
}

function onTokenResponse(response)
{
  return response.json();
}

 const Client_ID = "649e127d7e3c4d58989acd2a3b5d97c7" ;
 const Client_secret = "d4a94659818c4ce6b193d7fe9c0bdf54";
 let token;

   // All'apertura della pagina, richiediamo il token
   fetch("https://accounts.spotify.com/api/token",
   {
  method: "post",
  body: 'grant_type=client_credentials',
  headers:
  {
   'Content-Type': 'application/x-www-form-urlencoded',
   'Authorization': 'Basic ' + btoa(Client_ID + ':' + Client_secret)
  }
 }
).then(onTokenResponse).then(onTokenJson);


const bottoneRicerca = document.getElementById("barra-ricerca");
bottoneRicerca.addEventListener('submit', Ricerca);


/*     biblocco1.classlist.remove("biblocco-a-4");
    biblocco1.classlist.add("biblocco-a-4-leggi-piu"); */

/*
function leggi_piu1 (event) {
    if (stato1 === 0) {
    testo1.classList.remove("testo-piu-hidden");
    testo1.classList.add("testo-piu-show");
    leggi1.textContent = "leggi meno";
    stato1 = 1;
    } else {
        testo1.classList.remove("testo-piu-show");
        testo1.classList.add("testo-piu-hidden");
        leggi1.textContent = "leggi di più";
        stato1 = 0;
    }
    
} */


//  SECONDA REST API !!!!!


function onJson2(json) {
    console.log('JSON ricevuto');
    // Svuotiamo la libreria
    const library = document.querySelector('#container-risultati2');
    library.innerHTML = '';
    // Leggi il numero di risultati
    let num_results = json.num_found;
    // Mostriamone al massimo 12
    if(num_results > 12)
      num_results = 12;
    // Processa ciascun risultato
    for(let i=0; i<num_results; i++)
    {
      // Leggi il documento
      const doc = json.docs[i]
      // Leggiamo info
      const title = doc.title;
      const isbn = doc.isbn[0];
      // Costruiamo l'URL della copertina
      const cover_url = 'http://covers.openlibrary.org/b/isbn/' + isbn + '-M.jpg';
      // Creiamo il div che conterrà immagine e didascalia
      const book = document.createElement('div');
      book.classList.add('book');
      // Creiamo l'immagine
      const img = document.createElement('img');
      img.src = cover_url;
      // Creiamo la didascalia
      const caption = document.createElement('span');
      caption.textContent = title;
      // Aggiungiamo immagine e didascalia al div
      book.appendChild(img);
      book.appendChild(caption);
      // Aggiungiamo il div alla libreria
      library.appendChild(book);
    }
  }
  
  function onResponse2(response) {
    console.log('Risposta ricevuta');
    return response.json();
  }
  
  function Ricerca2(event)
  {
    // Impedisci il submit del form
    event.preventDefault();
    // Leggi valore del campo di testo
    const author_input = document.querySelector('#barra-scrittura2');
    const author_value = encodeURIComponent(author_input.value);
    console.log('Eseguo ricerca: ' + author_value);
    // Prepara la richiesta
    rest_url = 'http://openlibrary.org/search.json?author=' + author_value;
    console.log('URL: ' + rest_url);
    // Esegui fetch
    fetch(rest_url).then(onResponse2).then(onJson2);
  }
  
  // Aggiungi event listener al form
  const bottoneRicerca2 = document.getElementById('barra-ricerca2');
  bottoneRicerca2.addEventListener('submit', Ricerca2)
  


























/*

function onJson2(json) {
    console.log('JSON ricevuto');
    
    // Svuotiamo la libreria
    const library2 = document.querySelector('#container-risultati2');
    library2.innerHTML = '';
    // Leggi il numero di risultati
    const results2 = json.albums.items;
    let num_results2 = results2.length;
    // Mostriamone al massimo 12
    if(num_results2 > 12)
      num_results2 = 12;
    // Processa ciascun risultato
    for(let i=0; i<num_results2; i++)
    {
      // Leggi il documento
      const video_data = results[i]
      // Leggiamo info
      const title = video_data.name;
      const selected_image = video_data.images[0].url;
      // Creiamo il div che conterrà immagine e didascalia
      const video = document.createElement('div');
      album.classList.add('album');
      // Creiamo l'immagine
      const img = document.createElement('img');
      img.src = selected_image;
      // Creiamo la didascalia
      const caption = document.createElement('span');
      caption.textContent = title;
      // Aggiungiamo immagine e didascalia al div
      album.appendChild(img);
      album.appendChild(caption);
      // Aggiungiamo il div alla libreria
      library2.appendChild(video);
    } 
  }

function onResponse2(response) {
    console.log('Risposta ricevuta');
    return response.json();
  }

 

  // CHIAVE YT =  AIzaSyDAM1mE_uIaGZ74BX4z4LcXHF1ZUeWf2BQ  


  // 219229931678-5cvbkgah0dvc7dutsan9c4lgp96qv881.apps.googleusercontent.com

  // secret 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

 function Ricerca2(event)
{
  // Impedisci il submit del form
  console.log("siamo qui");
  event.preventDefault();
  // Leggi valore del campo di testo
  const video_input = document.querySelector('#barra-scrittura2');
  const video_value = encodeURIComponent(video_input.value);
  console.log('Eseguo ricerca: ' + video_value);
  // Esegui la richiesta
  fetch("https://api.dailymotion.com/video?q=" + video_value,
    {
      headers:
      {
        'Authorization': 'Bearer ' + token2
      }
    }
  ).then(onResponse2).then(onJson2);
}

// field=data&context=key1%3Dvalue1%26key2%3Dvalue2


const Client_ID2 = "219229931678-5cvbkgah0dvc7dutsan9c4lgp96qv881.apps.googleusercontent.com" ;

const Client_secret2 = "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";

let token2;

function onTokenJson2(json)
{
  // Imposta il token global
  console.log("token2 ricevuto");
  token2 = json.access_token;
}

function onTokenResponse2(response)
{
  return response.json();
}

   // All'apertura della pagina, richiediamo il token
   fetch("https://www.googleapis.com/youtube/v3",
   {
  method: "post",
  body: 'grant_type=client_credentials',
  headers:
  {
   'Content-Type': 'application/x-www-form-urlencoded',
   'Authorization': 'Basic ' + btoa(Client_ID2 + ':' + Client_secret2)
  }
 }
).then(onTokenResponse2).then(onTokenJson2);


const bottoneRicerca2 = document.getElementById("barra-ricerca2");
bottoneRicerca2.addEventListener('submit', Ricerca2);


*/

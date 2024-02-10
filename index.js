// Import stylesheets
import './style.css';

// Write Javascript code!


  // Definizione della classe Libro
  class Libro {
    constructor(posizione, autore, titolo, utentePrestito) {
      this.posizione = posizione;
      this.autore = autore;
      this.titolo = titolo;
      this.utentePrestito = utentePrestito;
    }
  }

  // Definizione della classe Archivio
  class Archivio {
    constructor(arrayLibri) {
      this.arrayLibri = arrayLibri;
    }

    // Metodo per trovare i libri che corrispondono ad una certa stringa nel titolo
    trovaLibri(stringaDaCercare) {
      return this.arrayLibri.filter(libro => libro.titolo.toLowerCase().includes(stringaDaCercare.toLowerCase()));
    }
  }

  // Funzione per eseguire la ricerca e visualizzare i risultati
  function effettuaRicerca() {
    const stringaDaCercare = document.getElementById("inputRicerca").value.trim();
    const risultatiRicercaDiv = document.getElementById("risultatiRicerca");
    risultatiRicercaDiv.innerHTML = "";

    if (stringaDaCercare === "") {
      risultatiRicercaDiv.textContent = "Inserisci un titolo per la ricerca.";
      return;
    }

    const libriCorrispondenti = archivio.trovaLibri(stringaDaCercare);

    if (libriCorrispondenti.length === 0) {
      risultatiRicercaDiv.textContent = "Nessun libro corrispondente trovato.";
    } else if (libriCorrispondenti.length === 1) {
      const libro = libriCorrispondenti[0];
      risultatiRicercaDiv.textContent = `Autore: ${libro.autore}, Titolo: ${libro.titolo}`;
    } else {
      risultatiRicercaDiv.textContent = `${libriCorrispondenti.length} libri corrispondenti trovati.`;
    }
  }

  // Array contenente gli oggetti con autore e titolo dei libri
  const arrayLibri = [
    new Libro(1, "Dante Alighieri", "Divina Commedia", ""),
    new Libro(2, "Alessandro Manzoni", "I Promessi Sposi", ""),
    new Libro(3, "Boccaccio", "Decameron", "")
  ];

  // Creazione dell'oggetto Archivio
  const archivio = new Archivio(arrayLibri);

  // Aggiungi un event listener all'input per eseguire la ricerca ad ogni nuovo carattere
  document.getElementById("inputRicerca").addEventListener("input", effettuaRicerca);


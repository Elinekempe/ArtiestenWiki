// ---- STAP 1: Maak een lege lijst voor artiesten ----
let alleArtiesten = [];
let huidigSorteer = 'naam';  // Standaard sortering

// ---- STAP 2: Pak de onderdelen van de pagina ----
const zoekVak = document.getElementById('zoekInput');
const artiestenRaster = document.getElementById('artiestenGrid');
const aantalWeergave = document.getElementById('resultCount');

// ---- STAP 3: HULP-functies ----

function toonAantal(aantal) {
    if (!aantalWeergave) return;
    
    let woord;
    if (aantal === 1) {
        woord = 'artiest';
    } else {
        woord = 'artiesten';
    }
    aantalWeergave.textContent = aantal + ' ' + woord + ' gevonden';
}

// Toon een bericht als er niets gevonden is
function toonGeenResultaten() {
    let leegBericht = maakElement('div', 'col-span-full bg-gradient-to-br from-violet-500/10 to-blue-500/10 rounded-3xl border border-violet-400/20 shadow-lg text-center py-16 backdrop-blur');
    
    leegBericht.append(
        maakElement('p', 'text-6xl mb-4', '🎵'),
        maakElement('p', 'text-2xl text-white font-black', 'Geen artiesten gevonden'),
        maakElement('p', 'text-white/70 mt-3 font-medium', 'Probeer een andere zoekterm.')
    );
    
    artiestenRaster.append(leegBericht);
}

// ---- STAP 4B: SORTEER-FUNCTIES ----
// ---- STAP 5: Laad artiesten uit het bestand  ----
function laadArtiestenUitBestand() {
    fetch('artists.json')
        .then(function(antwoord) {
            if (!antwoord.ok) {
                throw new Error('HTTP fout! status: ' + antwoord.status);
            }
            return antwoord.json();
        })
        .then(function(data) {
            alleArtiesten = [];
            for (let i = 0; i < data.artiesten.length; i++) {
                alleArtiesten.push(data.artiesten[i]);
            }
            // Sorteer op naam
            alleArtiesten.sort(function(a, b) {
                if (a.naam < b.naam) return -1;
                if (a.naam > b.naam) return 1;
                return 0;
            });
            toonArtiesten(alleArtiesten);
            initSearch(alleArtiesten);
            initSorteerknoppen();
        })
        .catch(function(fout) {
            console.log('Fout: ' + fout);
            let foutMelding = maakElement('div', 'col-span-full bg-red-500/20 rounded-3xl p-8 text-center');
            foutMelding.innerHTML = `
                <p class="text-4xl mb-4">❌</p>
                <p class="text-white font-bold mb-2">Kan artiesten niet laden!</p>
                <p class="text-white/70">Controleer of artists.json in dezelfde map staat als index.html</p>
            `;
            artiestenRaster.append(foutMelding);
        });
}

// ---- STAP 6: Toon artiesten op het scherm ----
function toonArtiesten(artiestenOmTeLatenZien) {
    if (!artiestenRaster) return;
    
    // Maak het raster leeg
    while (artiestenRaster.firstChild) {
        artiestenRaster.removeChild(artiestenRaster.firstChild);
    }
    
    toonAantal(artiestenOmTeLatenZien.length);

    if (artiestenOmTeLatenZien.length === 0) {
        toonGeenResultaten();
        return;
    }

    // Maak voor elke artiest een kaartje
    for (let i = 0; i < artiestenOmTeLatenZien.length; i++) {
        let kaartje = maakArtiestKaart(artiestenOmTeLatenZien[i]);
        artiestenRaster.append(kaartje);
    }
}

// ---- STAP 7: SORTEER-FUNCTIES ----
function sorteerArtiesten(manier) {
    huidigSorteer = manier;
    let gesorteerd = [...alleArtiesten];
    
    if (manier === 'genre' || manier === 'land' || manier === 'jaren' || manier === 'naam') {
        gesorteerd.sort(function(a, b) {
            let waardeA = (a[manier] || '').toString().toLowerCase();
            let waardeB = (b[manier] || '').toString().toLowerCase();
            if (waardeA < waardeB) return -1;
            if (waardeA > waardeB) return 1;
            return 0;
        });
    }
    
    // Update knop styling
    let knoppen = ['sortNaam', 'sortGenre', 'sortLand', 'sortJaren'];
    knoppen.forEach(function(id) {
        let knop = document.getElementById(id);
        if (!knop) return;
        if (id === 'sort' + manier.charAt(0).toUpperCase() + manier.slice(1)) {
            knop.className = 'px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-2xl font-bold transition shadow-lg hover:shadow-xl';
        } else {
            knop.className = 'px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 text-white rounded-2xl font-bold transition backdrop-blur';
        }
    });
    
    toonArtiesten(gesorteerd);
}

function initSorteerknoppen() {
    let map = {sortNaam: 'naam', sortGenre: 'genre', sortLand: 'land', sortJaren: 'jaren'};
    Object.keys(map).forEach(function(id) {
        let knop = document.getElementById(id);
        if (!knop) return;
        knop.onclick = function() { sorteerArtiesten(map[id]); };
    });
    sorteerArtiesten('naam');
}

// ---- STAP 8: START ALLES! ----
laadArtiestenUitBestand();
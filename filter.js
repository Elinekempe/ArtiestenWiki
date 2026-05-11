// Zoek functie
function initSearch(alleArtiesten) {
    const zoekVak = document.getElementById('zoekInput');
    
    if (!zoekVak) return;
    
    zoekVak.oninput = function() {
        let zoekTerm = zoekVak.value.toLowerCase().trim();
        
        let gefilterdeArtiesten = [];
        for (let i = 0; i < alleArtiesten.length; i++) {
            let artiest = alleArtiesten[i];
            if (artiest.naam.toLowerCase().includes(zoekTerm) ||
                artiest.genre.toLowerCase().includes(zoekTerm) ||
                artiest.awards.toLowerCase().includes(zoekTerm) ||
                (artiest.land && artiest.land.toLowerCase().includes(zoekTerm))) {
                gefilterdeArtiesten.push(artiest);
            }
        }
        
        // Sorteer ook de zoekresultaten
        if (huidigSorteer === 'naam') {
            gefilterdeArtiesten.sort(function(a, b) {
                if (a.naam < b.naam) return -1;
                if (a.naam > b.naam) return 1;
                return 0;
            });
        } else if (huidigSorteer === 'genre') {
            gefilterdeArtiesten.sort(function(a, b) {
                if (a.genre < b.genre) return -1;
                if (a.genre > b.genre) return 1;
                return 0;
            });
        } else if (huidigSorteer === 'land') {
            gefilterdeArtiesten.sort(function(a, b) {
                if (a.land < b.land) return -1;
                if (a.land > b.land) return 1;
                return 0;
            });
        } else if (huidigSorteer === 'jaren') {
            gefilterdeArtiesten.sort(function(a, b) {
                return a.jaren.localeCompare(b.jaren);
            });
        }
        
        toonArtiesten(gefilterdeArtiesten);
    };
}



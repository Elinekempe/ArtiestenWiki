// Filter functie 
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
        
        toonArtiesten(gefilterdeArtiesten);
    };
}

// Start alles 
function laadDetail() {
    // Stap 1: Pak ID uit URL
    let id = getArtistId();
    
    // Stap 2: Geen ID? Toon fout
    if (!id) {
        toonFout('Geen artiest geselecteerd');
        return;
    }
    
    // Stap 3: Laad artiesten en toon details
    laadArtiestenData()
        .then(function(artiesten) {
            let artiest = vindArtiestById(artiesten, id);
            
            // Stap 4: Artiest niet gevonden? Toon fout
            if (!artiest) {
                toonFout('Artiest niet gevonden');
                return;
            }
            
            // Stap 5: Alles gelukt! Vul de pagina
            vulDetailIn(artiest);
            document.title = artiest.naam + ' - ArtiestenWiki';
        })
        .catch(function(error) {
            // Stap 6: Iets misgegaan? Toon fout
            toonFout('Fout bij laden van artiestgegevens');
        });
}

// ---- DEEL 8: START ALLES! ----
laadDetail();
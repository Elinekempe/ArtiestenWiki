// Pakt artiest bij ID 
function getArtistId() {
    let urlDeel = window.location.search;  // Dit is "?id=5"
    let zoekParams = new URLSearchParams(urlDeel);  // Maak er iets van waar we mee kunnen werken
    return zoekParams.get('id');  // Pak de waarde van "id" (bijv. "5")
}

// Laat alle artiesten zien
function laadArtiestenData() {
    // Haal het bestand op
    let antwoord = fetch('artists.json');
    
    // Wacht tot het bestand geladen is en zet het om
    let data = antwoord.then(function(resultaat) {
        return resultaat.json();
    });
    
    // Geef de artiesten terug
    return data.then(function(inhoud) {
        return inhoud.artiesten;
    });
}

// vind artiest in de lijst op basis van ID
function vindArtiestById(artiesten, id) {
    // Loop door alle artiesten heen
    for (let i = 0; i < artiesten.length; i++) {
        if (artiesten[i].id == id) {  // ID gevonden?
            return artiesten[i];  // Geef die artiest terug
        }
    }
    return null;  // Niet gevonden
}
// maakt een list item voor een album of hit
function maakLijstItem(item, type) {
    // Maak een list item (<li>)
    let li = document.createElement('li');
    li.className = 'text-white/90 flex items-center gap-3';
    
    // Maak een icoontje
    let icoon = document.createElement('i');
    if (type === 'album') {
        icoon.className = 'fas fa-compact-disc text-purple-400 text-base';
    } else {
        icoon.className = 'fas fa-star text-yellow-400 text-base';
    }
    
    // Maak de tekst
    let span = document.createElement('span');
    span.textContent = item;
    span.className = 'font-medium';
    
    // Stop icoon en tekst in het list item
    li.appendChild(icoon);
    li.appendChild(span);
    
    return li;
}

// vult de detailpagina met alle gegevens van de artiest
function vulDetailIn(artiest) {
    // 5.1: FOTO
    let foto = document.getElementById('detailFoto');
    if (artiest.afbeelding_url) {
        foto.src = artiest.afbeelding_url;
        foto.alt = artiest.naam;
    } else {
        foto.style.display = 'none';  // Geen foto? Verberg het <img> element helemaal.
    }
    
    // 5.2: BASIS GEGEVENS
    document.getElementById('detailNaam').textContent = artiest.naam;
    document.getElementById('detailEchteNaam').textContent = artiest.echteNaam;
    document.getElementById('detailGenreQuick').textContent = artiest.genre;
    document.getElementById('detailLandQuick').textContent = artiest.land;
    
    // 5.3: BIOGRAFIE
    document.getElementById('detailBio').textContent = artiest.bio;
    
    // 5.4: ALBUMS LIJST
    let albumsContainer = document.getElementById('detailAlbums');
    albumsContainer.innerHTML = '';  // Maak leeg
    
    if (artiest.albums) {
        for (let i = 0; i < artiest.albums.length; i++) {
            let albumItem = maakLijstItem(artiest.albums[i], 'album');
            albumsContainer.appendChild(albumItem);
        }
    }
    
    // 5.5: HITS LIJST
    let hitsContainer = document.getElementById('detailHits');
    hitsContainer.innerHTML = '';  // Maak leeg
    
    if (artiest.hits) {
        for (let i = 0; i < artiest.hits.length; i++) {
            let hitItem = maakLijstItem(artiest.hits[i], 'hit');
            hitsContainer.appendChild(hitItem);
        }
    }
    
    // 5.6: MEER DETAILS
    document.getElementById('detailLand').textContent = artiest.land;
    document.getElementById('detailJaren').textContent = artiest.jaren;
    document.getElementById('detailGenre').textContent = artiest.genre;
    
    // Geboren: als die er niet is, zet "Onbekend"
    if (artiest.geboren) {
        document.getElementById('detailGeboren').textContent = artiest.geboren;
    } else {
        document.getElementById('detailGeboren').textContent = 'Onbekend';
    }
    
    // Awards: als die er niet is, zet "Informatie volgt"
    if (artiest.awards) {
        document.getElementById('detailAwards').textContent = artiest.awards;
    } else {
        document.getElementById('detailAwards').textContent = 'Informatie volgt';
    }
    
    // Labels (platenmaatschappijen)
    let labelsTekst = 'Informatie volgt';
    if (artiest.labels && artiest.labels.length > 0) {
        labelsTekst = '';  // Begin met lege tekst
        for (let i = 0; i < artiest.labels.length; i++) {
            if (i > 0) {
                labelsTekst = labelsTekst + ', ';  // Voeg komma toe (behalve bij de eerste)
            }
            labelsTekst = labelsTekst + artiest.labels[i];
        }
    }
    document.getElementById('detailLabels').textContent = labelsTekst;
    
    // Website link
    let websiteLink = document.getElementById('detailWebsite');
    if (artiest.website) {
        websiteLink.href = artiest.website;
    } else {
        websiteLink.href = '#';  // Geen website? Link naar niks
    }
}
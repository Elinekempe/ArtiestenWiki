function maakArtiestKaart(artiest) {
    let kaart = maakElement('article', 'artist-card bg-gradient-to-br from-white/5 to-white/0 rounded-3xl shadow-xl border border-white/10 overflow-hidden hover:shadow-2xl transition-all duration-300 backdrop-blur cursor-pointer');
    
    // Open de detailpagina zodra iemand op de kaart klikt.
    kaart.onclick = function() {
        window.location.href = 'detail.html?id=' + artiest.id;
    };

    // Bovenste banner met afbeelding of een fallback-icoon.
    let banner = maakElement('div', 'h-48 bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 flex items-center justify-center overflow-hidden');
    
    if (artiest.afbeelding_url && artiest.afbeelding_url !== 'images/undefined.png') {
        let img = document.createElement('img');
        img.className = 'w-full h-full object-cover';
        img.alt = artiest.naam;
        img.src = artiest.afbeelding_url;
        
        // Als de afbeelding niet laadt, tonen we een generiek muziek-icoon.
        img.onerror = function() {
            banner.innerHTML = '<span class="text-6xl">' + (artiest.icoon || '🎵') + '</span>';
        };
        
        banner.appendChild(img);
    } else {
        banner.innerHTML = '<span class="text-6xl">' + (artiest.icoon || '🎵') + '</span>';
    }

    // Tekstuele inhoud van de kaart.
    let inhoud = maakElement('div', 'p-6 space-y-3');
    
    // Eerste rij: naam en land.
    let bovenRij = maakElement('div', 'flex items-start justify-between gap-3');
    bovenRij.append(
        maakElement('h3', 'text-2xl font-black text-white leading-tight flex-1', artiest.naam),
        maakElement('span', 'text-xs bg-gradient-to-r from-violet-400 to-purple-400 text-white px-3 py-1 rounded-full whitespace-nowrap font-bold', artiest.land)
    );

    // Basisinfo over de artiest.
    let genreTekst = maakElement('p', 'text-white/80 text-sm font-semibold', artiest.genre);
    let jarenTekst = maakElement('p', 'text-white/60 text-xs font-medium', artiest.jaren);
    let hitsTitel = maakElement('p', 'text-white/50 text-xs font-bold mt-2', '🎧 Grootste hits:');
    
    // Bouw een korte lijst met maximaal drie hits.
    let topHits = 'Geen hits beschikbaar';
    if (artiest.hits) {
        topHits = '';
        for (let i = 0; i < artiest.hits.length && i < 3; i++) {
            if (i > 0) topHits = topHits + ' • ';
            topHits = topHits + artiest.hits[i];
        }
    }
    let hitsLijst = maakElement('p', 'text-white/60 text-xs', topHits);

    // Onderste balk met een duidelijke call-to-action.
    let voet = maakElement('div', 'pt-3 mt-2 border-t border-white/10 flex items-center justify-between');
    voet.append(
        maakElement('span', 'text-sm font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent', 'Bekijk details →')
    );

    inhoud.append(bovenRij, genreTekst, jarenTekst, hitsTitel, hitsLijst, voet);
    kaart.append(banner, inhoud);
    
    return kaart;
}

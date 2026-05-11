# 🎵 ArtiestenWiki 🎵

ArtiestenWiki is een client-side webapp (HTML + vanilla JavaScript + Tailwind CSS) voor het verkennen van artiesten, albums en hun populairste nummers.
Alle gegevens zijn statisch opgeslagen in JSON, geen backend nodig.

---



##  Projectstructuur

```text
ArtiestenWiki/
├── index.html              # Startpagina: grid van artiestkaarten
├── detail.html             # Detailpagina voor één artiest
├── artists.json            # Hoofddataset met alle artiesten
├── README.md               # Deze file
├── maakElement.js          # Helper-functie voor DOM-creatie
├── script.js               # Bootstrap + event handlers voor index.html
├── cards.js                # Artiestkaart-renderer
├── detail.js               # Detail-hulpfuncties: id ophalen en data laden
├── detail-render.js        # Detail-rendering: lijstitems en pagina vullen
├── detail-error.js         # Foutmelding voor detailpagina
├── detail-main.js          # Startlogica voor detailpagina
├── filter.js               # Zoek- en filterlogica
├── search.js               # Zoekvakinitialisatie
└── images/                 # Profielfoto's en afbeeldingen
```

---



##  Data model (artists.json)

```json
{
  "artiesten": [
    {
      "id": "1",
      "naam": "Beyoncé",
      "land": "🇺🇸 USA",
      "genre": "R&B, Pop, Hip-Hop",
      "jaren": "1997–present",
      "afbeelding_url": "images/beyonce.jpg",
      "hits": ["Halo", "Crazy in Love", "Single Ladies"],
      "albums": ["Dangerously in Love", "I Am", "Beyoncé"],
      "awards": "Multiple Grammy Awards, MTV Awards",
      "website": "https://www.beyonce.com"
    }
    // ... meer artiesten
  ]
}
```


##  Ontwikkelrichtlijnen

### Nieuwe artiest toevoegen

1. Open `artists.json`.
2. Voeg object aan `artiesten` array toe (volg bestaande structuur).
3. Zorg voor unieke `id`.
4. Save + refresh browser.

### Afbeeldingen toevoegen

1. Plaats PNG/JPG in `images/` folder.
2. Zet `afbeelding_url: "images/mijnfoto.jpg"` in artiest-object.

### Velden uitbreiden

- Voeg veld toe aan `artists.json` en artiest-object.
- Update `cards.js` om veld te renderen (bijv. in banner of inhoud).
- Update `detail-render.js` en eventueel `detail-main.js` voor detail-pagina.

### Debugging

- Open browser DevTools (F12).
- Controleer Console tab voor fetch-fouten.
- Controleer Network tab voor JSON-laadstatus.

---

##  Snelstart

1. Open project in VS Code.
2. Installeer extensie **Live Server** (Ritwick Dey).
3. Klik **Go Live** → browser opent automatisch op `http://localhost:5500/index.html`.

**Klaar!** 
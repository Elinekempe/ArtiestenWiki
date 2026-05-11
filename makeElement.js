function maakElement(tag, klasse, tekst) {
    const element = document.createElement(tag);
    if (klasse) element.className = klasse;
    if (tekst !== undefined) element.textContent = tekst;
    return element;
}
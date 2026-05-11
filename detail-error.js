// ---- DEEL 6: TOON FOUTMELDING ----
function toonFout(bericht) {
    let container = document.getElementById('detailContainer');
    container.innerHTML = `
        <div class="bg-gradient-to-br from-red-500/10 to-rose-500/10 rounded-3xl shadow-xl border border-red-400/20 p-12 text-center backdrop-blur">
            <i class="fas fa-circle-exclamation text-6xl text-red-400 mb-4 block"></i>
            <p class="text-3xl text-white font-black mb-3">${bericht}</p>
            <a href="index.html" class="inline-block mt-6 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white rounded-2xl hover:shadow-lg transition font-bold text-lg">← Terug naar alle artiesten</a>
        </div>
    `;
}
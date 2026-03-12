/* ─────────────────────────────────────────
TANDEM — main.js
Language toggle · Search · Filter · Navigation
───────────────────────────────────────── */

// ══════════════════════════════════════════
// CONTENT DATA
// ══════════════════════════════════════════
const ARTICLES = [
{
id: 1,
slug: “industrie-automobile-transition”,
hero: true,
section: { fr: “Économie”, de: “Wirtschaft” },
tags: [“Industrie”, “Klimapolitik”, “Transition”],
date: { fr: “12 mars 2026”, de: “12. März 2026” },
readtime: { fr: “8 min”, de: “8 Min.” },
headline: {
fr: “L’industrie automobile face au grand tournant : Paris et Berlin peuvent-ils parler d’une seule voix ?”,
de: “Die Automobilindustrie vor der Wende: Können Paris und Berlin mit einer Stimme sprechen?”
},
standfirst: {
fr: “Alors que Bruxelles finalise ses normes d’émissions pour 2035, les constructeurs français et allemands se retrouvent divisés sur la stratégie à adopter. Un désaccord qui révèle des fractures plus profondes dans l’axe franco-allemand.”,
de: “Während Brüssel seine Emissionsnormen für 2035 finalisiert, sind französische und deutsche Hersteller in der Strategiefrage gespalten. Eine Meinungsverschiedenheit, die tiefere Risse in der deutsch-französischen Achse offenbart.”
},
body: {
fr: `<p>La scène s'est rejouée en marge du dernier sommet européen : d'un côté, les émissaires de Stellantis plaident pour une flexibilité technologique incluant les carburants synthétiques ; de l'autre, Volkswagen et BMW, sous pression de leurs syndicats, réclament une transition ordonnée mais irréversible vers l'électrique.</p> <p>Ce qui ressemble à un simple désaccord industriel traduit en réalité une divergence de modèles économiques. La France, dont l'industrie automobile est davantage tournée vers les segments généralistes et les marchés émergents, redoute une standardisation technologique qui favoriserait les acteurs dotés de puissantes chaînes d'approvisionnement en batteries — lire : l'Allemagne et la Corée du Sud.</p> <h2>Des filières nationales aux logiques distinctes</h2> <p>L'Allemagne, elle, joue une carte différente. Ses constructeurs premium ont engagé des milliards dans la transition électrique, au point que tout recul de Bruxelles ressemblerait à un aveu d'échec stratégique. Le chancelier Merz, soucieux de ménager une industrie qui emploie près de 800 000 personnes, a multiplié les déclarations en faveur d'une "neutralité technologique" — formule qui, à Paris, sonne comme un euphémisme pour "retarder l'inévitable".</p> <blockquote>« Nous ne pouvons pas nous permettre que la politique climatique devienne le prétexte d'une politique industrielle déguisée. » — Un conseiller de l'Élysée, sous couvert d'anonymat.</blockquote> <p>L'enjeu dépasse la seule question des motorisations. C'est la capacité de l'axe franco-allemand à coordonner ses positions industrielles à Bruxelles qui est en jeu — avec, en toile de fond, la montée en puissance des constructeurs chinois sur le marché européen.</p>`,
de: `<p>Die Szene wiederholte sich am Rande des letzten EU-Gipfels: Auf der einen Seite plädieren Stellantis-Vertreter für technologische Flexibilität einschließlich synthetischer Kraftstoffe; auf der anderen fordern Volkswagen und BMW unter dem Druck ihrer Gewerkschaften einen geordneten, aber unumkehrbaren Übergang zur Elektromobilität.</p> <p>Was wie eine einfache Branchenmeinungsverschiedenheit aussieht, spiegelt in Wirklichkeit eine Divergenz der Wirtschaftsmodelle wider. Frankreich, dessen Automobilindustrie stärker auf Massensegmente und Schwellenmärkte ausgerichtet ist, befürchtet eine technologische Standardisierung, die Akteure mit starken Batterielieferketten bevorzugen würde.</p> <h2>Nationale Wertschöpfungsketten mit unterschiedlicher Logik</h2> <p>Deutschland spielt eine andere Karte. Seine Premiumhersteller haben Milliarden in den Elektroübergang investiert, sodass jeder Rückzieher aus Brüssel wie ein strategisches Scheitern wirken würde. Kanzler Merz, der eine Industrie mit fast 800.000 Beschäftigten schonen will, hat sich wiederholt für "technologische Neutralität" ausgesprochen — eine Formulierung, die in Paris wie ein Euphemismus für "das Unvermeidliche verzögern" klingt.</p> <blockquote>„Wir können es uns nicht leisten, dass Klimapolitik zum Vorwand für verdeckte Industriepolitik wird." — Ein Berater des Élysée, unter der Bedingung der Anonymität.</blockquote> <p>Die Herausforderung geht über die Frage der Antriebstechnologien hinaus. Es geht um die Fähigkeit der deutsch-französischen Achse, ihre industriellen Positionen in Brüssel zu koordinieren — vor dem Hintergrund des wachsenden Einflusses chinesischer Hersteller auf dem europäischen Markt.</p>`
}
},
{
id: 2,
slug: “defence-europeenne-budget”,
hero: false,
section: { fr: “Politique”, de: “Politik” },
tags: [“Défense”, “OTAN”, “Budget”],
date: { fr: “9 mars 2026”, de: “9. März 2026” },
readtime: { fr: “6 min”, de: “6 Min.” },
headline: {
fr: “Défense européenne : le fossé budgétaire entre Paris et Berlin se creuse”,
de: “Europäische Verteidigung: Die Haushaltskluft zwischen Paris und Berlin vertieft sich”
},
standfirst: {
fr: “Malgré les engagements communs pris lors du sommet de Varsovie, les trajectoires budgétaires des deux pays divergent sensiblement. Une asymétrie qui fragilise la crédibilité du pilier européen de l’OTAN.”,
de: “Trotz gemeinsamer Zusagen beim Warschauer Gipfel weichen die Haushaltspfade beider Länder erheblich voneinander ab. Eine Asymmetrie, die die Glaubwürdigkeit des europäischen NATO-Pfeilers untergräbt.”
},
body: { fr: “<p>Article complet disponible…</p>”, de: “<p>Vollständiger Artikel verfügbar…</p>” }
},
{
id: 3,
slug: “modele-social-comparaison”,
hero: false,
section: { fr: “Société”, de: “Gesellschaft” },
tags: [“Travail”, “Retraites”, “Modèle social”],
date: { fr: “5 mars 2026”, de: “5. März 2026” },
readtime: { fr: “7 min”, de: “7 Min.” },
headline: {
fr: “Réforme des retraites : la France regarde l’Allemagne, l’Allemagne regarde ailleurs”,
de: “Rentenreform: Frankreich blickt auf Deutschland, Deutschland schaut woanders hin”
},
standfirst: {
fr: “Alors que Paris tente de digérer sa réforme controversée, Berlin engage à son tour un chantier ambitieux. Deux approches, deux temporalités, et un dialogue de sourds qui illustre les limites de la convergence sociale européenne.”,
de: “Während Paris seine umstrittene Reform zu verdauen versucht, startet Berlin seinerseits ein ehrgeiziges Projekt. Zwei Ansätze, zwei Zeitpläne und ein Dialog unter Tauben, der die Grenzen der europäischen sozialen Konvergenz verdeutlicht.”
},
body: { fr: “<p>Article complet disponible…</p>”, de: “<p>Vollständiger Artikel verfügbar…</p>” }
},
{
id: 4,
slug: “energie-hydrogene-cooperation”,
hero: false,
section: { fr: “Économie”, de: “Wirtschaft” },
tags: [“Énergie”, “Hydrogène”, “Industrie”],
date: { fr: “1 mars 2026”, de: “1. März 2026” },
readtime: { fr: “5 min”, de: “5 Min.” },
headline: {
fr: “Hydrogène vert : l’ambition franco-allemande à l’épreuve des réalités industrielles”,
de: “Grüner Wasserstoff: Der deutsch-französische Ehrgeiz auf dem Prüfstand industrieller Realitäten”
},
standfirst: {
fr: “Les deux pays ont signé une feuille de route commune sur l’hydrogène vert. Mais entre les annonces et les chaînes d’approvisionnement effectives, l’écart reste considérable.”,
de: “Beide Länder haben eine gemeinsame Roadmap für grünen Wasserstoff unterzeichnet. Doch zwischen Ankündigungen und tatsächlichen Lieferketten bleibt die Lücke beträchtlich.”
},
body: { fr: “<p>Article complet disponible…</p>”, de: “<p>Vollständiger Artikel verfügbar…</p>” }
},
{
id: 5,
slug: “opinion-publique-europe”,
hero: false,
section: { fr: “Société”, de: “Gesellschaft” },
tags: [“Sondages”, “Europe”, “Opinion”],
date: { fr: “25 fév. 2026”, de: “25. Feb. 2026” },
readtime: { fr: “4 min”, de: “4 Min.” },
headline: {
fr: “Ce que les Français et les Allemands pensent (vraiment) de l’Europe”,
de: “Was Franzosen und Deutsche (wirklich) über Europa denken”
},
standfirst: {
fr: “Une nouvelle étude comparative révèle des perceptions de l’UE étonnamment convergentes sur le fond, mais divergentes sur les priorités. Le marché intérieur fédère, la politique étrangère divise.”,
de: “Eine neue vergleichende Studie enthüllt überraschend konvergente EU-Wahrnehmungen im Grundsatz, aber divergierende Prioritäten. Der Binnenmarkt verbindet, die Außenpolitik spaltet.”
},
body: { fr: “<p>Article complet disponible…</p>”, de: “<p>Vollständiger Artikel verfügbar…</p>” }
},
{
id: 6,
slug: “investissement-direct-bilateral”,
hero: false,
section: { fr: “Économie”, de: “Wirtschaft” },
tags: [“IDE”, “Investissement”, “PME”],
date: { fr: “18 fév. 2026”, de: “18. Feb. 2026” },
readtime: { fr: “6 min”, de: “6 Min.” },
headline: {
fr: “Investissements croisés franco-allemands : les PME prennent le relais des grands groupes”,
de: “Deutsch-französische Kreuzbeteiligungen: Mittelstand übernimmt die Führung von Großkonzernen”
},
standfirst: {
fr: “Les flux d’investissements directs entre les deux pays montrent une tendance de fond : les grandes fusions sont moins nombreuses, mais les alliances entre ETI et PME se multiplient discrètement.”,
de: “Die Direktinvestitionsströme zwischen beiden Ländern zeigen einen Grundtrend: Große Fusionen nehmen ab, aber Allianzen zwischen mittelständischen Unternehmen nehmen diskret zu.”
},
body: { fr: “<p>Article complet disponible…</p>”, de: “<p>Vollständiger Artikel verfügbar…</p>” }
}
];

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════
let currentLang = ‘fr’;
let currentFilter = ‘all’;
let searchOpen = false;

const UI = {
fr: {
navEco: “Économie”, navPol: “Politique”, navSoc: “Société”, navAbout: “À propos”,
latestLabel: “Derniers articles”,
filterAll: “Tout”, filterEco: “Économie”, filterPol: “Politique”, filterSoc: “Société”,
readMore: “Lire la suite”,
nlTitle: “Restez informé”,
nlBody: “Recevez nos analyses franco-allemandes directement dans votre boîte mail. Une publication hebdomadaire, sans superflu.”,
nlPlaceholder: “Votre adresse e-mail”,
nlBtn: “S’abonner”,
nlPrivacy: “Aucune publicité. Désabonnement en un clic.”,
footerRubrics: “Rubriques”, footerAbout: “À propos”, footerContact: “Contact”, footerMentions: “Mentions légales”,
footerCopy: “© 2026 Tandem — Tous droits réservés”,
searchPlaceholder: “Rechercher un article…”,
searchClose: “Fermer”,
noResults: “Aucun article trouvé”,
topDate: new Date().toLocaleDateString(‘fr-FR’, { weekday:‘long’, year:‘numeric’, month:‘long’, day:‘numeric’ }),
aboutTitle: “À propos de Tandem”,
aboutLead: “Tandem est un blog indépendant consacré aux relations franco-allemandes — politiques, économiques et sociétales.”,
aboutBody: `<p>Lancé en 2026, Tandem part d'un constat simple : la relation franco-allemande est le moteur silencieux de l'Europe, mais elle est souvent traitée soit dans la langue du protocole diplomatique, soit dans celle de la technocratie bruxelloise.</p> <p>L'ambition de ce blog est différente : analyser, avec rigueur mais sans jargon, les dynamiques réelles qui façonnent ce partenariat — des décisions industrielles prises à Stuttgart aux arbitrages budgétaires de Bercy, en passant par les recompositions sociologiques qui traversent les deux sociétés.</p> <p>Tandem est rédigé par un seul auteur, en français et en allemand, avec le souci permanent d'offrir une lecture accessible aux deux publics sans trahir la complexité des sujets traités.</p>`
},
de: {
navEco: “Wirtschaft”, navPol: “Politik”, navSoc: “Gesellschaft”, navAbout: “Über uns”,
latestLabel: “Neueste Artikel”,
filterAll: “Alle”, filterEco: “Wirtschaft”, filterPol: “Politik”, filterSoc: “Gesellschaft”,
readMore: “Weiterlesen”,
nlTitle: “Bleiben Sie informiert”,
nlBody: “Erhalten Sie unsere deutsch-französischen Analysen direkt in Ihr Postfach. Eine wöchentliche Veröffentlichung, ohne Überflüssiges.”,
nlPlaceholder: “Ihre E-Mail-Adresse”,
nlBtn: “Abonnieren”,
nlPrivacy: “Keine Werbung. Abmeldung mit einem Klick.”,
footerRubrics: “Rubriken”, footerAbout: “Über uns”, footerContact: “Kontakt”, footerMentions: “Impressum”,
footerCopy: “© 2026 Tandem — Alle Rechte vorbehalten”,
searchPlaceholder: “Artikel suchen…”,
searchClose: “Schließen”,
noResults: “Keine Artikel gefunden”,
topDate: new Date().toLocaleDateString(‘de-DE’, { weekday:‘long’, year:‘numeric’, month:‘long’, day:‘numeric’ }),
aboutTitle: “Über Tandem”,
aboutLead: “Tandem ist ein unabhängiges Blog zu den deutsch-französischen Beziehungen — politisch, wirtschaftlich und gesellschaftlich.”,
aboutBody: `<p>Tandem wurde 2026 gegründet und geht von einer einfachen Beobachtung aus: Die deutsch-französische Beziehung ist der stille Motor Europas, wird aber oft entweder in der Sprache des diplomatischen Protokolls oder in der der Brüsseler Technokratie behandelt.</p> <p>Die Ambition dieses Blogs ist eine andere: die tatsächlichen Dynamiken, die diese Partnerschaft prägen, mit Genauigkeit, aber ohne Fachjargon zu analysieren — von Industrieentscheidungen in Stuttgart bis zu Haushaltskompromissen im Bercy, über die soziologischen Umbrüche, die beide Gesellschaften durchziehen.</p> <p>Tandem wird von einem einzigen Autor auf Französisch und Deutsch verfasst, stets bemüht, beiden Lesergruppen eine zugängliche Lektüre zu bieten, ohne die Komplexität der behandelten Themen zu verleugnen.</p>`
}
};

// ══════════════════════════════════════════
// RENDER HELPERS
// ══════════════════════════════════════════
function getSectionKey(sectionFr) {
const map = { ‘Économie’: ‘eco’, ‘Politique’: ‘pol’, ‘Société’: ‘soc’,
‘Wirtschaft’: ‘eco’, ‘Politik’: ‘pol’, ‘Gesellschaft’: ‘soc’ };
return map[sectionFr] || ‘eco’;
}

function renderHero(article, lang) {
const l = UI[lang];
const sectionKey = getSectionKey(article.section.fr);
return `<section class="hero-article"> <div class="hero-image-wrap"> <div class="hero-image-placeholder"></div> </div> <div class="hero-content"> <span class="section-label">${article.section[lang]}</span> <h2 class="hero-headline"> <a href="#" onclick="showArticle(${article.id}); return false;">${article.headline[lang]}</a> </h2> <p class="hero-standfirst">${article.standfirst[lang]}</p> <div class="hero-tags"> ${article.tags.map(t =>`<span class="tag" onclick="filterByTag('${t}')">${t}</span>`).join('')} </div> <div class="hero-meta"> <span>${article.date[lang]}</span> <span class="dot"></span> <span>${article.readtime[lang]}</span> </div> <a href="#" class="read-more-btn" onclick="showArticle(${article.id}); return false;"> ${l.readMore} <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"> <path d="M1 6h10M7 2l4 4-4 4"/> </svg> </a> </div> </section>`;
}

function renderCard(article, lang) {
const l = UI[lang];
return `<article class="article-card" data-section="${getSectionKey(article.section.fr)}" data-id="${article.id}"> <div class="card-section"> <span class="section-label">${article.section[lang]}</span> </div> <h3 class="card-headline"> <a href="#" onclick="showArticle(${article.id}); return false;">${article.headline[lang]}</a> </h3> <p class="card-excerpt">${article.standfirst[lang]}</p> <div class="card-tags"> ${article.tags.map(t =>`<span class="tag" onclick="filterByTag('${t}')">${t}</span>`).join('')} </div> <div class="card-meta"> <span>${article.date[lang]}</span> <span>·</span> <span>${article.readtime[lang]}</span> </div> </article>`;
}

function renderArticlePage(article, lang) {
const l = UI[lang];
return `<div class="page-article"> <div class="container"> <div class="article-full"> <a href="#" class="article-back" onclick="showHome(); return false;"> <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" width="12" height="12"> <path d="M11 6H1M5 2L1 6l4 4"/> </svg> ${lang === 'fr' ? 'Retour' : 'Zurück'} </a> <span class="section-label">${article.section[lang]}</span> <h1 class="article-full-headline">${article.headline[lang]}</h1> <p class="article-full-standfirst">${article.standfirst[lang]}</p> <div class="article-full-meta"> <span>${article.date[lang]}</span> <span>·</span> <span>${article.readtime[lang]}</span> </div> <div class="article-full-image-placeholder"></div> <div class="article-body">${article.body[lang]}</div> <div class="article-tags"> ${article.tags.map(t =>`<span class="tag">${t}</span>`).join('')} </div> </div> </div> </div>`;
}

function renderAbout(lang) {
const l = UI[lang];
return ` <div class="page-about"> <div class="container"> <div class="about-content"> <h1>${l.aboutTitle}</h1> <p class="lead">${l.aboutLead}</p> ${l.aboutBody} </div> </div> </div>`;
}

function renderHomePage(lang) {
const l = UI[lang];
const hero = ARTICLES.find(a => a.hero);
const rest = ARTICLES.filter(a => !a.hero);
return ` <div class="page-home"> <div class="container"> <div class="date-strip"> <span class="today">${l.topDate}</span> </div> ${renderHero(hero, lang)} <div class="articles-section-header"> <h2 class="section-label" style="font-size:0.8rem;font-family:var(--font-display);font-weight:600;letter-spacing:0">${l.latestLabel}</h2> <div class="filter-bar" style="margin:0;padding:0;border:none;"> <button class="filter-btn ${currentFilter==='all'?'active':''}" onclick="setFilter('all')">${l.filterAll}</button> <button class="filter-btn ${currentFilter==='eco'?'active':''}" onclick="setFilter('eco')">${l.filterEco}</button> <button class="filter-btn ${currentFilter==='pol'?'active':''}" onclick="setFilter('pol')">${l.filterPol}</button> <button class="filter-btn ${currentFilter==='soc'?'active':''}" onclick="setFilter('soc')">${l.filterSoc}</button> </div> </div> <div class="articles-grid" id="articles-grid"> ${rest.map(a => renderCard(a, lang)).join('')} </div> </div> </div>`;
}

function renderNewsletter(lang) {
const l = UI[lang];
return ` <section class="newsletter-band"> <div class="container"> <div class="newsletter-copy"> <h2>${l.nlTitle}</h2> <p>${l.nlBody}</p> </div> <div class="newsletter-form"> <input type="email" placeholder="${l.nlPlaceholder}" id="nl-email"> <button onclick="handleNewsletter()">${l.nlBtn}</button> <p class="newsletter-privacy">${l.nlPrivacy}</p> </div> </div> </section>`;
}

function renderFooter(lang) {
const l = UI[lang];
return ` <footer class="site-footer"> <div class="container"> <div class="footer-top"> <div class="footer-brand"> <h2><span class="accent">T</span>ANDEM</h2> <p>Affaires franco-allemandes · Deutsch-französische Angelegenheiten</p> </div> <nav class="footer-nav"> <div class="footer-nav-col"> <h3>${l.footerRubrics}</h3> <a href="#" onclick="setSection('eco'); return false;">${l.navEco}</a> <a href="#" onclick="setSection('pol'); return false;">${l.navPol}</a> <a href="#" onclick="setSection('soc'); return false;">${l.navSoc}</a> </div> <div class="footer-nav-col"> <h3>${l.footerAbout}</h3> <a href="#" onclick="showAbout(); return false;">${l.footerAbout}</a> <a href="mailto:contact@tandem-blog.eu">${l.footerContact}</a> <a href="#">${l.footerMentions}</a> </div> </nav> </div> <div class="footer-bottom"> <span>${l.footerCopy}</span> <span>tandem-blog.eu</span> </div> </div> </footer>`;
}

// ══════════════════════════════════════════
// PAGE MANAGEMENT
// ══════════════════════════════════════════
let currentPage = ‘home’;

function render() {
const l = UI[currentLang];

// Top bar date
document.getElementById(‘top-date’).textContent = l.topDate;

// Lang toggle
document.querySelectorAll(’.lang-toggle a’).forEach(a => {
a.classList.toggle(‘active’, a.dataset.lang === currentLang);
});

// Nav labels
document.getElementById(‘nav-eco’).textContent = l.navEco;
document.getElementById(‘nav-pol’).textContent = l.navPol;
document.getElementById(‘nav-soc’).textContent = l.navSoc;
document.getElementById(‘nav-about’).textContent = l.navAbout;

// Active nav
document.querySelectorAll(’.nav-links a’).forEach(a => a.classList.remove(‘active’));

// Main content
const main = document.getElementById(‘main-content’);
if (currentPage === ‘home’) {
document.getElementById(‘nav-home’).classList.add(‘active’);
main.innerHTML = renderHomePage(currentLang);
applyFilter();
} else if (currentPage.startsWith(‘article-’)) {
const id = parseInt(currentPage.split(’-’)[1]);
const article = ARTICLES.find(a => a.id === id);
main.innerHTML = article ? renderArticlePage(article, currentLang) : ‘’;
} else if (currentPage === ‘about’) {
document.getElementById(‘nav-about’).classList.add(‘active’);
main.innerHTML = renderAbout(currentLang);
} else if (currentPage.startsWith(‘section-’)) {
const sec = currentPage.split(’-’)[1];
currentFilter = sec;
main.innerHTML = renderHomePage(currentLang);
applyFilter();
}

// Newsletter & footer
document.getElementById(‘newsletter-zone’).innerHTML = renderNewsletter(currentLang);
document.getElementById(‘footer-zone’).innerHTML = renderFooter(currentLang);

// Search overlay labels
document.getElementById(‘search-input’).placeholder = l.searchPlaceholder;

window.scrollTo({ top: 0, behavior: ‘smooth’ });
}

// ── Navigation actions ──
function setLang(lang) {
currentLang = lang;
render();
}

function showHome() {
currentPage = ‘home’;
currentFilter = ‘all’;
render();
}

function showAbout() {
currentPage = ‘about’;
render();
}

function showArticle(id) {
currentPage = `article-${id}`;
render();
}

function setSection(sec) {
currentPage = ‘home’;
currentFilter = sec;
render();
}

// ── Filtering ──
function setFilter(filter) {
currentFilter = filter;
if (currentPage !== ‘home’) { currentPage = ‘home’; render(); return; }
const btns = document.querySelectorAll(’.filter-btn’);
btns.forEach(b => b.classList.toggle(‘active’, b.textContent.toLowerCase().startsWith(filter === ‘all’ ? UI[currentLang].filterAll.toLowerCase().slice(0,3) : filter === ‘eco’ ? UI[currentLang].filterEco.toLowerCase().slice(0,4) : filter === ‘pol’ ? UI[currentLang].filterPol.toLowerCase().slice(0,3) : UI[currentLang].filterSoc.toLowerCase().slice(0,3))));
applyFilter();
}

function applyFilter() {
const cards = document.querySelectorAll(’.article-card’);
let visible = 0;
cards.forEach(card => {
const show = currentFilter === ‘all’ || card.dataset.section === currentFilter;
card.classList.toggle(‘hidden’, !show);
if (show) visible++;
});
const grid = document.getElementById(‘articles-grid’);
if (grid && visible === 0) {
const existing = grid.querySelector(’.no-results’);
if (!existing) {
const div = document.createElement(‘div’);
div.className = ‘no-results’;
div.textContent = UI[currentLang].noResults;
grid.appendChild(div);
}
} else if (grid) {
const nr = grid.querySelector(’.no-results’);
if (nr) nr.remove();
}
}

function filterByTag(tag) {
// Map tag to section
const ecoTags = [‘Industrie’,‘Énergie’,‘Hydrogène’,‘IDE’,‘Investissement’,‘PME’,‘Wirtschaft’];
const polTags = [‘Défense’,‘OTAN’,‘Budget’,‘Politik’,‘OTAN’];
const socTags = [‘Travail’,‘Retraites’,‘Modèle social’,‘Sondages’,‘Europe’,‘Opinion’];
let sec = ‘all’;
if (ecoTags.includes(tag)) sec = ‘eco’;
else if (polTags.includes(tag)) sec = ‘pol’;
else if (socTags.includes(tag)) sec = ‘soc’;
currentFilter = sec;
currentPage = ‘home’;
render();
}

// ── Search ──
function openSearch() {
document.getElementById(‘search-overlay’).classList.add(‘open’);
setTimeout(() => document.getElementById(‘search-input’).focus(), 100);
searchOpen = true;
}

function closeSearch() {
document.getElementById(‘search-overlay’).classList.remove(‘open’);
document.getElementById(‘search-input’).value = ‘’;
document.getElementById(‘search-results’).innerHTML = ‘’;
searchOpen = false;
}

function handleSearch(e) {
const q = e.target.value.toLowerCase().trim();
const resultsEl = document.getElementById(‘search-results’);
if (!q) { resultsEl.innerHTML = ‘’; return; }
const matches = ARTICLES.filter(a =>
a.headline[currentLang].toLowerCase().includes(q) ||
a.standfirst[currentLang].toLowerCase().includes(q) ||
a.tags.some(t => t.toLowerCase().includes(q))
);
if (matches.length === 0) {
resultsEl.innerHTML = `<p style="color:rgba(255,255,255,0.4);font-family:var(--font-ui);font-size:0.75rem;letter-spacing:0.1em;text-transform:uppercase">${UI[currentLang].noResults}</p>`;
return;
}
resultsEl.innerHTML = matches.map(a => ` <div class="search-result-item" onclick="closeSearch(); showArticle(${a.id});"> <div class="result-section">${a.section[currentLang]}</div> <div class="result-title">${a.headline[currentLang]}</div> </div>`).join(’’);
}

// ── Newsletter ──
function handleNewsletter() {
const email = document.getElementById(‘nl-email’).value;
if (!email || !email.includes(’@’)) return;
const btn = document.querySelector(’.newsletter-form button’);
btn.textContent = currentLang === ‘fr’ ? ‘Merci !’ : ‘Danke!’;
btn.style.background = ‘#e8d5fa’;
setTimeout(() => {
btn.textContent = UI[currentLang].nlBtn;
btn.style.background = ‘’;
document.getElementById(‘nl-email’).value = ‘’;
}, 3000);
}

// ── Keyboard ──
document.addEventListener(‘keydown’, e => {
if (e.key === ‘Escape’ && searchOpen) closeSearch();
});

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
document.addEventListener(‘DOMContentLoaded’, () => {
render();
});
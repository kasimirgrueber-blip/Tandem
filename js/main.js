/* ─────────────────────────────────────────
   TANDEM — main.js
   Language · Search · Filter · Navigation · Sidebar
───────────────────────────────────────── */

// ══════════════════════════════════════════
// CONTENT DATA
// ══════════════════════════════════════════
const ARTICLES = [
  {
    id: 1, slug: "industrie-automobile-transition", hero: true,
    section: { fr: "Économie", de: "Wirtschaft" },
    tags: ["Industrie", "Klimapolitik", "Transition"],
    date: { fr: "12 mars 2026", de: "12. März 2026" },
    readtime: { fr: "8 min", de: "8 Min." },
    headline: {
      fr: "L'industrie automobile face au grand tournant : Paris et Berlin peuvent-ils parler d'une seule voix ?",
      de: "Die Automobilindustrie vor der Wende: Können Paris und Berlin mit einer Stimme sprechen?"
    },
    standfirst: {
      fr: "Alors que Bruxelles finalise ses normes d'émissions pour 2035, les constructeurs français et allemands se retrouvent divisés sur la stratégie à adopter. Un désaccord qui révèle des fractures plus profondes dans l'axe franco-allemand.",
      de: "Während Brüssel seine Emissionsnormen für 2035 finalisiert, sind französische und deutsche Hersteller in der Strategiefrage gespalten. Eine Meinungsverschiedenheit, die tiefere Risse in der deutsch-französischen Achse offenbart."
    },
    body: {
      fr: `<p>La scène s'est rejouée en marge du dernier sommet européen : d'un côté, les émissaires de Stellantis plaident pour une flexibilité technologique incluant les carburants synthétiques ; de l'autre, Volkswagen et BMW, sous pression de leurs syndicats, réclament une transition ordonnée mais irréversible vers l'électrique.</p>
<p>Ce qui ressemble à un simple désaccord industriel traduit en réalité une divergence de modèles économiques. La France, dont l'industrie automobile est davantage tournée vers les segments généralistes et les marchés émergents, redoute une standardisation technologique qui favoriserait les acteurs dotés de puissantes chaînes d'approvisionnement en batteries — lire : l'Allemagne et la Corée du Sud.</p>
<h2>Des filières nationales aux logiques distinctes</h2>
<p>L'Allemagne, elle, joue une carte différente. Ses constructeurs premium ont engagé des milliards dans la transition électrique, au point que tout recul de Bruxelles ressemblerait à un aveu d'échec stratégique. Le chancelier Merz, soucieux de ménager une industrie qui emploie près de 800 000 personnes, a multiplié les déclarations en faveur d'une "neutralité technologique" — formule qui, à Paris, sonne comme un euphémisme pour "retarder l'inévitable".</p>
<blockquote>« Nous ne pouvons pas nous permettre que la politique climatique devienne le prétexte d'une politique industrielle déguisée. » — Un conseiller de l'Élysée, sous couvert d'anonymat.</blockquote>
<p>L'enjeu dépasse la seule question des motorisations. C'est la capacité de l'axe franco-allemand à coordonner ses positions industrielles à Bruxelles qui est en jeu — avec, en toile de fond, la montée en puissance des constructeurs chinois sur le marché européen.</p>`,
      de: `<p>Die Szene wiederholte sich am Rande des letzten EU-Gipfels: Auf der einen Seite plädieren Stellantis-Vertreter für technologische Flexibilität einschließlich synthetischer Kraftstoffe; auf der anderen fordern Volkswagen und BMW unter dem Druck ihrer Gewerkschaften einen geordneten, aber unumkehrbaren Übergang zur Elektromobilität.</p>
<p>Was wie eine einfache Branchenmeinungsverschiedenheit aussieht, spiegelt in Wirklichkeit eine Divergenz der Wirtschaftsmodelle wider. Frankreich, dessen Automobilindustrie stärker auf Massensegmente und Schwellenmärkte ausgerichtet ist, befürchtet eine technologische Standardisierung, die Akteure mit starken Batterielieferketten bevorzugen würde.</p>
<h2>Nationale Wertschöpfungsketten mit unterschiedlicher Logik</h2>
<p>Deutschland spielt eine andere Karte. Seine Premiumhersteller haben Milliarden in den Elektroübergang investiert, sodass jeder Rückzieher aus Brüssel wie ein strategisches Scheitern wirken würde. Kanzler Merz, der eine Industrie mit fast 800.000 Beschäftigten schonen will, hat sich wiederholt für "technologische Neutralität" ausgesprochen — eine Formulierung, die in Paris wie ein Euphemismus für "das Unvermeidliche verzögern" klingt.</p>
<blockquote>„Wir können es uns nicht leisten, dass Klimapolitik zum Vorwand für verdeckte Industriepolitik wird." — Ein Berater des Élysée, unter der Bedingung der Anonymität.</blockquote>
<p>Die Herausforderung geht über die Frage der Antriebstechnologien hinaus. Es geht um die Fähigkeit der deutsch-französischen Achse, ihre industriellen Positionen in Brüssel zu koordinieren — vor dem Hintergrund des wachsenden Einflusses chinesischer Hersteller auf dem europäischen Markt.</p>`
    }
  },
  {
    id: 2, slug: "defence-europeenne-budget", hero: false,
    section: { fr: "Politique", de: "Politik" },
    tags: ["Défense", "OTAN", "Budget"],
    date: { fr: "9 mars 2026", de: "9. März 2026" },
    readtime: { fr: "6 min", de: "6 Min." },
    headline: {
      fr: "Défense européenne : le fossé budgétaire entre Paris et Berlin se creuse",
      de: "Europäische Verteidigung: Die Haushaltskluft zwischen Paris und Berlin vertieft sich"
    },
    standfirst: {
      fr: "Malgré les engagements communs pris lors du sommet de Varsovie, les trajectoires budgétaires des deux pays divergent sensiblement. Une asymétrie qui fragilise la crédibilité du pilier européen de l'OTAN.",
      de: "Trotz gemeinsamer Zusagen beim Warschauer Gipfel weichen die Haushaltspfade beider Länder erheblich voneinander ab. Eine Asymmetrie, die die Glaubwürdigkeit des europäischen NATO-Pfeilers untergräbt."
    },
    body: { fr: "<p>Article complet disponible prochainement.</p>", de: "<p>Vollständiger Artikel demnächst verfügbar.</p>" }
  },
  {
    id: 3, slug: "modele-social-comparaison", hero: false,
    section: { fr: "Société", de: "Gesellschaft" },
    tags: ["Travail", "Retraites", "Modèle social"],
    date: { fr: "5 mars 2026", de: "5. März 2026" },
    readtime: { fr: "7 min", de: "7 Min." },
    headline: {
      fr: "Réforme des retraites : la France regarde l'Allemagne, l'Allemagne regarde ailleurs",
      de: "Rentenreform: Frankreich blickt auf Deutschland, Deutschland schaut woanders hin"
    },
    standfirst: {
      fr: "Alors que Paris tente de digérer sa réforme controversée, Berlin engage à son tour un chantier ambitieux. Deux approches, deux temporalités, et un dialogue de sourds qui illustre les limites de la convergence sociale européenne.",
      de: "Während Paris seine umstrittene Reform zu verdauen versucht, startet Berlin seinerseits ein ehrgeiziges Projekt. Zwei Ansätze, zwei Zeitpläne und ein Dialog unter Tauben, der die Grenzen der europäischen sozialen Konvergenz verdeutlicht."
    },
    body: { fr: "<p>Article complet disponible prochainement.</p>", de: "<p>Vollständiger Artikel demnächst verfügbar.</p>" }
  },
  {
    id: 4, slug: "energie-hydrogene-cooperation", hero: false,
    section: { fr: "Économie", de: "Wirtschaft" },
    tags: ["Énergie", "Hydrogène", "Industrie"],
    date: { fr: "1 mars 2026", de: "1. März 2026" },
    readtime: { fr: "5 min", de: "5 Min." },
    headline: {
      fr: "Hydrogène vert : l'ambition franco-allemande à l'épreuve des réalités industrielles",
      de: "Grüner Wasserstoff: Der deutsch-französische Ehrgeiz auf dem Prüfstand industrieller Realitäten"
    },
    standfirst: {
      fr: "Les deux pays ont signé une feuille de route commune sur l'hydrogène vert. Mais entre les annonces et les chaînes d'approvisionnement effectives, l'écart reste considérable.",
      de: "Beide Länder haben eine gemeinsame Roadmap für grünen Wasserstoff unterzeichnet. Doch zwischen Ankündigungen und tatsächlichen Lieferketten bleibt die Lücke beträchtlich."
    },
    body: { fr: "<p>Article complet disponible prochainement.</p>", de: "<p>Vollständiger Artikel demnächst verfügbar.</p>" }
  },
  {
    id: 5, slug: "opinion-publique-europe", hero: false,
    section: { fr: "Société", de: "Gesellschaft" },
    tags: ["Sondages", "Europe", "Opinion"],
    date: { fr: "25 fév. 2026", de: "25. Feb. 2026" },
    readtime: { fr: "4 min", de: "4 Min." },
    headline: {
      fr: "Ce que les Français et les Allemands pensent (vraiment) de l'Europe",
      de: "Was Franzosen und Deutsche (wirklich) über Europa denken"
    },
    standfirst: {
      fr: "Une nouvelle étude comparative révèle des perceptions de l'UE étonnamment convergentes sur le fond, mais divergentes sur les priorités. Le marché intérieur fédère, la politique étrangère divise.",
      de: "Eine neue vergleichende Studie enthüllt überraschend konvergente EU-Wahrnehmungen im Grundsatz, aber divergierende Prioritäten. Der Binnenmarkt verbindet, die Außenpolitik spaltet."
    },
    body: { fr: "<p>Article complet disponible prochainement.</p>", de: "<p>Vollständiger Artikel demnächst verfügbar.</p>" }
  },
  {
    id: 6, slug: "investissement-direct-bilateral", hero: false,
    section: { fr: "Économie", de: "Wirtschaft" },
    tags: ["IDE", "Investissement", "PME"],
    date: { fr: "18 fév. 2026", de: "18. Feb. 2026" },
    readtime: { fr: "6 min", de: "6 Min." },
    headline: {
      fr: "Investissements croisés franco-allemands : les PME prennent le relais des grands groupes",
      de: "Deutsch-französische Kreuzbeteiligungen: Mittelstand übernimmt die Führung von Großkonzernen"
    },
    standfirst: {
      fr: "Les flux d'investissements directs entre les deux pays montrent une tendance de fond : les grandes fusions sont moins nombreuses, mais les alliances entre ETI et PME se multiplient discrètement.",
      de: "Die Direktinvestitionsströme zwischen beiden Ländern zeigen einen Grundtrend: Große Fusionen nehmen ab, aber Allianzen zwischen mittelständischen Unternehmen nehmen diskret zu."
    },
    body: { fr: "<p>Article complet disponible prochainement.</p>", de: "<p>Vollständiger Artikel demnächst verfügbar.</p>" }
  }
];

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════
let currentLang   = 'fr';
let currentFilter = 'all';
let currentPage   = 'home';
let searchOpen    = false;

const UI = {
  fr: {
    navHome: "Tandem", navEco: "Économie", navPol: "Politique", navSoc: "Société", navAbout: "À propos",
    latestLabel: "Derniers articles",
    filterAll: "Tout", filterEco: "Économie", filterPol: "Politique", filterSoc: "Société",
    readMore: "Lire la suite",
    // Sidebar
    sidebarNlTitle: "Lettre hebdomadaire",
    sidebarNlHeadline: "Restez informé",
    sidebarNlBody: "Analyses franco-allemandes chaque semaine, directement dans votre boîte mail.",
    sidebarNlPlaceholder: "Votre adresse e-mail",
    sidebarNlBtn: "S'abonner",
    sidebarNlPrivacy: "Sans publicité · Désabonnement en un clic",
    sidebarMostRead: "Les plus lus",
    sidebarAboutTitle: "À propos",
    sidebarAboutText: "Tandem est un blog indépendant consacré aux relations franco-allemandes — politiques, économiques et sociétales.",
    sidebarAboutLink: "En savoir plus",
    // Footer
    footerDesc: "Analyses indépendantes des relations franco-allemandes depuis 2026.",
    footerRubrics: "Rubriques", footerInfo: "Informations", footerFollow: "Nous suivre", footerTopics: "Thèmes",
    footerAbout: "À propos", footerContact: "Contact", footerMentions: "Mentions légales", footerArchives: "Archives",
    footerNlTitle: "La lettre Tandem",
    footerNlBody: "Une analyse hebdomadaire franco-allemande dans votre boîte mail.",
    footerNlPlaceholder: "Votre e-mail",
    footerNlBtn: "S'abonner",
    footerCopy: "© 2026 Tandem — Tous droits réservés",
    footerSite: "tandem-blog.eu",
    // Search
    searchPlaceholder: "Rechercher un article…",
    noResults: "Aucun article trouvé",
    // Dates
    topDate: new Date().toLocaleDateString('fr-FR', { weekday:'long', year:'numeric', month:'long', day:'numeric' }),
    // About
    aboutTitle: "À propos de Tandem",
    aboutLead: "Tandem est un blog indépendant consacré aux relations franco-allemandes — politiques, économiques et sociétales.",
    aboutBody: `<p>Lancé en 2026, Tandem part d'un constat simple : la relation franco-allemande est le moteur silencieux de l'Europe, mais elle est souvent traitée soit dans la langue du protocole diplomatique, soit dans celle de la technocratie bruxelloise.</p>
<p>L'ambition de ce blog est différente : analyser, avec rigueur mais sans jargon, les dynamiques réelles qui façonnent ce partenariat — des décisions industrielles prises à Stuttgart aux arbitrages budgétaires de Bercy, en passant par les recompositions sociologiques qui traversent les deux sociétés.</p>
<p>Tandem est rédigé par un seul auteur, en français et en allemand, avec le souci permanent d'offrir une lecture accessible aux deux publics sans trahir la complexité des sujets traités.</p>`
  },
  de: {
    navHome: "Tandem", navEco: "Wirtschaft", navPol: "Politik", navSoc: "Gesellschaft", navAbout: "Über uns",
    latestLabel: "Neueste Artikel",
    filterAll: "Alle", filterEco: "Wirtschaft", filterPol: "Politik", filterSoc: "Gesellschaft",
    readMore: "Weiterlesen",
    sidebarNlTitle: "Wöchentlicher Brief",
    sidebarNlHeadline: "Bleiben Sie informiert",
    sidebarNlBody: "Deutsch-französische Analysen jede Woche direkt in Ihr Postfach.",
    sidebarNlPlaceholder: "Ihre E-Mail-Adresse",
    sidebarNlBtn: "Abonnieren",
    sidebarNlPrivacy: "Keine Werbung · Abmeldung mit einem Klick",
    sidebarMostRead: "Meistgelesen",
    sidebarAboutTitle: "Über uns",
    sidebarAboutText: "Tandem ist ein unabhängiges Blog zu den deutsch-französischen Beziehungen — politisch, wirtschaftlich und gesellschaftlich.",
    sidebarAboutLink: "Mehr erfahren",
    footerDesc: "Unabhängige Analysen der deutsch-französischen Beziehungen seit 2026.",
    footerRubrics: "Rubriken", footerInfo: "Informationen", footerFollow: "Folgen Sie uns", footerTopics: "Themen",
    footerAbout: "Über uns", footerContact: "Kontakt", footerMentions: "Impressum", footerArchives: "Archiv",
    footerNlTitle: "Der Tandem-Brief",
    footerNlBody: "Eine wöchentliche deutsch-französische Analyse in Ihrem Postfach.",
    footerNlPlaceholder: "Ihre E-Mail",
    footerNlBtn: "Abonnieren",
    footerCopy: "© 2026 Tandem — Alle Rechte vorbehalten",
    footerSite: "tandem-blog.eu",
    searchPlaceholder: "Artikel suchen…",
    noResults: "Keine Artikel gefunden",
    topDate: new Date().toLocaleDateString('de-DE', { weekday:'long', year:'numeric', month:'long', day:'numeric' }),
    aboutTitle: "Über Tandem",
    aboutLead: "Tandem ist ein unabhängiges Blog zu den deutsch-französischen Beziehungen — politisch, wirtschaftlich und gesellschaftlich.",
    aboutBody: `<p>Tandem wurde 2026 gegründet und geht von einer einfachen Beobachtung aus: Die deutsch-französische Beziehung ist der stille Motor Europas, wird aber oft entweder in der Sprache des diplomatischen Protokolls oder in der der Brüsseler Technokratie behandelt.</p>
<p>Die Ambition dieses Blogs ist eine andere: die tatsächlichen Dynamiken, die diese Partnerschaft prägen, mit Genauigkeit, aber ohne Fachjargon zu analysieren — von Industrieentscheidungen in Stuttgart bis zu Haushaltskompromissen im Bercy, über die soziologischen Umbrüche, die beide Gesellschaften durchziehen.</p>
<p>Tandem wird von einem einzigen Autor auf Französisch und Deutsch verfasst, stets bemüht, beiden Lesergruppen eine zugängliche Lektüre zu bieten, ohne die Komplexität der behandelten Themen zu verleugnen.</p>`
  }
};

// ══════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════
function getSectionKey(sectionFr) {
  const map = { 'Économie':'eco','Politique':'pol','Société':'soc','Wirtschaft':'eco','Politik':'pol','Gesellschaft':'soc' };
  return map[sectionFr] || 'eco';
}

// ══════════════════════════════════════════
// RENDER: HERO
// ══════════════════════════════════════════
function renderHero(article, lang) {
  const l = UI[lang];
  return `
  <section class="hero-article">
    <div class="hero-image-placeholder"></div>
    <div class="hero-content">
      <span class="label">${article.section[lang]}</span>
      <h2 class="hero-headline">
        <a href="#" onclick="showArticle(${article.id}); return false;">${article.headline[lang]}</a>
      </h2>
      <p class="hero-standfirst">${article.standfirst[lang]}</p>
      <div class="hero-tags">
        ${article.tags.map(t => `<span class="tag" onclick="filterByTag('${t}')">${t}</span>`).join('')}
      </div>
      <div class="hero-meta">
        <span>${article.date[lang]}</span>
        <span>·</span>
        <span>${article.readtime[lang]}</span>
      </div>
      <a href="#" class="read-more-btn" onclick="showArticle(${article.id}); return false;">
        ${l.readMore}
        <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M1 6h10M7 2l4 4-4 4"/>
        </svg>
      </a>
    </div>
  </section>`;
}

// ══════════════════════════════════════════
// RENDER: CARD
// ══════════════════════════════════════════
function renderCard(article, lang) {
  const l = UI[lang];
  return `
  <article class="article-card" data-section="${getSectionKey(article.section.fr)}" data-id="${article.id}">
    <div class="card-image-placeholder"></div>
    <span class="label">${article.section[lang]}</span>
    <h3 class="card-headline">
      <a href="#" onclick="showArticle(${article.id}); return false;">${article.headline[lang]}</a>
    </h3>
    <p class="card-excerpt">${article.standfirst[lang]}</p>
    <div class="card-tags">
      ${article.tags.map(t => `<span class="tag" onclick="filterByTag('${t}')">${t}</span>`).join('')}
    </div>
    <div class="card-meta">
      <span>${article.date[lang]}</span>
      <span>·</span>
      <span>${article.readtime[lang]}</span>
    </div>
  </article>`;
}

// ══════════════════════════════════════════
// RENDER: SIDEBAR
// ══════════════════════════════════════════
function renderSidebar(lang) {
  const l = UI[lang];
  const mostRead = [...ARTICLES].sort(() => 0.5 - Math.random()).slice(0, 4);
  return `
  <aside class="home-sidebar">

    <!-- Newsletter -->
    <div class="sidebar-block sidebar-newsletter">
      <div class="sidebar-block-title">${l.sidebarNlTitle}</div>
      <div class="sidebar-nl-headline">${l.sidebarNlHeadline}</div>
      <p class="sidebar-nl-body">${l.sidebarNlBody}</p>
      <div class="sidebar-nl-form">
        <input type="email" id="sidebar-nl-email" placeholder="${l.sidebarNlPlaceholder}">
        <button onclick="handleSidebarNl()">${l.sidebarNlBtn}</button>
        <p class="sidebar-nl-privacy">${l.sidebarNlPrivacy}</p>
      </div>
    </div>

    <!-- Most read -->
    <div class="sidebar-block sidebar-most-read">
      <div class="sidebar-block-title">${l.sidebarMostRead}</div>
      <ol>
        ${mostRead.map(a => `
        <li onclick="showArticle(${a.id})">
          <div>
            <div class="mr-title">${a.headline[lang]}</div>
            <div class="mr-section">${a.section[lang]}</div>
          </div>
        </li>`).join('')}
      </ol>
    </div>

    <!-- About -->
    <div class="sidebar-block sidebar-about">
      <div class="sidebar-block-title">${l.sidebarAboutTitle}</div>
      <p>${l.sidebarAboutText}</p>
      <a href="#" onclick="showAbout(); return false;">${l.sidebarAboutLink} →</a>
    </div>

  </aside>`;
}

// ══════════════════════════════════════════
// RENDER: HOME PAGE
// ══════════════════════════════════════════
function renderHomePage(lang) {
  const l = UI[lang];
  const hero = ARTICLES.find(a => a.hero);
  const rest = ARTICLES.filter(a => !a.hero);
  return `
  <div class="page-home">
    <div class="container">
      <div class="date-strip">${l.topDate}</div>
      <div class="home-layout">
        <div class="home-main">
          ${renderHero(hero, lang)}
          <div class="articles-section-header">
            <span class="label" style="font-size:0.72rem;font-family:var(--font-display);font-weight:600;letter-spacing:0;text-transform:none;color:var(--black)">${l.latestLabel}</span>
            <div class="filter-bar">
              <button class="filter-btn ${currentFilter==='all'?'active':''}" onclick="setFilter('all')">${l.filterAll}</button>
              <button class="filter-btn ${currentFilter==='eco'?'active':''}" onclick="setFilter('eco')">${l.filterEco}</button>
              <button class="filter-btn ${currentFilter==='pol'?'active':''}" onclick="setFilter('pol')">${l.filterPol}</button>
              <button class="filter-btn ${currentFilter==='soc'?'active':''}" onclick="setFilter('soc')">${l.filterSoc}</button>
            </div>
          </div>
          <div class="articles-grid" id="articles-grid">
            ${rest.map(a => renderCard(a, lang)).join('')}
          </div>
        </div>
        ${renderSidebar(lang)}
      </div>
    </div>
  </div>`;
}

// ══════════════════════════════════════════
// RENDER: ARTICLE PAGE
// ══════════════════════════════════════════
function renderArticlePage(article, lang) {
  return `
  <div class="page-article">
    <div class="container">
      <div class="article-full">
        <a href="#" class="article-back" onclick="showHome(); return false;">
          <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5" width="12" height="12">
            <path d="M11 6H1M5 2L1 6l4 4"/>
          </svg>
          ${lang === 'fr' ? 'Retour' : 'Zurück'}
        </a>
        <span class="label">${article.section[lang]}</span>
        <h1 class="article-full-headline">${article.headline[lang]}</h1>
        <p class="article-full-standfirst">${article.standfirst[lang]}</p>
        <div class="article-full-meta">
          <span>${article.date[lang]}</span>
          <span>·</span>
          <span>${article.readtime[lang]}</span>
        </div>
        <div class="article-full-image-placeholder"></div>
        <div class="article-body">${article.body[lang]}</div>
        <div class="article-tags">
          ${article.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  </div>`;
}

// ══════════════════════════════════════════
// RENDER: ABOUT
// ══════════════════════════════════════════
function renderAbout(lang) {
  const l = UI[lang];
  return `
  <div class="page-about">
    <div class="container">
      <div class="about-content">
        <h1>${l.aboutTitle}</h1>
        <p class="lead">${l.aboutLead}</p>
        ${l.aboutBody}
      </div>
    </div>
  </div>`;
}

// ══════════════════════════════════════════
// RENDER: FOOTER
// ══════════════════════════════════════════
function renderFooter(lang) {
  const l = UI[lang];
  const allTags = [...new Set(ARTICLES.flatMap(a => a.tags))].slice(0, 10);
  return `
  <footer class="site-footer">

    <!-- Brand + nav columns -->
    <div class="footer-body">
      <div class="container">
        <div class="footer-brand">
          <span class="footer-logo" onclick="showHome()">TANDEM</span>
          <p class="footer-brand-sub">Affaires franco-allemandes<br>Deutsch-französische Angelegenheiten</p>
          <p class="footer-brand-desc">${l.footerDesc}</p>
          <div class="footer-hr"></div>
          <span class="footer-brand-est">Est. 2026</span>
        </div>
        <div class="footer-cols">
          <div class="footer-col">
            <h3>${l.footerRubrics}</h3>
            <a href="#" onclick="setSection('eco'); return false;">${l.navEco}</a>
            <a href="#" onclick="setSection('pol'); return false;">${l.navPol}</a>
            <a href="#" onclick="setSection('soc'); return false;">${l.navSoc}</a>
          </div>
          <div class="footer-col">
            <h3>${l.footerInfo}</h3>
            <a href="#" onclick="showAbout(); return false;">${l.footerAbout}</a>
            <a href="mailto:contact@tandem-blog.eu">${l.footerContact}</a>
            <a href="#">${l.footerMentions}</a>
            <a href="#">${l.footerArchives}</a>
          </div>
          <div class="footer-col">
            <h3>${l.footerFollow}</h3>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter / X</a>
            <a href="#">RSS</a>
          </div>
          <div class="footer-col">
            <h3>${l.footerTopics}</h3>
            <div class="footer-tag-list">
              ${allTags.map(t => `<span class="footer-tag" onclick="filterByTag('${t}')">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Newsletter band -->
    <div class="footer-nl">
      <div class="container">
        <div class="footer-nl-copy">
          <h4>${l.footerNlTitle}</h4>
          <p>${l.footerNlBody}</p>
        </div>
        <div class="footer-nl-form">
          <input type="email" id="footer-nl-email" placeholder="${l.footerNlPlaceholder}">
          <button onclick="handleFooterNl()">${l.footerNlBtn}</button>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="footer-bottom">
      <div class="container">
        <span>${l.footerCopy}</span>
        <div class="footer-bottom-links">
          <a href="#">${l.footerMentions}</a>
          <a href="#">${l.footerContact}</a>
          <a href="#">RSS</a>
          <span>${l.footerSite}</span>
        </div>
      </div>
    </div>

  </footer>`;
}

// ══════════════════════════════════════════
// PAGE MANAGEMENT
// ══════════════════════════════════════════
function render() {
  const l = UI[currentLang];

  // Top bar date
  document.getElementById('top-date').textContent = l.topDate;

  // Lang toggle
  document.querySelectorAll('.lang-toggle a').forEach(a =>
    a.classList.toggle('active', a.dataset.lang === currentLang));

  // Nav labels
  document.getElementById('nav-home').textContent  = l.navHome;
  document.getElementById('nav-eco').textContent   = l.navEco;
  document.getElementById('nav-pol').textContent   = l.navPol;
  document.getElementById('nav-soc').textContent   = l.navSoc;
  document.getElementById('nav-about').textContent = l.navAbout;

  // Clear active
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  // Main content
  const main = document.getElementById('main-content');
  if (currentPage === 'home') {
    document.getElementById('nav-home').classList.add('active');
    main.innerHTML = renderHomePage(currentLang);
    applyFilter();
  } else if (currentPage.startsWith('article-')) {
    const id = parseInt(currentPage.split('-')[1]);
    const article = ARTICLES.find(a => a.id === id);
    main.innerHTML = article ? renderArticlePage(article, currentLang) : '';
  } else if (currentPage === 'about') {
    document.getElementById('nav-about').classList.add('active');
    main.innerHTML = renderAbout(currentLang);
  } else if (currentPage.startsWith('section-')) {
    const sec = currentPage.split('-')[1];
    currentFilter = sec;
    main.innerHTML = renderHomePage(currentLang);
    applyFilter();
  }

  // Footer
  document.getElementById('footer-zone').innerHTML = renderFooter(currentLang);

  // Search placeholder
  document.getElementById('search-input').placeholder = l.searchPlaceholder;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ══════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════
function setLang(lang) { currentLang = lang; render(); }

function showHome() {
  currentPage = 'home'; currentFilter = 'all'; render();
}
function showAbout() {
  currentPage = 'about'; render();
}
function showArticle(id) {
  currentPage = `article-${id}`; render();
}
function setSection(sec) {
  currentPage = 'home'; currentFilter = sec; render();
}

// ── Mobile nav ──
function toggleMobileNav() {
  const links = document.getElementById('nav-links');
  const btn   = document.getElementById('hamburger');
  links.classList.toggle('mobile-open');
  btn.classList.toggle('open');
}
function closeMobileNav() {
  document.getElementById('nav-links').classList.remove('mobile-open');
  document.getElementById('hamburger').classList.remove('open');
}

// ══════════════════════════════════════════
// FILTERING
// ══════════════════════════════════════════
function setFilter(filter) {
  currentFilter = filter;
  if (currentPage !== 'home') { currentPage = 'home'; render(); return; }
  document.querySelectorAll('.filter-btn').forEach(b => {
    const txt = b.textContent.trim().toLowerCase();
    const l = UI[currentLang];
    b.classList.toggle('active',
      (filter === 'all' && txt === l.filterAll.toLowerCase()) ||
      (filter === 'eco' && txt === l.filterEco.toLowerCase()) ||
      (filter === 'pol' && txt === l.filterPol.toLowerCase()) ||
      (filter === 'soc' && txt === l.filterSoc.toLowerCase())
    );
  });
  applyFilter();
}

function applyFilter() {
  const cards = document.querySelectorAll('.article-card');
  let visible = 0;
  cards.forEach(card => {
    const show = currentFilter === 'all' || card.dataset.section === currentFilter;
    card.classList.toggle('hidden', !show);
    if (show) visible++;
  });
  const grid = document.getElementById('articles-grid');
  if (!grid) return;
  const nr = grid.querySelector('.no-results');
  if (visible === 0 && !nr) {
    const div = document.createElement('div');
    div.className = 'no-results';
    div.textContent = UI[currentLang].noResults;
    grid.appendChild(div);
  } else if (visible > 0 && nr) {
    nr.remove();
  }
}

function filterByTag(tag) {
  const ecoTags = ['Industrie','Énergie','Hydrogène','IDE','Investissement','PME'];
  const polTags = ['Défense','OTAN','Budget'];
  const socTags = ['Travail','Retraites','Modèle social','Sondages','Europe','Opinion'];
  let sec = 'all';
  if (ecoTags.includes(tag)) sec = 'eco';
  else if (polTags.includes(tag)) sec = 'pol';
  else if (socTags.includes(tag)) sec = 'soc';
  currentFilter = sec;
  currentPage = 'home';
  render();
}

// ══════════════════════════════════════════
// SEARCH
// ══════════════════════════════════════════
function openSearch() {
  document.getElementById('search-overlay').classList.add('open');
  setTimeout(() => document.getElementById('search-input').focus(), 100);
  searchOpen = true;
}
function closeSearch() {
  document.getElementById('search-overlay').classList.remove('open');
  document.getElementById('search-input').value = '';
  document.getElementById('search-results').innerHTML = '';
  searchOpen = false;
}
function handleSearch(e) {
  const q = e.target.value.toLowerCase().trim();
  const el = document.getElementById('search-results');
  if (!q) { el.innerHTML = ''; return; }
  const hits = ARTICLES.filter(a =>
    a.headline[currentLang].toLowerCase().includes(q) ||
    a.standfirst[currentLang].toLowerCase().includes(q) ||
    a.tags.some(t => t.toLowerCase().includes(q))
  );
  if (!hits.length) {
    el.innerHTML = `<p style="color:rgba(255,255,255,0.35);font-family:var(--font-ui);font-size:0.72rem;letter-spacing:0.1em;text-transform:uppercase">${UI[currentLang].noResults}</p>`;
    return;
  }
  el.innerHTML = hits.map(a => `
    <div class="search-result-item" onclick="closeSearch(); showArticle(${a.id});">
      <div class="result-section">${a.section[currentLang]}</div>
      <div class="result-title">${a.headline[currentLang]}</div>
    </div>`).join('');
}

// ══════════════════════════════════════════
// NEWSLETTER HANDLERS
// ══════════════════════════════════════════
function handleSidebarNl() {
  const input = document.getElementById('sidebar-nl-email');
  if (!input || !input.value.includes('@')) return;
  const btn = input.closest('.sidebar-nl-form').querySelector('button');
  btn.textContent = currentLang === 'fr' ? 'Merci !' : 'Danke!';
  btn.style.background = '#555';
  setTimeout(() => {
    btn.textContent = UI[currentLang].sidebarNlBtn;
    btn.style.background = '';
    input.value = '';
  }, 3000);
}

function handleFooterNl() {
  const input = document.getElementById('footer-nl-email');
  if (!input || !input.value.includes('@')) return;
  const btn = input.closest('.footer-nl-form').querySelector('button');
  btn.textContent = currentLang === 'fr' ? 'Merci !' : 'Danke!';
  btn.style.opacity = '0.6';
  setTimeout(() => {
    btn.textContent = UI[currentLang].footerNlBtn;
    btn.style.opacity = '';
    input.value = '';
  }, 3000);
}

// ══════════════════════════════════════════
// KEYBOARD
// ══════════════════════════════════════════
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (searchOpen) closeSearch();
    closeMobileNav();
  }
});

// Close mobile nav on outside click
document.addEventListener('click', e => {
  const nav = document.getElementById('nav-links');
  const btn = document.getElementById('hamburger');
  if (nav && nav.classList.contains('mobile-open') &&
      !nav.contains(e.target) && !btn.contains(e.target)) {
    closeMobileNav();
  }
});

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => { render(); });

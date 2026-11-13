const env = typeof process !== 'undefined' && process.env ? process.env : {};

export const SITE_CONFIG = {
  slug: "alltagsrechner",
  name: env.SITE_NAME || "CleverRechner",
  theme: "fintech-modern",
  tagline: "Steuern, Stromkosten & Sparpotenziale sofort berechnen",
  description: "Interaktive Alltagsrechner und verständliche Schritt-für-Schritt-Ratgeber zu Steuern, Stromkosten, Förderungen und Sparen in Deutschland.",
  adsenseClientId: env.PUBLIC_ADSENSE_CLIENT || (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.PUBLIC_ADSENSE_CLIENT : '') || '',
  categories: {
  "steuern-freibetraege": {
    "slug": "steuern-freibetraege",
    "name": "Steuern & Freibeträge",
    "icon": "🧾",
    "description": "Homeoffice, Pendlerpauschale, Werbungskosten & Pauschbeträge einfach berechnet.",
    "accent": "#047857"
  },
  "strom-heizkosten": {
    "slug": "strom-heizkosten",
    "name": "Strom & Heizkosten",
    "icon": "⚡",
    "description": "Kilowattstunden, Standby-Kosten & Heizwärme exakt in Euro umrechnen.",
    "accent": "#0d9488"
  },
  "foerderung-zuschuesse": {
    "slug": "foerderung-zuschuesse",
    "name": "Förderung & Zuschüsse",
    "icon": "🏛️",
    "description": "Wohngeld, Kinderzuschlag & staatliche Prämien mit klaren Grenzwerte-Checks.",
    "accent": "#059669"
  },
  "sparen-haushalt": {
    "slug": "sparen-haushalt",
    "name": "Sparen & Haushalt",
    "icon": "💶",
    "description": "Versteckte Fixkosten, Verträge & Budget-Regeln für mehr Netto im Monat.",
    "accent": "#0f766e"
  },
  "geldanlage-rechner": {
    "slug": "geldanlage-rechner",
    "name": "Geldanlage & Zinsen",
    "icon": "📈",
    "description": "Zinseszins, Notgroschen, Freibeträge & Sparpläne verständlich durchgerechnet.",
    "accent": "#15803d"
  }
},
};

export function getCategoryList() {
  return Object.values(SITE_CONFIG.categories);
}

export function getCategoryBySlug(slug) {
  const list = Object.values(SITE_CONFIG.categories);
  return SITE_CONFIG.categories[slug] || list[0];
}

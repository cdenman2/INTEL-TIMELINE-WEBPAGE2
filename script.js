// RTL languages
const RTL_LANGS = new Set(["ar", "he"]);

// Your translations object (keep what you already have here)
const translations = {
  en: { /* ... your English keys ... */ },
  ar: { /* ... your Arabic keys ... */ },
  he: { /* ... */ },
  vi: { /* ... */ },
  de: { /* ... */ },
  fr: { /* ... */ },
  es: { /* ... */ },
  hi: { /* ... */ }
};

function setLanguage(lang) {
  const chosen = translations[lang] ? lang : "ar"; // default to Arabic if unknown

  // Set page lang/dir for accessibility + RTL rubric
  document.documentElement.lang = chosen;
  document.documentElement.dir = RTL_LANGS.has(chosen) ? "rtl" : "ltr";

  // Translate all tagged elements
  const dict = translations[chosen];

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict && dict[key]) {
      el.textContent = dict[key];
    }
  });
}

function wireLanguageControls() {
  // A) If you're using a <select id="languageSelector">
  const selector = document.getElementById("languageSelector");
  if (selector) {
    selector.addEventListener("change", (e) => {
      setLanguage(e.target.value);
    });
  }

  // B) If you're using buttons/tabs like <button data-lang="ar">...</button>
  document.querySelectorAll("[data-lang]").forEach(btn => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (selector) selector.value = lang; // keep UI in sync if both exist
      setLanguage(lang);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  wireLanguageControls();

  // Start in Arabic EVERY time (as you requested)
  const selector = document.getElementById("languageSelector");
  if (selector) selector.value = "ar";
  setLanguage("ar");
});

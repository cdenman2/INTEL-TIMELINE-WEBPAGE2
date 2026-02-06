const RTL_LANGS = new Set(["ar", "he"]);

const translations = {
  ar: {
    navLogos: "الشعارات",
    navTimeline: "الخط الزمني",
    navImpact: "الأثر",
    navSubscribe: "الاشتراك",
    languageLabel: "اللغة",

    heroTitle: "مستقبل الابتكار",
    heroSubtitle: "لمحة سريعة عن محطات Intel الرئيسية 1968–2020 ومجالات الأثر.",

    logosTitle: "الشعارات",
    logoOldLabel: "الشعار القديم",
    logoNewLabel: "الشعار الجديد",

    timelineTitle: "الخط الزمني",
    timelineHint: "مرر المؤشر فوق كل بطاقة لإظهار النص. استخدم شريط التمرير للتحرك يمينًا ويسارًا.",

    t1968Title: "Intel",
    t1968Body: "تأسست Intel وبدأت رحلتها في أشباه الموصلات.",
    t1971Title: "Intel 4004",
    t1971Body: "أول معالج دقيق تجاري في العالم.",
    t1978Title: "Intel 8086",
    t1978Body: "أساس معمارية x86 للحواسيب الحديثة.",
    t1985Title: "Intel 80386",
    t1985Body: "معالج 32-بت أحدث نقلة في الأداء.",
    t2006Title: "Intel Core 2 Duo",
    t2006Body: "قفزة كبيرة في الأداء وكفاءة الطاقة.",
    t2020Title: "Intel Atom",
    t2020Body: "معالجات موفرة للطاقة للأجهزة الحديثة.",

    impactTitle: "المجتمع، المسؤولية، الاستدامة",
    societyTitle: "المجتمع",
    societyBody: "الاستثمار في التعليم والمهارات الرقمية.",
    responsibilityTitle: "المسؤولية",
    responsibilityBody: "الالتزام بالسلامة والمعايير والشفافية.",
    sustainabilityTitle: "الاستدامة",
    sustainabilityBody: "تقليل استهلاك الطاقة ودعم البيئة.",
    learnMore: "اعرف المزيد",

    subscribeTitle: "اشترك في نشرة الاستدامة",
    emailLabel: "البريد الإلكتروني",
    subscribeBtn: "اشترك",
    privacyNote: "نحترم خصوصيتك. يمكنك إلغاء الاشتراك في أي وقت.",

    footerIntel: "Intel",
    footerNote: "مشروع تعليمي – توطين + إمكانية وصول."
  },

  he: {
    navLogos: "לוגואים",
    navTimeline: "ציר זמן",
    navImpact: "השפעה",
    navSubscribe: "הרשמה",
    languageLabel: "שפה",

    heroTitle: "עתיד החדשנות",
    heroSubtitle: "סקירה קצרה של אבני דרך מרכזיות של Intel לשנים 1968–2020 ותחומי השפעה.",

    logosTitle: "לוגואים",
    logoOldLabel: "לוגו ישן",
    logoNewLabel: "לוגו חדש",

    timelineTitle: "ציר זמן",
    timelineHint: "רחף מעל כל כרטיס כדי להציג טקסט. השתמש בסרגל הגלילה כדי לנוע ימינה ושמאלה.",

    t1968Title: "Intel",
    t1968Body: "Intel נוסדה והחלה את דרכה בתחום המוליכים למחצה.",
    t1971Title: "Intel 4004",
    t1971Body: "המיקרו-מעבד המסחרי הראשון בעולם.",
    t1978Title: "Intel 8086",
    t1978Body: "הבסיס לארכיטקטורת x86 למחשבים מודרניים.",
    t1985Title: "Intel 80386",
    t1985Body: "מעבד 32-ביט שסימן קפיצה משמעותית בביצועים.",
    t2006Title: "Intel Core 2 Duo",
    t2006Body: "קפיצה גדולה בביצועים וביעילות אנרגטית.",
    t2020Title: "Intel Atom",
    t2020Body: "מעבדים חסכוניים באנרגיה למכשירים מודרניים.",

    impactTitle: "חברה, אחריות, קיימות",
    societyTitle: "חברה",
    societyBody: "השקעה בחינוך ובכישורים דיגיטליים.",
    responsibilityTitle: "אחריות",
    responsibilityBody: "מחויבות לבטיחות, לתקנים ולשקיפות.",
    sustainabilityTitle: "קיימות",
    sustainabilityBody: "צמצום צריכת אנרגיה ותמיכה בסביבה.",
    learnMore: "למידע נוסף",

    subscribeTitle: "הרשמה לניוזלטר הקיימות",
    emailLabel: "כתובת אימייל",
    subscribeBtn: "הרשמה",
    privacyNote: "אנחנו מכבדים את פרטיותך. ניתן לבטל בכל עת.",

    footerIntel: "Intel",
    footerNote: "פרויקט לימודי – לוקליזציה + נגישות."
  },

  en: {
    navLogos: "Logos",
    navTimeline: "Timeline",
    navImpact: "Impact",
    navSubscribe: "Subscribe",
    languageLabel: "Language",

    heroTitle: "Future of Innovation",
    heroSubtitle: "A quick look at key Intel milestones 1968–2020 and impact areas.",

    logosTitle: "Logos",
    logoOldLabel: "Old logo",
    logoNewLabel: "New logo",

    timelineTitle: "Timeline",
    timelineHint: "Hover over each card to reveal the text. Use the scrollbar to move left and right.",

    t1968Title: "Intel",
    t1968Body: "Intel was founded and began its journey in semiconductors.",
    t1971Title: "Intel 4004",
    t1971Body: "The world’s first commercial microprocessor.",
    t1978Title: "Intel 8086",
    t1978Body: "Foundation of the x86 architecture for modern computers.",
    t1985Title: "Intel 80386",
    t1985Body: "A 32-bit processor that marked a major leap in performance.",
    t2006Title: "Intel Core 2 Duo",
    t2006Body: "A big jump in performance and energy efficiency.",
    t2020Title: "Intel Atom",
    t2020Body: "Power-efficient processors for modern devices.",

    impactTitle: "Society, Responsibility, Sustainability",
    societyTitle: "Society",
    societyBody: "Investing in education and digital skills.",
    responsibilityTitle: "Responsibility",
    responsibilityBody: "Commitment to safety, standards, and transparency.",
    sustainabilityTitle: "Sustainability",
    sustainabilityBody: "Reducing energy use and supporting the environment.",
    learnMore: "Learn More",

    subscribeTitle: "Subscribe to the sustainability newsletter",
    emailLabel: "Email address",
    subscribeBtn: "Subscribe",
    privacyNote: "We respect your privacy. Unsubscribe anytime.",

    footerIntel: "Intel",
    footerNote: "Educational project – localization + accessibility."
  }
};

function setLanguage(lang) {
  const chosen = translations[lang] ? lang : "ar";
  document.documentElement.lang = chosen;
  document.documentElement.dir = RTL_LANGS.has(chosen) ? "rtl" : "ltr";

  const dict = translations[chosen];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
}

function wireLanguageSelector() {
  const selector = document.getElementById("languageSelector");
  if (!selector) return;

  selector.addEventListener("change", (e) => setLanguage(e.target.value));

  selector.value = "ar";
  setLanguage("ar");
}

function wireImpactToggles() {
  document.querySelectorAll("button[data-toggle]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-toggle");
      const panel = document.getElementById(id);
      if (!panel) return;

      const willOpen = panel.hasAttribute("hidden");
      if (willOpen) panel.removeAttribute("hidden");
      else panel.setAttribute("hidden", "");

      btn.setAttribute("aria-expanded", String(willOpen));
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  wireLanguageSelector();
  wireImpactToggles();

  const form = document.querySelector("form.subscribe-card");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Subscribed! (Demo)");
      form.reset();
    });
  }
});

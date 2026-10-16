
"use strict";

const translations = {
  sv: {
    navServices: "Tjänster",
    navPrices: "Priser",
    navAbout: "Om oss",
    navContact: "Kontakt",
    navGetHelp: "Få hjälp",

    heroEyebrow: "IT-SUPPORT · SÄKERHET · WEBBUTVECKLING",
    heroTitle: "Teknik som fungerar. Säkerhet du kan lita på.",
    heroText: "Praktisk IT-hjälp för privatpersoner och mindre verksamheter. Från datorproblem och Wi-Fi till cybersäkerhet och hemsidor.",
    heroServices: "Se våra tjänster",
    heroContact: "Kontakta oss",
    heroPoint1: "Tydliga priser",
    heroPoint2: "Personlig IT-hjälp",
    heroPoint3: "Distansservice",
    visualSecurity: "Digital säkerhet",
    visualSupport: "IT-support",

    strip1Title: "IT-support",
    strip1Text: "Felsökning och problemlösning",
    strip2Title: "Cybersäkerhet",
    strip2Text: "Skydd och säkerhetsråd",
    strip3Title: "Webbutveckling",
    strip3Text: "Hemsidor för företag och föreningar",

    servicesEyebrow: "VAD VI HJÄLPER TILL MED",
    servicesTitle: "IT-tjänster för verkliga behov",
    servicesIntro: "Från vardagliga datorproblem till digital säkerhet och webbprojekt.",

    service1Title: "Datorhjälp",
    service1Text: "Felsökning, programproblem och hjälp med datorns funktioner.",
    service2Title: "Internet & Wi-Fi",
    service2Text: "Hjälp med nätverksproblem, router, Wi-Fi och uppkoppling.",
    service3Title: "Virus & säkerhet",
    service3Text: "Säkerhetskontroller, skydd och hjälp med misstänkt skadlig programvara.",
    service4Title: "Installation",
    service4Text: "Installation och konfigurering av program, datorer och tillbehör.",
    service5Title: "Optimering",
    service5Text: "Rensning, underhåll och hjälp med en långsam dator.",
    service6Title: "Hemsidor & webbutveckling",
    service6Text: "Webbplatser för företag och föreningar, anpassade efter behov.",
    servicePriceLink: "Se priser →",
    serviceContactLink: "Begär offert →",

    pricingEyebrow: "TYDLIGA PRISER",
    pricingTitle: "Vad kostar IT-hjälp?",
    pricingIntro: "Fasta grundpriser inklusive moms för privatpersoner.",
    currencyLabel: "Visa priser i",
    currencyLoading: "Hämtar växelkurs …",
    currencyReady: "Uppskattade priser. Kursunderlaget uppdaterades: ",
    currencyFallback: "Växelkursen kunde inte hämtas. Priserna visas i SEK.",
    currencySek: "Du ser de fasta svenska grundpriserna inklusive moms.",
    currencyDisclaimer: "Priser i EUR och USD är uppskattningar baserade på växelkursen, inte fasta priser. Det slutliga priset och betalningsvalutan bekräftas vid offert eller bokning.",

    price1Title: "Datorhjälp",
    price1Text: "Felsökning och vanlig datorhjälp.",
    price2Title: "Internet & Wi-Fi",
    price2Text: "Hjälp med internet och nätverksproblem.",
    price3Title: "Virus & säkerhet",
    price3Text: "Säkerhetskontroll och hjälp med skadlig programvara.",
    price4Title: "Installation & konfigurering",
    price4Text: "Installation och grundläggande inställningar.",
    price5Title: "Rensning & optimering",
    price5Text: "Rensning och prestandaförbättring.",
    pricingNote: "Hemsidor och större uppdrag prissätts separat. Hembesök och eventuell resekostnad tillkommer efter överenskommelse.",

    aboutEyebrow: "OM EMK CYBER SOLUTIONS",
    aboutTitle: "Personlig service. Smarta lösningar.",
    aboutText: "EMK Cyber Solutions erbjuder praktisk IT-hjälp, teknisk support och webbutveckling med fokus på tydlig kommunikation och lösningar som passar kundens behov.",
    aboutPoint1: "Tydlig information innan arbetet börjar",
    aboutPoint2: "Distanshjälp och service efter överenskommelse",
    aboutPoint3: "Lösningar för privatpersoner och mindre verksamheter",

    contactEyebrow: "KONTAKTA OSS",
    contactTitle: "Behöver du IT-hjälp?",
    contactText: "Beskriv kort vad du behöver hjälp med så kan vi diskutera nästa steg.",
    contactEmailButton: "Skicka e-post",
    contactBusinessLabel: "Företag",
    contactLocation: "Borlänge med omnejd · Distansservice",
    contactServicesLabel: "Tjänster",
    contactServicesText: "IT-support, säkerhet och webb",
    contactQuoteText: "Webbprojekt offereras separat.",
    backToTop: "Till toppen ↑"
  },

  en: {
    navServices: "Services",
    navPrices: "Prices",
    navAbout: "About",
    navContact: "Contact",
    navGetHelp: "Get help",

    heroEyebrow: "IT SUPPORT · SECURITY · WEB DEVELOPMENT",
    heroTitle: "Technology that works. Security you can trust.",
    heroText: "Practical IT support for individuals and small businesses. From computer issues and Wi-Fi to cybersecurity and websites.",
    heroServices: "Explore services",
    heroContact: "Contact us",
    heroPoint1: "Clear pricing",
    heroPoint2: "Personal IT support",
    heroPoint3: "Remote support",
    visualSecurity: "Digital security",
    visualSupport: "IT support",

    strip1Title: "IT support",
    strip1Text: "Troubleshooting and problem solving",
    strip2Title: "Cybersecurity",
    strip2Text: "Protection and security advice",
    strip3Title: "Web development",
    strip3Text: "Websites for businesses and associations",

    servicesEyebrow: "HOW WE CAN HELP",
    servicesTitle: "IT services for real-world needs",
    servicesIntro: "From everyday computer problems to digital security and website projects.",

    service1Title: "Computer support",
    service1Text: "Troubleshooting, software issues and help with computer functions.",
    service2Title: "Internet & Wi-Fi",
    service2Text: "Help with network issues, routers, Wi-Fi and connectivity.",
    service3Title: "Viruses & security",
    service3Text: "Security checks, protection and help with suspected malware.",
    service4Title: "Installation",
    service4Text: "Installation and configuration of software, computers and accessories.",
    service5Title: "Cleanup & optimisation",
    service5Text: "Cleanup, maintenance and help with a slow computer.",
    service6Title: "Websites & web development",
    service6Text: "Websites for businesses and associations, tailored to their needs.",
    servicePriceLink: "View prices →",
    serviceContactLink: "Request a quote →",

    pricingEyebrow: "CLEAR PRICING",
    pricingTitle: "What does IT support cost?",
    pricingIntro: "Fixed base prices including Swedish VAT for private customers.",
    currencyLabel: "Display prices in",
    currencyLoading: "Loading exchange rate …",
    currencyReady: "Estimated prices. Rate data last updated: ",
    currencyFallback: "Exchange rates could not be retrieved. Prices are shown in SEK.",
    currencySek: "You are viewing the fixed Swedish base prices, including VAT.",
    currencyDisclaimer: "EUR and USD prices are estimates based on exchange rates, not fixed prices. The final price and payment currency will be confirmed when a quote or booking is agreed.",

    price1Title: "Computer support",
    price1Text: "Troubleshooting and general computer assistance.",
    price2Title: "Internet & Wi-Fi",
    price2Text: "Help with internet and network issues.",
    price3Title: "Viruses & security",
    price3Text: "Security checks and help with malware.",
    price4Title: "Installation & configuration",
    price4Text: "Installation and basic configuration.",
    price5Title: "Cleanup & optimisation",
    price5Text: "Cleanup and performance improvements.",
    pricingNote: "Websites and larger projects are priced separately. Home visits and any travel costs are agreed upon in advance.",

    aboutEyebrow: "ABOUT EMK CYBER SOLUTIONS",
    aboutTitle: "Personal service. Smart solutions.",
    aboutText: "EMK Cyber Solutions provides practical IT assistance, technical support and web development, with a focus on clear communication and solutions tailored to customer needs.",
    aboutPoint1: "Clear information before work begins",
    aboutPoint2: "Remote assistance and service by arrangement",
    aboutPoint3: "Solutions for individuals and small businesses",

    contactEyebrow: "GET IN TOUCH",
    contactTitle: "Need IT support?",
    contactText: "Briefly describe what you need help with so we can discuss the next steps.",
    contactEmailButton: "Send an email",
    contactBusinessLabel: "Business",
    contactLocation: "Borlänge area · Remote support",
    contactServicesLabel: "Services",
    contactServicesText: "IT support, security and websites",
    contactQuoteText: "Website projects are quoted separately.",
    backToTop: "Back to top ↑"
  }
};

const currencySettings = {
  SEK: { locale: "sv-SE", decimals: 0 },
  EUR: { locale: "de-DE", decimals: 2 },
  USD: { locale: "en-US", decimals: 2 }
};

const currencySelect = document.getElementById("currency-select");
const currencyStatus = document.getElementById("currency-status");
const languageToggle = document.getElementById("language-toggle");

let currentCurrency = "SEK";
let currentLanguage = "sv";
let exchangeRates = { SEK: 1 };
let rateUpdatedAt = null;
let ratesAvailable = false;

function translatePage(language) {
  currentLanguage = language === "en" ? "en" : "sv";

  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === "en"
    ? "EMK Cyber Solutions | IT Support & Cybersecurity"
    : "EMK Cyber Solutions | IT-support & cybersäkerhet";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translatedText = translations[currentLanguage][key];

    if (translatedText) {
      element.textContent = translatedText;
    }
  });

  if (languageToggle) {
    languageToggle.textContent = currentLanguage === "sv" ? "English" : "Svenska";
    languageToggle.setAttribute(
      "aria-label",
      currentLanguage === "sv" ? "Switch to English" : "Byt till svenska"
    );
  }

  renderPrices();
}

function formatCurrency(amount, currency) {
  const settings = currencySettings[currency];

  return new Intl.NumberFormat(settings.locale, {
    style: "currency",
    currency,
    minimumFractionDigits: settings.decimals,
    maximumFractionDigits: settings.decimals
  }).format(amount);
}

function updateCurrencyStatus(displayCurrency) {
  if (!currencyStatus) return;

  if (displayCurrency === "SEK") {
    currencyStatus.textContent = translations[currentLanguage].currencySek;
    return;
  }

  if (!ratesAvailable || !rateUpdatedAt) {
    currencyStatus.textContent = translations[currentLanguage].currencyFallback;
    return;
  }

  const dateLocale = currentLanguage === "en" ? "en-GB" : "sv-SE";

  const dateText = new Intl.DateTimeFormat(dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC"
  }).format(rateUpdatedAt);

  currencyStatus.textContent =
    translations[currentLanguage].currencyReady + dateText;
}

function renderPrices() {
  const selectedRate = exchangeRates[currentCurrency];

  const conversionIsValid =
    currentCurrency === "SEK" ||
    (
      ratesAvailable &&
      Number.isFinite(selectedRate) &&
      selectedRate > 0
    );

  // SEK är alltid tillgängligt. Saknas kursdata visas inga uppskattade priser.
  const displayCurrency = conversionIsValid ? currentCurrency : "SEK";
  const rate = displayCurrency === "SEK" ? 1 : selectedRate;

  document.querySelectorAll("[data-price-sek]").forEach((element) => {
    const basePrice = Number(element.dataset.priceSek);

    if (!Number.isFinite(basePrice)) return;

    const convertedAmount = basePrice * rate;
    const formattedAmount = formatCurrency(convertedAmount, displayCurrency);

    element.textContent = displayCurrency === "SEK"
      ? formattedAmount
      : `≈ ${formattedAmount}`;

    element.setAttribute(
      "aria-label",
      displayCurrency === "SEK"
        ? formattedAmount
        : `${currentLanguage === "en" ? "Estimated price" : "Uppskattat pris"}: ${formattedAmount}`
    );
  });

  if (currencySelect) {
    currencySelect.value = displayCurrency;
  }

  updateCurrencyStatus(displayCurrency);
}

function setCurrency(currency) {
  if (!Object.prototype.hasOwnProperty.call(currencySettings, currency)) {
    currency = "SEK";
  }

  // EUR/USD kan endast väljas när en giltig kurs finns.
  if (currency !== "SEK" && !ratesAvailable) {
    currentCurrency = "SEK";
    renderPrices();
    return;
  }

  currentCurrency = currency;

  try {
    localStorage.setItem("emkcs-currency", currency);
  } catch {
    // Sidan fungerar även om webbläsaren blockerar lokal lagring.
  }

  renderPrices();
}

async function loadExchangeRates() {
  if (currencyStatus) {
    currencyStatus.textContent = translations[currentLanguage].currencyLoading;
  }

  try {
    const response = await fetch(
      "https://open.er-api.com/v6/latest/SEK",
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Exchange rate service returned an error.");
    }

    const data = await response.json();

    const eurRate = Number(data?.rates?.EUR);
    const usdRate = Number(data?.rates?.USD);

    if (
      data?.result !== "success" ||
      !Number.isFinite(eurRate) ||
      eurRate <= 0 ||
      !Number.isFinite(usdRate) ||
      usdRate <= 0
    ) {
      throw new Error("Exchange rate data is invalid.");
    }

    exchangeRates = {
      SEK: 1,
      EUR: eurRate,
      USD: usdRate
    };

    const timestamp = Number(data.time_last_update_unix);

    rateUpdatedAt = Number.isFinite(timestamp) && timestamp > 0
      ? new Date(timestamp * 1000)
      : null;

    ratesAvailable = true;

    // Om tjänsten saknar uppdateringsdatum använder vi inte uppskattningar.
    if (!rateUpdatedAt || Number.isNaN(rateUpdatedAt.getTime())) {
      ratesAvailable = false;
      currentCurrency = "SEK";
    }

    renderPrices();
  } catch (error) {
    ratesAvailable = false;
    exchangeRates = { SEK: 1 };
    currentCurrency = "SEK";
    renderPrices();

    console.warn("Exchange rates unavailable; displaying SEK prices.", error);
  }
}

function initialiseCurrency() {
  let savedCurrency = "SEK";

  try {
    const storedCurrency = localStorage.getItem("emkcs-currency");

    if (storedCurrency && Object.prototype.hasOwnProperty.call(currencySettings, storedCurrency)) {
      savedCurrency = storedCurrency;
    }
  } catch {
    // Använd SEK om lokal lagring inte är tillgänglig.
  }

  currentCurrency = savedCurrency;

  if (currencySelect) {
    currencySelect.addEventListener("change", (event) => {
      setCurrency(event.target.value);
    });
  }

  renderPrices();
  loadExchangeRates();
}

if (languageToggle) {
  languageToggle.addEventListener("click", () => {
    translatePage(currentLanguage === "sv" ? "en" : "sv");
  });
}

const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

translatePage("sv");
initialiseCurrency();

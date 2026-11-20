
const languageButton = document.getElementById("language-toggle");
const elements = document.querySelectorAll("[data-tr][data-en]");

let currentLanguage = "tr";

function changeLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;

  elements.forEach((element) => {
    element.textContent = element.getAttribute("data-" + language);
  });

  languageButton.textContent = language === "tr" ? "EN" : "TR";

  languageButton.setAttribute(
    "aria-label",
    language === "tr" ? "Switch to English" : "Türkçeye geç"
  );

  document.title = language === "tr"
    ? "Pınar Karaşar Özçil | Bilim, Strateji ve Yaşam"
    : "Pınar Karaşar Özçil | Science, Strategy & Life";
}

languageButton.addEventListener("click", () => {
  changeLanguage(currentLanguage === "tr" ? "en" : "tr");
});

document.getElementById("year").textContent =
  new Date().getFullYear();

changeLanguage("tr");


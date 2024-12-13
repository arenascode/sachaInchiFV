//* Sticky Nav Logic
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
const topOfNav = nav.offsetTop;

function fixNav() {
  const offsetTop = window.scrollY;
  console.log({ offsetTop });
  console.log({ topOfNav });
  console.log((topOfNav - 1));

  if (offsetTop >= (topOfNav - 1)) {
    document.body.classList.add("fixed-nav");
    document.body.style.paddingTop = nav.offsetHeight + "px";
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

const moreinfoHeroBtn = document.getElementById("moreInfoHero");
const targetSection = document.querySelector(".whatIsSachaInchi");

moreinfoHeroBtn.addEventListener("click", () => {
  targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
});
window.addEventListener("scroll", fixNav);

//* ENGLISH/SPANISH SWITCH LOGIC

const translations = {
  en: {
    section1: {
      subtitle: "Amazon’s Superfood for a Healthier You!",
      description:
        "Discover the natural goodness of omega-rich, sustainable nutrition",
      cta: "Discover the Amazon's Secret",
    },
    section3: {
      title: "What is Sacha Inchi?",
      description:
        "From the heart of the Amazon, Sacha Inchi is more than a superfood—it's a gift from nature! Packed with omega-3s, protein, and antioxidants, this ancient seed supports your health while protecting the planet. Whether enjoyed as a snack, an oil, or a powder, Sacha Inchi brings wellness and sustainability together in every bite.",
    },
  },

  es: {
    section1: {
      subtitle: "El Superalimento del Amazonas para una Vida Más Saludable.",
      description:
        "Descubre la bondad natural de una nutrición rica en omegas y sostenible.",
      cta: "Descubre el Secreto del Amazonas!",
    },
    section3: {
      title: "Qué es Sacha Inchi?",
      description:
        "Desde el corazón del Amazonas, el Sacha Inchi es más que un superalimento: ¡es un regalo de la naturaleza! Repleto de omega-3, proteínas y antioxidantes, esta semilla ancestral mejora tu salud mientras protege el planeta. Ya sea como snack, aceite o polvo, el Sacha Inchi combina bienestar y sostenibilidad en cada bocado.",
    },
  },
};

function updateTranslations(language) {
  Object.keys(translations[language]).forEach((sectionId) => {
    const sectionData = translations[language][sectionId]
    console.log({sectionData});
    
    const section = document.getElementById(sectionId)
    
    if (section) {
      
      Object.keys(sectionData).forEach((role) => {
        const element = section.querySelector(`[data-role=${role}]`)
        element.textContent =sectionData[role]
      })
    }
  })
}

const languageToggle = document.getElementById("languageToggle");

languageToggle.addEventListener("change", (event) => {
  const selectedLanguage = event.target.checked ? "es" : "en";
  console.log("Selected Language:", selectedLanguage);
  updateTranslations(selectedLanguage); // Call your translation function
});

// Set default language
const userLanguage = navigator.language.startsWith("es") ? "es" : "en";
languageSelector.value = userLanguage;
updateTranslations(userLanguage);

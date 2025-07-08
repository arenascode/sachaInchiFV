//* Sticky Nav Logic
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
const topOfNav = nav.offsetTop;

function fixNav() {
  const offsetTop = window.scrollY;

  if (offsetTop >= topOfNav - 5) {
    document.body.classList.add("fixed-nav");
    document.body.style.paddingTop = nav.offsetHeight + "px";
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", fixNav);

//*Show and hidde MobileMenu Modal */
const mobileMenu = document.getElementById("navBar_mobileMenu");

const hamburguerBtn = document.getElementById("hamburger-btn");

const closeModalBtn = document.getElementById("closeModalBtn");

const headerAboutSection = document.querySelector(".aboutSection_title");

function openModalMenu() {
  mobileMenu.style.display = "block";
  if (headerAboutSection) {
    headerAboutSection.style.zIndex = "0";
  }

  setTimeout(() => {
    mobileMenu.style.opacity = 1;
  }, 10);
}

function closeModalMenu() {
  mobileMenu.style.opacity = 0;
  if (headerAboutSection) {
    headerAboutSection.style.zIndex = "10";
  }
  setTimeout(() => {
    mobileMenu.style.display = "none";
  }, 500);
}

window.onclick = function (e) {
  if (e.target === mobileMenu) {
    mobileMenu.style.opacity = 0;
    if (headerAboutSection) {
      headerAboutSection.style.zIndex = "10";
    }
    setTimeout(() => {
      mobileMenu.style.display = "none";
    }, 500);
  }
};

hamburguerBtn.addEventListener("click", openModalMenu);

closeModalBtn.addEventListener("click", closeModalMenu);

const moreinfoHeroBtn = document.getElementById("moreInfoHero");
const targetSection = document.querySelector(".whatIsSachaInchi");

if (moreinfoHeroBtn) {
  moreinfoHeroBtn.addEventListener("click", () => {
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

//* Close And Reopen Benefit Modals

const benefitCloseBtns = document.querySelectorAll(".closeBenefitModal");

const dropdownBtns = document.querySelectorAll(".benefit");

dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalContent =
      btn.parentNode.parentNode.querySelector(".dropdown-content");

    modalContent.style.display = "block";
  });
});

benefitCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.parentNode;
    modal.style.display = "none";
  });
});

//* ENGLISH/SPANISH SWITCH LOGIC

const translations = {
  en: {
    section1: {
      subtitle: "Amazon’s Superfood for a Healthier You!",
      description: `Discover the natural goodness of sustainable nutrition rich in`,
      description2: "Omega 3, 6 and 9.",
      cta: "Step Into the Secrets of Ancient Nutrition",
    },
    section2: {
      home: "Home",
      aboutUs: "Mission",
      moreInfo: "Learn More",
    },
    mobileMenu: {
      home: "Home",
      moreInfo: "More Info",
      aboutUs: "Mission",
    },
    section3: {
      title1: "What is",
      title2: "Sacha Inchi?",
      p1: `Sacha Inchi, the Amazonian superfood hailed as the Indigenous Peanut or the Indigenous Seed, is native to the lush Amazonian rainforests of Ecuador, Colombia and Peru. For centuries, indigenous communities have treasured this powerful plant for its remarkable ability to nourish and fuel the body.`,
      p2: "Known as a nutrient powerhouse, Sacha Inchi seeds are rich in protein and an excellent source of healthy fats, especially Omega 3, 6 and 9. Packed with fiber, vitamin E, and antioxidants, they provide a holistic boost for your body. Sacha Inchi supports heart health, brain function, immune strength, and radiant skin.",
      p3: "Beyond its health benefits, Sacha Inchi represents the wisdom and sustainable practices of the Amazon’s indigenous people.",
      p4: "By integrating it into your healthy regimen, you’re not only honoring the planet but also supporting the biosphere— where plants, animals, and their surroundings work in harmony to provide a reliable source of food back to the Earth.",
    },
    section4: {
      title: "Sacha Inchi is a",
      subtitle: "SuperFood",
      cta: "Tap on a circle to explore more details!",
      benefit1Title: "Omega 3, 6, 9 Fatty Acid",
      benefit2Title: "Protein",
      benefit3Title: "Fiber",
      benefit4Title: "Vitamin E",
      benefit5Title: "Antioxidants",
      benefit6Title: "Minerals",
      benefit7Title: "Phytosterols",
      // Card1
      benefit1CardTitle: "Soothe Inflammation and Boost Your Health Naturally",
      benefit1Cardp1:
        "Sacha Inchi is a powerful source of Omega 3, 6, and 9 fatty acids, offering anti-inflammatory and antioxidant properties. These nutrients work together to reduce inflammation, easing joint pain, muscle soreness, and symptoms of conditions like arthritis, while also protecting cells from oxidative stress and damage.",
      benefit1Cardp2:
        "Additionally, Omega 3 and Omega 6 play a vital role in brain function by supporting cognitive health, improving memory, and promoting mental clarity. Their anti-inflammatory effects also contribute to better neurological health, potentially reducing the risk of age-related cognitive decline.",
      //Card2
      benefit2CardTitle: "Fuel Your Muscles, Recover Faster, and Grow Stronger",
      benefit2Cardp1:
        "Rich in high-quality protein for muscle repair, recovery, and growth. After workouts, its protein helps rebuild muscle tissue, reduce soreness, and speed up recovery.",
      benefit2Cardp2:
        "Packed with magnesium and potassium, it prevents cramps, supports muscle function, and restores electrolyte balance. Its anti-inflammatory properties and Omega 3 fatty acids reduce muscle inflammation, helping you recover faster, perform better, and build strong, lean muscles naturally.",
      //Card3
      benefit3CardTitle: "Promote Digestive Health with Natural Fiber",
      benefit3Cardp1:
        "Rich in dietary fiber, Sacha Inchi supports a healthy digestive system by promoting regular bowel movements and preventing constipation. Fiber plays a crucial role in maintaining gut health, fostering the growth of beneficial gut bacteria, and aiding in nutrient absorption.",
      benefit3Cardp2:
        "In addition to improving digestion, the fiber in Sacha Inchi helps regulate blood sugar levels and promotes satiety, making it a great ally for weight management. By incorporating this Amazonian superfood into your diet, you're not only boosting your digestive health but also supporting overall well-being naturally and effectively.",
      //Card4
      benefit4CardTitle: "Glow Naturally with Nourished, Healthy Skin",
      benefit4Cardp1:
        " Sacha Inchi oil is a beauty secret powered by nature. Rich in Vitamin E and Omega 3 fatty acids, it deeply hydrates, restores skin elasticity, and fights signs of aging like fine lines and wrinkles. Its antioxidants protect your skin from environmental stress and free radical damage, promoting a radiant and even complexion.",
      benefit4Cardp2:
        " With its lightweight texture and anti-inflammatory properties, Sacha Inchi oil soothes irritation and balances oil production, making it perfect for all skin types. Reveal your natural glow with this Amazonian treasure.",
      //Card 5
      benefit5CardTitle: "Protect Your Body with Powerful Antioxidants",
      benefit5CardP1:
        "Sacha Inchi, rich in antioxidants, plays a vital role in protecting your body from harmful free radicals. These unstable molecules can cause cellular damage, increasing the risk of chronic diseases. By neutralizing free radicals, Sacha Inchi helps reduce the oxidative stress that accelerates aging and contributes to various health issues.",
      benefit5Cardp2:
        "Incorporating Sacha Inchi into your diet can promote overall well-being by reducing oxidative stress and supporting your body’s natural defenses. With its rich antioxidant content, this Amazonian superfood helps maintain cellular health and balance, providing a protective shield against environmental stress and damage.",
      //Card 6
      benefit6CardTitle: "Strengthen Your Body with Essential Minerals",
      benefit6Cardp1:
        "Sacha Inchi is packed with essential minerals like calcium, magnesium, phosphorus, and potassium. These minerals are crucial for maintaining healthy bones and supporting proper muscle function. They work together to strengthen the body's structure and ensure that muscles and bones remain strong and functional.",
      benefit6Cardp2:
        "In addition to supporting bone and muscle health, these minerals act as electrolytes, helping to regulate fluid balance and nerve function. Incorporating Sacha Inchi into your diet ensures you’re getting these vital minerals to keep your body energized and functioning at its best.",
      //Card 7
      benefit7CardTitle: "Support Cholesterol Balance with Phytosterols",
      benefit7Cardp1:
        "Sacha Inchi is a natural source of phytosterols, plant-based compounds known for their ability to support healthy cholesterol levels. Phytosterols help reduce the absorption of bad cholesterol (LDL) in the digestive system, promoting a better balance of cholesterol in the body.",
      benefit7Cardp2:
        "By incorporating Sacha Inchi into your diet, you're not only supporting cardiovascular health but also reducing the risk of heart-related conditions. This Amazonian treasure is a natural way to maintain a healthy heart and overall wellness.",
      //Parallax Text
      parallaxText: "Nature’s Superfood for a Healthier, Vibrant You",
    },
    section5: {
      title: "The Many Ways to Enjoy Sacha Inchi",
      //Product 1
      product1Title: "Oil",
      product1p1:
        "Sacha Inchi Oil is a nutrient-rich treasure packed with Omega-3s, 6, 9, Vitamin E, and powerful antioxidants.",
      product1Subtitle: "How To Use It",
      product1p2:
        "Perfect for drizzling over salads, or as a supplement, it supports heart health, glowing skin, and overall vitality.",
      product1VideoTitle: "Try it in your favorite salads 😋",
      //Product 2
      product2Title: "Protein Powder",
      product2p1:
        "Sacha Inchi Protein Powder is a plant-based powerhouse loaded with essential amino acids.",
      product2Subtitle: "How To Use It",
      product2p2:
        "Add it to smoothies, baked goods, or post-workout shakes for natural muscle recovery and sustained energy.",
      product2VideoTitle: "Try it in your favorite smoothies 😋",
      //Product 3
      product3Title: "More Than Just Smoothies",
      product3p1:
        "Sacha Inchi protein powder isn’t just great for smoothies—you can also add it to your favorite granola, boosting its nutritional value and versatility.",
      product3Subtitle: "How to Use It",
      product3p2:
        "A perfect way to add a guilt-free protein boost while fueling your energy and supporting your health any time of the day.",
      product3VideoTitle: "Try it in your favorite Granola 😋",
    },
    section6: {
      title: "Awards for Sacha Inchi",
      description:
        "Recognized Excellence: Award-Winning Sacha Inchi Oil Through the Years",
    },
    section7: {
      title: "Experience the Benefits of Sacha Inchi",
      description:
        "Take the first step towards better health and wellness with this award-winning Amazonian treasure. Learn more to start your journey.",
      button: "Learn More",
    },
    section8: {
      description:
        "Discover the natural benefits of Sacha Inchi, the Amazonian treasure for your health and wellness.",
      home: "Home",
      moreInfo: "Learn More",
      aboutUs: "Mission",
      followUs: "Follow Us",
    },
  },

  es: {
    section1: {
      subtitle: "El Superalimento del Amazonas para una Vida Más Saludable.",
      description:
        "Descubre la bondad natural de una nutrición sostenible y rica en",
      description2: "Omega 3, 6 y 9.",
      cta: "¡Descubre el Secreto del Amazonas!",
    },
    section2: {
      home: "Inicio",
      aboutUs: "Misión",
      moreInfo: "Aprende más",
    },
    mobileMenu: {
      home: "Inicio",
      moreInfo: "Aprende más",
      aboutUs: "Misión",
    },
    section3: {
      title: "¿Qué es Sacha Inchi?",
      p1: `Sacha Inchi, el superalimento amazónico conocido como el “Maní Indígena” o la “Semilla Indígena,” es nativa de las exuberantes selvas tropicales de Ecuador, Colombia y Perú. Durante siglos, las comunidades indígenas han valorado esta poderosa planta por su extraordinaria capacidad para nutrir y fortalecer el cuerpo.`,
      p2: "Conocidas como un superalimento lleno de nutrientes, las semillas de Sacha Inchi son ricas en proteínas y una excelente fuente de grasas saludables, especialmente Omega 3, 6 y 9. Son ricas en fibra, vitamina E y antioxidantes, brindando un impulso integral para tu cuerpo. Sacha Inchi mejora la salud del corazón, la función cerebral, la fortaleza del sistema inmunológico y una piel radiante.",
      p3: "Más allá de sus beneficios para la salud, Sacha Inchi representa la sabiduría y las prácticas sostenibles de los pueblos indígenas de la Amazonía.",
      p4: "Al integrarlo a tu dieta saludable, no solo honras al planeta, sino que también apoyas la biosfera, donde las plantas, los animales y su entorno trabajan en armonía para proporcionar una fuente de alimentos de vuelta a la Tierra.",
    },
    section4: {
      title: "Sacha Inchi es un",
      subtitle: "Super Alimento",
      cta: "Toca cualquier círculo para descubrir más",
      benefit1Title: "Omega 3, 6, 9",
      benefit2Title: "Proteina",
      benefit3Title: "Fibra",
      benefit4Title: "Vitamina E",
      benefit5Title: "Antioxidantes",
      benefit6Title: "Minerales",
      benefit7Title: "Fitosteroles",
      //Card1
      benefit1CardTitle:
        "Alivia la inflamación y mejora tu salud de forma natural",
      benefit1Cardp1:
        "Sacha Inchi es una fuente poderosa de ácidos grasos Omega 3, 6 y 9, que ofrecen propiedades antiinflamatorias y antioxidantes. Estos nutrientes trabajan en conjunto para reducir la inflamación, aliviando el dolor en las articulaciones, la tensión muscular y los síntomas de afecciones como la artritis, además de proteger las células del estrés oxidativo y el daño.",
      benefit1Cardp2:
        "Además, el Omega 3 y Omega 6 desempeñan un papel vital en la función cerebral al favorecer la salud cognitiva, mejorar la memoria y promover la claridad mental. Sus efectos antiinflamatorios también contribuyen a una mejor salud neurológica, pudiendo reducir el riesgo de deterioro cognitivo relacionado con la edad.",

      //Card2
      benefit2CardTitle:
        "Nutre tus músculos, recupérate más rápido y crece más fuerte",
      benefit2Cardp1:
        "Rico en proteínas de alta calidad para la reparación, recuperación y crecimiento muscular. Después del ejercicio, su proteína ayuda a reconstruir el tejido muscular, reducir el dolor y acelerar la recuperación.",
      benefit2Cardp2:
        "Cargado de magnesio y potasio, previene calambres, apoya la función muscular y restaura el equilibrio de electrolitos. Sus propiedades anti-inflamatorias y ácidos grasos Omega 3 reducen la inflamación muscular, ayudándote a recuperarte más rápido, rendir mejor y desarrollar músculos fuertes y definidos de forma natural.",
      //Card3
      benefit3CardTitle: "Promueve la Salud Digestiva con Fibra Natural",
      benefit3Cardp1:
        "Rico en fibra, Sacha Inchi favorece un sistema digestivo saludable al promover movimientos intestinales regulares y prevenir el estreñimiento. La fibra desempeña un papel crucial en el mantenimiento de la salud intestinal, fomentando el crecimiento de bacterias beneficiosas y ayudando en la absorción de nutrientes.",
      benefit3Cardp2:
        "Además de mejorar la digestión, la fibra del Sacha Inchi ayuda a regular los niveles de azúcar en la sangre y promueve la saciedad, convirtiéndolo en un gran aliado para el manejo del peso. Al incorporar este superalimento amazónico en tu dieta, no solo estás mejorando tu salud digestiva, sino también apoyando tu bienestar general de manera natural y efectiva.",
      //Card4
      benefit4CardTitle: "Luce naturalmente con una piel nutrida y saludable",
      benefit4Cardp1:
        "El aceite de Sacha Inchi es un secreto de belleza impulsado por la naturaleza. Rico en vitamina E y ácidos grasos Omega 3, hidrata profundamente, restaura la elasticidad de la piel y combate los signos de envejecimiento como las líneas finas y las arrugas. Sus antioxidantes protegen tu piel del estrés ambiental y los daños de los radicales libres, promoviendo un cutis radiante y uniforme.",
      benefit4Cardp2:
        "Con su textura ligera y propiedades anti-inflamatorias, el aceite de Sacha Inchi calma la irritación y equilibra la producción de grasa, lo que lo hace perfecto para todo tipo de piel. Descubre tu brillo natural con este tesoro amazónico.",
      //Card5
      benefit5CardTitle: "Protege tu cuerpo con potentes antioxidantes",
      benefit5CardP1:
        "Sacha Inchi, rico en antioxidantes, desempeña un papel vital en la protección de tu cuerpo contra los dañinos radicales libres. Estas moléculas inestables pueden causar daño celular, aumentando el riesgo de enfermedades crónicas. Al neutralizar los radicales libres, el Sacha Inchi ayuda a reducir el estrés oxidativo que acelera el envejecimiento y contribuye a diversos problemas de salud.",
      benefit5Cardp2:
        "Incorporar Sacha Inchi en tu dieta puede promover el bienestar general al reducir el estrés oxidativo y apoyar las defensas naturales de tu cuerpo. Con su rico contenido de antioxidantes, este superalimento amazónico ayuda a mantener la salud celular y el equilibrio, proporcionando un escudo protector contra el estrés y los daños ambientales.",
      //Card6
      benefit6CardTitle: "Fortalece tu cuerpo con minerales esenciales",
      benefit6Cardp1:
        "Sacha Inchi está lleno de minerales esenciales como calcio, magnesio, fósforo y potasio. Estos minerales son cruciales para mantener huesos saludables y apoyar la función muscular adecuada. Trabajan juntos para fortalecer la estructura del cuerpo y asegurar que los músculos y los huesos se mantengan fuertes y funcionales.",
      benefit6Cardp2:
        "Además de apoyar la salud ósea y muscular, estos minerales actúan como electrolitos, ayudando a regular el equilibrio de líquidos y la función nerviosa. Incorporar el Sacha Inchi en tu dieta asegura que estés obteniendo estos minerales vitales para mantener tu cuerpo energizado y funcionando al máximo.",
      //Card7
      benefit7CardTitle: "Apoya el equilibrio del colesterol con fitosteroles",
      benefit7Cardp1:
        "Sacha Inchi es una fuente natural de fitosteroles, compuestos de origen vegetal conocidos por su capacidad para mantener niveles saludables de colesterol. Los fitosteroles ayudan a reducir la absorción de colesterol malo (LDL) en el sistema digestivo, promoviendo un mejor equilibrio del colesterol en el cuerpo.",
      benefit7Cardp2:
        "Al incorporar Sacha Inchi en tu dieta, no solo estás apoyando la salud cardiovascular, sino también reduciendo el riesgo de enfermedades relacionadas con el corazón. Este tesoro amazónico es una forma natural de mantener un corazón sano y un bienestar general.",
      //ParallaxText
      parallaxText:
        "El superalimento de la naturaleza para una vida más saludable y vibrante",
    },
    section5: {
      title: "Múltiples formas de disfrutar Sacha Inchi",
      // Product 1
      product1Title: "Aceite",
      product1p1:
        "El aceite de Sacha Inchi es un tesoro rico en nutrientes, cargado de Omega-3, 6, 9, vitamina E y potentes antioxidantes.",
      product1Subtitle: "Cómo usarlo",
      product1p2:
        "Perfecto para aderezar ensaladas o como suplemento, apoya la salud del corazón, una piel radiante y el bienestar general.",
      product1VideoTitle: "Pruébalo en tus ensaladas favoritas 😋",
      // Product 2
      product2Title: "Proteína en polvo",
      product2p1:
        "La proteína en polvo de Sacha Inchi es una fuente vegetal poderosa cargada de aminoácidos esenciales.",
      product2Subtitle: "Cómo usarla",
      product2p2:
        "Agrégala a batidos, productos horneados o bebidas post-entrenamiento para una recuperación muscular natural y energía sostenida.",
      product2VideoTitle: "Pruébalo en tu batido favorito 😋",
      // Product 3
      product3Title: "Más que solo batidos",
      product3p1:
        "La proteína en polvo de Sacha Inchi no solo es ideal para batidos, sino que también puedes añadirla a tu granola favorita, aumentando su valor nutricional y versatilidad.",
      product3Subtitle: "Cómo usarlas",
      product3p2:
        "Perfecta para añadir un extra de proteina sin culpa mientras impulsas tu energía y tu salud en cualquier momento del día.",
      product3VideoTitle: "Pruébalo en tu granola favorita 😋",
    },
    section6: {
      title: "Reconocimientos Recibidos Por Sacha Inchi",
      description:
        "Excelencia Reconocida: Aceite de Sacha Inchi Ganador de Premios a lo Largo de los Años",
    },
    section7: {
      title: "Experimenta los Beneficios de Sacha Inchi",
      description:
        "Da el primer paso hacia una mejor salud y bienestar con este tesoro amazónico galardonado. Aprende más para comenzar tu viaje.",
      button: "Aprende Más",
    },
    section8: {
      description:
        "Descubre los beneficios naturales del Sacha Inchi, el tesoro amazónico para tu salud y bienestar.",
      home: "Inicio",
      moreInfo: "Aprende Más",
      aboutUs: "Misión",
      followUs: "Siguenos",
    },
  },
};

function updateTranslations(language) {

  Object.keys(translations[language]).forEach((sectionId) => {
    const sectionData = translations[language][sectionId];
    const section = document.getElementById(sectionId);

    if (section) {
      Object.keys(sectionData).forEach((role) => {
        const element = section.querySelector(`[data-role=${role}]`);
        if (element) {
          element.textContent = sectionData[role];
        }
      });
    }
  });
}

const languageToggle = document.querySelectorAll(".languageToggle");
const languageToggle2 = document.querySelectorAll(".languageToggle2");
const toggle1 = document.getElementById("languageToggle");
const toggle2 = document.getElementById("languageToggle2");

function syncToggles(source, target) {

  target.checked = source.checked;
}
toggle1.addEventListener("change", () => syncToggles(toggle1, toggle2));
toggle2.addEventListener("change", () => syncToggles(toggle2, toggle1));

languageToggle.forEach((el) => {
  el.addEventListener("change", (event) => {
    const selectedLanguage = event.target.checked ? "es" : "en";
    updateTranslations(selectedLanguage); // Call your translation function
  });
});

// Set default language
const userLanguage = navigator.language.startsWith("es") ? "es" : "en";

languageToggle.forEach((el) => {
  el.checked = userLanguage === "es";
});

updateTranslations(userLanguage);

window.addEventListener("load", () => updateTranslations(userLanguage));
//*Play Introduction VIDEO

document.addEventListener("DOMContentLoaded", () => {
  const videoOil = document.querySelectorAll(".videoOil");
  const videoSalad = document.querySelectorAll(".videoSalad");
  const videoSmoothie = document.querySelectorAll(".videoSmoothie");
  const videoSnacks = document.querySelectorAll(".videoSnacks");
  const videos = [...videoOil, ...videoSalad, ...videoSmoothie, ...videoSnacks];

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.5 } // Adjust the threshold as needed (e.g., 0.5 means 50% of the video should be visible).
  );

  videos.forEach((video) => observer.observe(video));
});

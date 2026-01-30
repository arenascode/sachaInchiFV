//* Sticky Nav Logic
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
const topOfNav = nav.offsetTop;

console.log(nav.offsetHeight)
// function fixNav() {
//   const offsetTop = window.scrollY;

//   if (offsetTop >= topOfNav - 5) {
//     document.body.classList.add("fixed-nav");
//     document.body.style.paddingTop = nav.offsetHeight + "px";
//   } else {
//     document.body.style.paddingTop = 0;
//     document.body.classList.remove("fixed-nav");
//   }
// }

// window.addEventListener("scroll", fixNav);

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

// const moreinfoHeroBtn = document.getElementById("moreInfoHero");
// const targetSection = document.querySelector(".whatIsSachaInchi");

// if (moreinfoHeroBtn) {
//   moreinfoHeroBtn.addEventListener("click", () => {
//     targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
//   });
// }

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
      cta: "Step Into the Secrets of Ancestral Nutrition",
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
      subtitle: "An ancestral Amazonian seed, rich in history and nutrition",
      p1: `Sacha Inchi — sometimes referred to as the “Inca Peanut” though it is not a peanut but a seed — is an Amazonian superfood native to Ecuador, Colombia, and Peru. Indigenous communities have valued it for generations as a rich source of nourishment.`,
      p2: "Known as a nutrient powerhouse, Sacha Inchi seeds are rich in protein and an excellent source of healthy fats, especially Omega 3, 6 and 9. Packed with fiber, vitamin E, and antioxidants, they provide a holistic boost for your body. Sacha Inchi supports heart health, brain function, immune strength, and radiant skin.",
      p3: "Beyond its health benefits, Sacha Inchi represents the wisdom and sustainable practices of the Amazon’s indigenous people.",
      p4: "By integrating it into your healthy regimen, you’re not only honoring the planet but also supporting the biosphere— where plants, animals, and their surroundings work in harmony to provide a reliable source of food back to the Earth.",
    },
    homeParallax1: {
      parallaxText: "Nature’s Superfood for a Healthier, Happier You",
    },
    section4: {
      title: "Sacha Inchi",
      subtitle: "The SuperFood",
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
    infoSection5: {
      parallaxTitle: "Sustainability and Impact",
      badge: "100% COMMITED",
      // title: "Packaging That Cares",
      // subtitle: "Every detail matters - Even our packaging",
      // p1: "Made from bagasse, a natural byproduct of sugarcane, it’s compostable, eco-friendly, and part of our commitment to a cleaner world.",
      // product1Title: "Perfect Mix",
      // product1Description:
      //   "Fuel, fortify and Resilience in sustainable packaging.",
      // product1Badge: "Sugar Cane Based",
      // product2Title: "Omega & Protein",
      // product2Description: "Bost your Energy Naturally, same eco values.",
      // product2Badge: "Bagasse Is Biodegradable",
      // product3Title: "Guilt Free Snack",
      // product3Description: "The perfect guilt, zero waste.",
      // product3Badge: "Food-Safe & Non-Toxic",
      // detailedSectionTitle: "Good for you. Gentle on the planet",
      // detailedSectionP1:
      //   "Our packaging isn’t just eco-friendly — Crafted from sugarcane bagasse, our packaging gives agricultural waste a second life—turning nature’s leftovers into earth-loving protection for your food.",
      // li1Title: "Renewable Source",
      // li1Desc:
      //   "Sugarcane naturally regrows every year, making bagasse a truly sustainable material.",
      // li2Title: "Bagasse Is Biodegradable",
      // li2Desc:
      //   "Decomposes in 45–90 days, returning to the soil as compost — no waste, no toxins.",
      // li3Title: "Food-Safe & Non-Toxic",
      // li3Desc:
      //   "Certified safe for food contact, with no harmful chemicals or microplastics.",
      // li4Title: "Carbon Negative",
      // li4Desc:
      //   "The process captures more CO₂ than it emits, helping fight climate change.",
      p2: "Supporting Sacha Inchi means contributing to the preservation of the Amazon and earth ecosystem, a vital part of Earth's biosphere that regulates the planet's climate and houses unparalleled biodiversity. By choosing Sacha Inchi, you are empowering local communities through sustainable farming practices that harmonize with the delicate balance of the Amazon ecosystem.",
      p3: "This crop provides economic opportunities for indigenous farmers, enabling them to thrive while protecting their natural environment. Cultivating Sacha Inchi encourages agroforestry and reduces the need for deforestation, fostering a model where the health of the biosphere and human well-being are intrinsically connected. The sustainable cultivation of this remarkable plant creates a positive cycle where environmental protection and economic prosperity work hand in hand.",
      founderTitle: "Meet the Founder",
      founderP1:
        "Born in New York, raised in Ecuador — I grew up between two worlds that shaped how I see life, wellness, and purpose. Guided by my uncle — an agricultural engineer — I learned to have a deep respect and understanding of the ecology of plants and the living soil — when we care for nature, she cares for us in return.",
      founderP2:
        "My sweetest childhood memories - living on an hacienda where the eucalyptus filled the air, and weekends meant visiting open-air markets for fresh fruits, vegetables, and nuts from nearby and distant farms. My family lived by the belief that food should come straight from the earth — pure, fresh, and full of life — a philosophy that continues to guide me today.",
      founderP3:
        "Now, as a New Yorker, I carry with me the richness of both worlds. Living in a city celebrated for its diversity, creativity, and global connections, bridging Ecuador's ancestral bioorganic traditions with New York's modern, health-driven lifestyle — connecting local farmers to global consumers who seek authenticity, sustainability, and wellness in every bite.",
      founderP4:
        "Each bite of Omare is a tribute to both worlds — to Mother Earth and to the cultural diversity that makes wellness truly universal.",
      founderSignature: "- Founder, Omaré",
      ctaTitle: "Experience the Benefits of Sacha Inchi",
      ctaDesc:
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
        "Descubre las propiedades naturales de una nutrición sostenible y rica en",
      description2: "Omega 3, 6 y 9.",
      cta: "Descubre el Secreto del Amazonas",
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
      title1: "¿Qué es",
      subtitle: "Semilla ancestral amazónica, rica en historia y nutrición",
      p1: `Sacha Inchi, el superalimento amazónico conocido como el “Maní Indígena” o la “Semilla Indígena,” es nativa de las exuberantes selvas tropicales de Ecuador, Colombia y Perú. Durante siglos, las comunidades indígenas han valorado esta poderosa planta por su extraordinaria capacidad para nutrir y fortalecer el cuerpo.`,
      p2: "Conocidas como un superalimento lleno de nutrientes, las semillas de Sacha Inchi son ricas en proteínas y una excelente fuente de grasas saludables, especialmente Omega 3, 6 y 9. Son ricas en fibra, vitamina E y antioxidantes, brindando un impulso integral para tu cuerpo. Sacha Inchi mejora la salud del corazón, la función cerebral, la fortaleza del sistema inmunológico y una piel radiante.",
      p3: "Más allá de sus beneficios para la salud, Sacha Inchi representa la sabiduría y las prácticas sostenibles de los pueblos indígenas de la Amazonía.",
      p4: "Al integrarlo a tu dieta saludable, no solo honras al planeta, sino que también apoyas la biosfera, donde las plantas, los animales y su entorno trabajan en armonía para proporcionar una fuente de alimentos de vuelta a la Tierra.",
    },
    homeParallax1: {
      parallaxText:
        "El superalimento de la naturaleza para una vida más saludable y vibrante",
    },
    section4: {
      title: "Sacha Inchi",
      subtitle: "El Super Alimento",
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
    infoSection5: {
      parallaxTitle: "Sostenibilidad e Impacto",
      badge: "100% COMPROMETIDOS",
      // title: "Un Empaque Con Conciencia",
      // subtitle: "Cada detalle cuenta: incluso el empaque",
      // p1: "Elaborado con bagazo de caña de azúcar, es un material natural, compostable y ecológico. Es parte esencial de nuestro compromiso por un mundo más limpio.",
      // product1Title: "La Mezcla Perfecta",
      // product1Description:
      //   "Energía, fortaleza y resiliencia en un empaque sostenible.",
      // product1Badge: "A base de caña de azúcar",
      // product2Title: "Omega y Proteína",
      // product2Description:
      //   "Potencia tu energía naturalmente, con la misma conciencia ecológica.",
      // product2Badge: "Bagazo biodegradable",
      // product3Title: "Snack Sin Culpas",
      // product3Description: "El placer perfecto: cero residuos.",
      // product3Badge: "Empaque apto para alimentos",
      // detailedSectionTitle: "Bueno para ti. Respetuoso con el planeta",
      // detailedSectionP1:
      //   "Nuestro empaque va más allá de lo ecológico. Fabricado con bagazo de caña de azúcar, da una segunda vida a los residuos agrícolas, transformando los restos de la naturaleza en una protección que respeta la Tierra para tus alimentos.",
      // li1Title: "Fuente Renovable",
      // li1Desc:
      //   "La caña de azúcar se regenera naturalmente cada año, haciendo del bagazo un material verdaderamente sostenible.",
      // li2Title: "Bagazo Biodegradable",
      // li2Desc:
      //   "Se descompone en 45 a 90 días, regresando al suelo como abono. Cero residuos, cero toxinas.",
      // li3Title: "Apto para Alimentos y No Tóxico",
      // li3Desc:
      //   "Certificado como seguro para el contacto alimentario, sin químicos dañinos ni microplásticos.",
      // li4Title: "Carbono Negativo",
      // li4Desc:
      //   "El proceso de fabricación captura más CO₂ del que emite, contribuyendo a la lucha contra el cambio climático.",
      p2: "Apoyar el Sacha Inchi significa contribuir a la preservación del Amazonas y del ecosistema terrestre — una fuerza vital que regula el clima del planeta y alberga una biodiversidad inigualable. Al elegir Sacha Inchi, estás empoderando a las comunidades locales que practican una agricultura sostenible en armonía con los delicados ritmos de la selva tropical.",
      p3: "Este cultivo extraordinario no solo ofrece oportunidades económicas justas para los agricultores indígenas, sino que también promueve la agroforestería y reduce la deforestación. Su cultivo representa un equilibrio poderoso, donde el bienestar de las personas y la salud de la biosfera prosperan juntos en un ciclo de renovación y respeto por la naturaleza.",
      founderTitle: "Conoce a la Fundadora",
      founderP1:
        "Nacida en Nueva York, criada en Ecuador: crecí entre dos mundos que forjaron mi visión de la vida, el bienestar y el propósito. Guiada por mi tío —un ingeniero agrónomo— adquirí un profundo respeto y comprensión por la ecología de las plantas y la sabiduría del suelo vivo. Cuando cuidamos la naturaleza, ella nos cuida a cambio.",
      founderP2:
        "Mis recuerdos de infancia más dulces provienen de vivir en una hacienda, donde el eucalipto impregnaba el aire. Los fines de semana visitábamos mercados al aire libre, repletos de frutas, verduras y nueces frescas. Mi familia creía firmemente que el alimento debe venir directo de la tierra: puro, fresco y lleno de vida. Una filosofía que me guía hasta hoy.",
      founderP3:
        "Ahora, como neoyorquina, llevo conmigo la riqueza de ambos mundos. En esta ciudad de diversidad y creatividad global, tiendo un puente entre las tradiciones bioorgánicas ancestrales de Ecuador y el estilo de vida moderno de Nueva York, impulsado por la salud. Así conectamos a nuestros agricultores con consumidores globales que buscan autenticidad, sostenibilidad y bienestar en cada bocado.",
      founderP4:
        "Cada bocado de Omare es un homenaje a ambos mundos: a la Madre Tierra y a la diversidad cultural que hace que el bienestar sea verdaderamente universal.",
      founderSignature: "- Fundadora, Omaré",
      ctaTitle: "Descubre los beneficios de Sacha Inchi",
      ctaDesc:
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
  const heroContent = document.querySelector(".hero");
  const heroContent_desc = heroContent.querySelector(".description");
  const char_image = heroContent.querySelector(".charImage");

  const window_width = window.innerWidth;

  const body = document.body;
  if (language === "es") {
    body.classList.add("es");

    heroContent_desc.style.textWrap = "pretty";

    if (window_width >= 1536) {
      char_image.style.right = "20%";
      char_image.style.bottom = "2.9%";
    } else if (window_width >= 1440) {
      char_image.style.right = "27%";
      char_image.style.bottom = "2.8%";
    } else if (window_width >= 1280) {
      char_image.style.right = "15%";
      char_image.style.bottom = "2.8%";
    } else if (window_width >= 1024) {
      char_image.style.right = "13%";
      char_image.style.bottom = "3.2%";
    } else if (window_width >= 960) {
      char_image.style.right = "28%";
      char_image.style.bottom = "4%";
    } else if (window_width >= 768) {
      char_image.style.right = "20%";
      char_image.style.bottom = "4.8%";
    } else if (window_width >= 400) {
      char_image.style.right = "0";
      char_image.style.bottom = "5%";
    }
  } else {
    body.classList.remove("es");

    if (window_width >= 1536) {
      char_image.style.right = "14%";
      char_image.style.bottom = "3.4%";
    } else if (window_width >= 1440) {
      char_image.style.right = "23%";
      char_image.style.bottom = "3.2%";
    } else if (window_width >= 1280) {
      char_image.style.right = "10%";
      char_image.style.bottom = "3.2%";
    } else if (window_width >= 1024) {
      char_image.style.right = "6%";
      char_image.style.bottom = "3.3%";
    } else if (window_width >= 960) {
      char_image.style.right = "6%";
      char_image.style.bottom = "4.5%";
    } else if (window_width >= 768) {
      char_image.style.right = "16%";
      char_image.style.bottom = "4.9%";
    } else if (window_width >= 480) {
      char_image.style.right = "0";
      char_image.style.bottom = "9.5%";
    } else if (window_width >= 400) {
      char_image.style.right = "-5%";
      char_image.style.bottom = "5%";
    }
  }

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
// const languageToggle2 = document.querySelectorAll(".languageToggle2");
// const toggle1 = document.getElementById("languageToggle");
const toggle2 = document.getElementById("languageToggle2");

// function syncToggles(source, target) {
//   target.checked = source.checked;
// }
// toggle1.addEventListener("change", () => syncToggles(toggle1, toggle2));
// toggle2.addEventListener("change", () => syncToggles(toggle2, toggle1));

languageToggle.forEach((el) => {
  el.addEventListener("change", (event) => {
    console.log(`toggleando`);

    const selectedLanguage = event.target.checked ? "es" : "en";
    if (selectedLanguage === "es") {
      document.body.classList.add(selectedLanguage);
    } else {
      document.body.classList.remove("es");
    }
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

// *Packaging Section*
// Scroll reveal animation
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

document.querySelectorAll(".section-reveal").forEach((el) => {
  observer.observe(el);
});

// Enhanced 3D tilt effect for cards
document.querySelectorAll(".packaging-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    const inner = card.querySelector(".card-inner");
    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });

  card.addEventListener("mouseleave", () => {
    const inner = card.querySelector(".card-inner");
    inner.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

// Parallax effect for decorative elements
document.addEventListener("mousemove", (e) => {
  const leaves = document.querySelectorAll(".leaf-decoration");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  leaves.forEach((leaf, index) => {
    const speed = (index + 1) * 20;
    leaf.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});

//read more packaging section
        // Expandable content toggle
function toggleExpand(contentId, button) {
          console.log('expanding');
          
            const content = document.getElementById(contentId);
            const readText = button.querySelector('.read-text');
            
            if (content.classList.contains('expanded')) {
                content.classList.remove('expanded');
                button.classList.remove('expanded');
                readText.textContent = 'Read more';
            } else {
                content.classList.add('expanded');
                button.classList.add('expanded');
                readText.textContent = 'Read less';
            }
        }

const readMoreBtns = document.querySelectorAll('.read-more-btn'
)

readMoreBtns.forEach((btn) => btn.addEventListener('click', btn.addEventListener('click', function () {
  const targetId = this.getAttribute('data-expand-target');
  const content = document.getElementById(targetId);
  const readText = this.querySelector('.read-text');
                
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    this.classList.remove('expanded');
    readText.textContent = 'Read more';
  } else {
    content.classList.add('expanded');
    this.classList.add('expanded');
    readText.textContent = 'Read less';
  }
})))
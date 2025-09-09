import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

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
    headerAboutSection.style.zIndex = "1";
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
    navBar: {
      home: "Home",
      moreInfo: "Learn More",
      aboutUs: "Mission",
    },
    mobileMenu: {
      home: "Home",
      moreInfo: "Learn More",
      aboutUs: "Mission",
    },
    header: {
      title: "Learn More About Sacha Inchi",
      subTitle: `Discover the Amazonian seed that combines tradition, nutrition, and sustainability.`,
    },
    infoSection1: {
      title: "A Gift from the Amazon",
      p1: "This seed has been a vital part of Amazonian culture for centuries. Indigenous communities in Ecuador, Colombia, and Peru have cultivated this remarkable seed, cherishing it for its health benefits and sustainability. With its star-shaped fruit and rich heritage, Sacha Inchi represents a deep connection between nature and tradition.",
      p1Strong1: "Sacha Inchi,",
      p1Strong2: "often called the",
      p1Strong3: `"Indigenous Peanut".`,
      p2: "Sacha Inchi oil is cold-pressed from raw seeds, offering up to 92% Omega 3, 6, and 9, with no additives or preservatives. It’s also rich in vitamins A and E and tocopherols, making it a pure, nutrient-packed addition to your wellness routine",
    },
    infoSection2: {
      title: "Nutritional Powerhouse",
      //Product 1
      p1: "Sacha Inchi is a highly nutritious superfood, rich in healthy fatty acids, including Omega 3, 6, and 9, which make up 35% to 45% of its composition—completely free of cholesterol. It also boasts 25% protein and is packed with essential minerals like calcium, magnesium, zinc, and potassium, making it a powerful addition to a balanced diet.",
      cta: "Tap on a circle to explore more details!",
      benefit1Title: "Omega 3, 6, 9",
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
        "Packed with magnesium and potassium, it prevents cramps,supports muscle function, and restores electrolyte balance. Its anti-inflammatory properties and Omega 3 fatty acids reduce muscle inflammation, helping you recover faster, perform better, and build strong, lean muscles naturally.",
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
        "With its lightweight texture and anti-inflammatory properties, Sacha Inchi oil soothes irritation and balances oil production, making it perfect for all skin types. Reveal your natural glow with this Amazonian treasure.",
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
    },
    infoSection3: {
      title: "Sacha Inchi is a",
      subtitle: "SuperFood",
      cta: "Tap on a circle to explore more details!",
      benefit1Title: "Omega 3, 6, 9",
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
        "Packed with magnesium and potassium, it prevents cramps,supports muscle function, and restores electrolyte balance. Its anti-inflammatory properties and Omega 3 fatty acids reduce muscle inflammation, helping you recover faster, perform better, and build strong, lean muscles naturally.",
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
        "With its lightweight texture and anti-inflammatory properties, Sacha Inchi oil soothes irritation and balances oil production, making it perfect for all skin types. Reveal your natural glow with this Amazonian treasure.",
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
    },
    infoSection4: {
      title:
        "Nutritional values of Sacha Inchi compared to other nuts, seeds and oils",
      //Table 1
      chartOilTitle: "Healthy Fats (Omega 3, 6 and 9)",
      chartOilDescription:
        "Sacha Inchi leads as the ultimate Omega-3 source with 48g per 100g, followed by flaxseeds and chia seeds. While fish provides quality Omega-3s, plant sources offer the highest concentrations. Different foods excel in different omega types - olive oil in Omega-9, walnuts in Omega-6 - emphasizing the need for diverse, balanced fat intake for optimal health.",
      table_oilBottom: "Percent of Healthy Fats Content",
      //Table 2
      chartSeedsTitle: "Nuts & Seeds",
      chartSeedsDescription:
        "Sacha Inchi stands out as an exceptional source of healthy fats, making it an ideal choice for those looking to incorporate essential fatty acids into their diet. While other nuts and seeds also provide beneficial fats, their lipid content varies significantly. This highlights the unique nutritional advantage of Sacha Inchi, offering a superior balance of Omega-3, 6, and 9 to support overall well-being.",
      table_seedsBottom: "Percent of Healthy Fats Content",
      //Table 3
      chartProteinTitle: "Nuts, Grains, and Oils",
      chartProteinDescription:
        "Sacha Inchi stands out as a highly protein-rich alternative, comparable to peanuts but with a healthier lipid profile. Nuts and seeds serve as key sources of plant-based protein, while oils and fruits like avocado and olives offer other nutritional benefits but are not particularly high in protein. This distinction reinforces the value of Sacha Inchi as a well-rounded superfood, providing both high-quality protein and essential healthy fats for a balanced diet.",
    },
    infoSection5: {
      title: "Sustainability and Impact",
      p1: "Supporting Sacha Inchi means contributing to the preservation of the Amazon and earth ecosystem, a vital part of Earth's biosphere that regulates the planet's climate and houses unparalleled biodiversity. By choosing Sacha Inchi, you are empowering local communities through sustainable farming practices that harmonize with the delicate balance of the Amazon ecosystem.",
      p2: "This crop provides economic opportunities for indigenous farmers, enabling them to thrive while protecting their natural environment. In adition to that, cultivating Sacha Inchi encourages a deeper connection with the biosphere, which encompasses all the parts of Earth where life thrives. From the deepest root systems of trees to the dark depths of ocean trenches, and from lush rainforests to high mountaintops, the biosphere spans the full range of environments that sustain life.",
    },
    //*Mission Section **/
    mission: {
      title: "NOURISH YOUR BODY. HONOR THE EARTH",
      subTitle: "Our Mission",
      p1: "At the heart of our mission is the commitment to care for your well-being inside and out, providing you with the nourishing benefits of organic Sacha Inchi, nature's superfood. By choosing Sacha Inchi, you're not only fueling your body but also helping to protect the Amazon and support sustainable farming practices for a better future.",
      // p2: "We are committed to providing an all-natural, sustainable product that nourishes both people and the planet. By enhancing daily nutrition, we help people live healthier, more vibrant lives, all while honoring the biosphere and supporting the environment.",
    },

    footer: {
      description:
        "Discover the natural benefits of Sacha Inchi, the Amazonian treasure for your health and wellness.",
      home: "Home",
      moreInfo: "Learn More",
      aboutUs: "Mission",
      followUs: "Follow Us",
    },
  },

  es: {
    navBar: {
      home: "Inicio",
      aboutUs: "Misión",
      moreInfo: "Aprende Más",
    },
    mobileMenu: {
      home: "Inicio",
      moreInfo: "Aprende más",
      aboutUs: "Misión",
    },
    header: {
      title: "Aprende Más Acerca de Sacha Inchi",
      subTitle: `Descubre la semilla amazónica que combina tradición, nutrición y sostenibilidad.`,
      p2: "Conocidas como un superalimento lleno de nutrientes, las semillas de Sacha Inchi son ricas en proteínas y una excelente fuente de grasas saludables, especialmente Omega 3. Repletas de fibra, vitamina E y antioxidantes, brindan un impulso integral para tu cuerpo. El Sacha Inchi mejora la salud del corazón, la función cerebral, la fortaleza del sistema inmunológico y una piel radiante.",
      p3: "En el mundo del bienestar actual, el Sacha Inchi está robando protagonismo como un elemento imprescindible para la salud y el bienestar. Más allá de sus beneficios para la salud, Sacha Inchi representa la sabiduría y las prácticas sostenibles de los pueblos indígenas de la Amazonía.",
      p4: "Al incorporar este superalimento, no solo estás honrando al planeta, sino también apoyando la biosfera mientras ayudas a las personas a vivir vidas más saludables y vibrantes.",
    },
    infoSection1: {
      title: "Un Regalo del Amazonas",
      p1: "Esta semilla ha sido una parte vital de la cultura amazónica durante siglos. Las comunidades indígenas de Ecuador, Colombia y Perú han cultivado esta extraordinaria semilla, valorándola por sus beneficios para la salud y su sostenibilidad. Con su fruto en forma de estrella y su rica herencia, Sacha Inchi representa una profunda conexión entre la naturaleza y la tradición.",
      p1Strong1: "Sacha Inchi,",
      p1Strong2: "conocido como",
      p1Strong3: `"Maní Indígena".`,
      p2: "El aceite de Sacha Inchi se obtiene por prensado en frío a partir de semillas crudas, ofreciendo hasta un 92% de Omega 3, 6 y 9, sin aditivos ni conservantes. También es rico en vitaminas A y E y tocoferoles, lo que lo convierte en una adición pura y llena de nutrientes para tu bienestar.",
    },
    infoSection2: {
      title: "Potencia Nutricional",
      p1: "Sacha Inchi es un superalimento altamente nutritivo, rico en ácidos grasos saludables, incluyendo Omega 3, 6 y 9, que representan entre el 35% y el 45% de su composición, sin colesterol. Además, contiene 25% de proteínas y es una excelente fuente de minerales esenciales como calcio, magnesio, zinc y potasio, lo que lo convierte en un gran aliado para una alimentación equilibrada.",
    },
    infoSection3: {
      title: "Sacha Inchi es un",
      subtitle: "Super Alimento",
      cta: "Toca cualquier círculo para descubrir más!",
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
        "Además, los Omega 3 y Omega 6 desempeñan un papel vital en la función cerebral al favorecer la salud cognitiva, mejorar la memoria y promover la claridad mental. Sus efectos antiinflamatorios también contribuyen a una mejor salud neurológica, pudiendo reducir el riesgo de deterioro cognitivo relacionado con la edad.",
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
    },

    infoSection4: {
      title:
        "Valores nutricionales de Sacha Inchi comparados con otras nueces, semillas y aceites",
      //Table 1
      chartOilTitle: "Grasas Saludables (Omega 3, 6 y 9)",
      chartOilDescription:
        "Sacha Inchi lidera como la fuente definitiva de Omega-3 con 48g por 100g, seguido por semillas de lino y chía. Aunque el pescado proporciona Omega-3 de calidad, las fuentes vegetales ofrecen las concentraciones más altas. Diferentes alimentos sobresalen en distintos tipos de omega - aceite de oliva en Omega-9, nueces en Omega-6 - enfatizando la necesidad de una ingesta de grasas diversa y equilibrada para una salud óptima.",
      //Table 2
      chartSeedsTitle: "Nueces y Semillas",
      chartSeedsDescription:
        "Sacha Inchi sobresale nuevamente como una fuente excepcional de grasas saludables, siendo una opción ideal para quienes buscan ácidos grasos esenciales en su dieta. Aunque los demás frutos secos y semillas también son buenas fuentes, su contenido lipídico varía considerablemente.",
      table_seedsBottom: "Porcentaje de contenido de grasas saludables",
      //Table 3
      chartProteinTitle: "Frutos secos, cereales y aceites",
      chartProteinDescription:
        "Se destaca a Sacha Inchi como una alternativa altamente proteica comparable al maní, pero con un perfil lipídico más saludable. Los frutos secos y semillas son una fuente clave de proteínas vegetales, mientras que los aceites y frutos como el aguacate y la aceituna aportan otros beneficios nutricionales, pero no son ricos en proteínas.",
    },
    infoSection5: {
      title: "Sostenibilidad e Impacto",
      p1: "Apoyar el Sacha Inchi significa contribuir a la preservación del Amazonas y el ecosistema terrestre, una parte vital de la biosfera del planeta que regula el clima global y alberga una biodiversidad inigualable. Al elegir Sacha Inchi, estás empoderando a las comunidades locales a través de prácticas agrícolas sostenibles que armonizan con el delicado equilibrio del ecosistema amazónico.",
      p2: "Este cultivo proporciona oportunidades económicas para los agricultores indígenas, permitiéndoles prosperar mientras protegen su entorno natural. Además, el cultivo de Sacha Inchi fomenta una conexión más profunda con la biosfera, que abarca todas las partes de la Tierra donde la vida prospera. Desde los sistemas de raíces más profundos de los árboles hasta las oscuras profundidades de las trincheras oceánicas, y desde las exuberantes selvas tropicales hasta las altas cumbres montañosas, la biosfera abarca toda la gama de entornos que sostienen la vida.",
    },
    mission: {
      title: "NUTRE TU CUERPO. HONRA A LA TIERRA",
      subTitle: "Nuestra Misión",
      p1: "En el corazón de nuestra misión está el compromiso de cuidar tu bienestar por dentro y por fuera, brindándote los beneficios nutritivos del Sacha Inchi orgánico, el superalimento de la naturaleza. Al elegir Sacha Inchi, no solo estás alimentando tu cuerpo, sino también ayudando a proteger la Amazonía y apoyar prácticas agrícolas sostenibles para un futuro mejor.",
      // p2: "Estamos comprometidos con ofrecer un producto 100% natural y sostenible que nutra tanto a las personas como al planeta. Al mejorar la nutrición diaria, ayudamos a las personas a llevar una vida más saludable y llena de vitalidad, mientras honramos la biosfera y protegemos el medio ambiente.",
    },

    footer: {
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

const languageToggle = document.querySelector(".languageToggle");

languageToggle.addEventListener("change", (event) => {
  const selectedLanguage = event.target.checked ? "es" : "en";
  updateTranslations(selectedLanguage); // Call your translation function
  createOilChart(selectedLanguage);
  createSeedsChart(selectedLanguage);
  createProteinChart(selectedLanguage);
});

// Set default language
const userLanguage = navigator.language.startsWith("es") ? "es" : "en";

languageToggle.checked = userLanguage === "es";

updateTranslations(userLanguage);

window.addEventListener("load", () => updateTranslations(userLanguage));

//*Chart Section
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

let omegaChart;
let seedsChart;
let proteinChart;

// function createOilChart(userLanguage) {
//   const canvasElement = document.getElementById("oilChart");
//   if (!canvasElement) return

//   const ctx = document.getElementById("oilChart").getContext("2d");
//   const labelText =
//     userLanguage === "en"
//       ? "Healthy Fats In Oil (%)"
//       : "Grasas Saludables En El Aceite (%)";

//   const labelsText = {
//     sachaInchi: userLanguage === "en" ? "Sacha Inchi" : "Sacha Inchi",
//     flaxseed: userLanguage === "en" ? "Flaxseed" : "Lino",
//     soybean: userLanguage === "en" ? "Soybean" : "Soja",
//     corn: userLanguage === "en" ? "Corn" : "Maiz",
//     sunflower: userLanguage === "en" ? "Sunflower" : "Girasol",
//     avocado: userLanguage === "en" ? "Avocado" : "Aguacate",
//     olive: userLanguage === "en" ? "Olive" : "Oliva",
//     coconut: userLanguage === "en" ? "Coconut" : "Coco",
//   };

//   if (oilChart) {
//     oilChart.destroy();
//   }

//   const data = {
//     labels: [
//       labelsText.sachaInchi,
//       labelsText.flaxseed,
//       labelsText.soybean,
//       labelsText.corn,
//       labelsText.sunflower,
//       labelsText.avocado,
//       labelsText.olive,
//       labelsText.coconut,
//     ],
//     datasets: [
//       {
//         label: labelText,
//         data: [82.8, 72.9, 63.0, 62.5, 62.3, 15.0, 9.1, 2.0],
//         backgroundColor: [
//           "#7ed957", // Sacha Inchi
//           "#a6a6a6", // Flaxseed
//           "#d6cc99", // Gold for Soybean
//           "#F8DE7E", // Pale yellow for Corn
//           "#D2B4CC", // Sunflower yellow
//           "#567D46", // Green for Avocado
//           "304d30", // Olive grey
//           "#ffffff", // Coconut White
//         ],
//         borderColor: "#1b4d20",
//         borderWidth: 1,
//         borderRadius: 10,
//         fontString: 20,
//       },
//     ],
//   };
//   const dataValues = [82.8, 72.9, 63.0, 62.5, 62.3, 15.0, 9.1, 2.0];

//   const maxValue = Math.max(...dataValues);
//   const maxIndex = dataValues.indexOf(maxValue);

//   const config = {
//     type: "bar",
//     data: data,
//     options: {
//       indexAxis: "y", // Horizontal bar configuration
//       responsive: true,
//       maintainAspectRatio: false,
//       animation: {
//         duration: 1500,
//       },
//       plugins: {
//         legend: {
//           display: true,
//           position: "top",
//           labels: {
//             color: "#E0F7FA",
//             usePointStyle: false, // Enable point styles (necessary to customize)
//             boxWidth: 0, // Set box width to 0 to hide the symbol
//             boxHeight: 0, // Optional: Ensure no height for the symbol
//             font: {
//               size: 18,
//               weight: 600,
//               family: "'Playfair Display', sans-serif",
//             },
//           },
//         },
//         tooltip: {
//           backgroundColor: "#fff9f0",
//           titleColor: "#2A3D45",
//           bodyColor: "#2A3D45",
//           anchor: "end",
//           align: "end",
//           padding: 12,
//           titleFont: { size: 16, weight: "bold" },
//           bodyFont: { size: 14 },
//           cornerRadius: 8,
//           displayColors: true,
//           callbacks: {
//             label: function (tooltipItem) {
//               return `${tooltipItem.raw}% Healthy Fats`;
//             },
//           },
//         },
//       },
//       scales: {
//         x: {
//           ticks: {
//             color: "#ffffff",
//             font: {
//               size: 15,
//               weight: 700,
//               family: "'Lora', sans-serif",
//             },
//           },
//           border: {
//             color: "#ffffff",
//           },
//           grid: {
//             color: "#E0F7FA",
//           },
//         },
//         y: {
//           ticks: {
//             color: "#E0F7FA",
//             font: {
//               size: 15,
//               weight: 600,
//               family: "'Lora', sans-serif",
//             },
//           },
//           border: {
//             color: "#ffffff",
//           },
//           grid: {
//             display: false,
//           },
//         },
//       },
//     },
//   };
//   oilChart = new Chart(ctx, config);

//   // Show the fixed tooltip after rendering
//   oilChart.render(); // Ensure chart is rendered first
//   oilChart.tooltip.setActiveElements(
//     [{ datasetIndex: 0, index: maxIndex }],
//     { x: 0, y: 0 } // Dummy coordinates; chart auto-adjusts the tooltip
//   );
//   oilChart.update();
// }

function createOmegaChart(userLanguage) {
  const canvasElement = document.getElementById("omegaChart");
  if (!canvasElement) return;

  const ctx = document.getElementById("omegaChart").getContext("2d");
  
  // Labels for different languages
  const chartLabels = {
    title: userLanguage === "en" ? "Omega Fatty Acids Content (g per 100g)" : "Contenido de Ácidos Grasos Omega (g por 100g)",
    omega3: userLanguage === "en" ? "Omega-3" : "Omega-3",
    omega6: userLanguage === "en" ? "Omega-6" : "Omega-6",
    omega9: userLanguage === "en" ? "Omega-9" : "Omega-9"
  };

  const foodLabels = {
    sachaInchi: userLanguage === "en" ? "Sacha Inchi" : "Sacha Inchi",
    flaxseeds: userLanguage === "en" ? "Flaxseeds" : "Semillas de Lino",
    chiaSeeds: userLanguage === "en" ? "Chia Seeds" : "Semillas de Chía",
    walnuts: userLanguage === "en" ? "Walnuts" : "Nueces",
    canolaOil: userLanguage === "en" ? "Canola Oil" : "Aceite de Canola",
    hempSeeds: userLanguage === "en" ? "Hemp Seeds" : "Semillas de Cáñamo",
    mackerel: userLanguage === "en" ? "Mackerel" : "Caballa",
    salmon: userLanguage === "en" ? "Salmon (wild)" : "Salmón (salvaje)",
    sardines: userLanguage === "en" ? "Sardines" : "Sardinas",
    soybeans: userLanguage === "en" ? "Soybeans" : "Soja",
    oliveOil: userLanguage === "en" ? "Olive Oil" : "Aceite de Oliva",
    macadamiaOil: userLanguage === "en" ? "Macadamia Nut Oil" : "Aceite de Macadamia",
    tuna: userLanguage === "en" ? "Tuna" : "Atún",
    avocados: userLanguage === "en" ? "Avocados" : "Aguacates",
    eggs: userLanguage === "en" ? "Eggs (pasture-raised)" : "Huevos (pastoreo)",
    beef: userLanguage === "en" ? "Grass-fed Beef" : "Carne de Res"
  };

  // Destroy existing chart if it exists
  if (typeof omegaChart !== 'undefined' && omegaChart) {
    omegaChart.destroy();
  }

  // Data arrays for each omega type
  const omega3Data = [48, 22.8, 17.8, 9.1, 9.1, 8.7, 4.6, 2.6, 1.5, 1.4, 0.8, 0.2, 0.2, 0.1, 0.1, 0.05];
  const omega6Data = [36, 5.9, 5.8, 38.1, 19, 27.5, 0.9, 0.5, 0.5, 9.9, 9.8, 1.3, 0.05, 1.7, 1.2, 0.2];
  const omega9Data = [9, 6, 6, 8.9, 61, 8.5, 6, 7, 6, 1.5, 70, 59, 7, 6.7, 4, 4];

  const data = {
    labels: [
      foodLabels.sachaInchi,
      foodLabels.flaxseeds,
      foodLabels.chiaSeeds,
      foodLabels.walnuts,
      foodLabels.canolaOil,
      foodLabels.hempSeeds,
      foodLabels.mackerel,
      foodLabels.salmon,
      foodLabels.sardines,
      foodLabels.soybeans,
      foodLabels.oliveOil,
      foodLabels.macadamiaOil,
      foodLabels.tuna,
      foodLabels.avocados,
      foodLabels.eggs,
      foodLabels.beef
    ],
    datasets: [
      {
        label: chartLabels.omega3,
        data: omega3Data,
        backgroundColor: "#4CAF50", // Green for Omega-3
        borderColor: "#388E3C",
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: chartLabels.omega6,
        data: omega6Data,
        backgroundColor: "#FF9800", // Orange for Omega-6
        borderColor: "#F57C00",
        borderWidth: 1,
        borderRadius: 4,
      },
      {
        label: chartLabels.omega9,
        data: omega9Data,
        backgroundColor: "#2196F3", // Blue for Omega-9
        borderColor: "#1976D2",
        borderWidth: 1,
        borderRadius: 4,
      }
    ],
  };

  // Find the food with highest Omega-3 content for tooltip
  const maxOmega3Value = Math.max(...omega3Data);
  const maxOmega3Index = omega3Data.indexOf(maxOmega3Value);

  const config = {
    type: "bar",
    data: data,
    options: {
      indexAxis: "y", // Horizontal bar configuration
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1500,
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: {
            color: "#E0F7FA",
            font: {
              size: 16,
              weight: 600,
              family: "'Playfair Display', sans-serif",
            },
          },
        },
        tooltip: {
          backgroundColor: "#fff9f0",
          titleColor: "#2A3D45",
          bodyColor: "#2A3D45",
          anchor: "end",
          align: "end",
          padding: 12,
          titleFont: { size: 16, weight: "bold" },
          bodyFont: { size: 14 },
          cornerRadius: 8,
          displayColors: true,
          callbacks: {
            label: function (tooltipItem) {
              const omegaType = tooltipItem.dataset.label;
              return `${omegaType}: ${tooltipItem.raw}g`;
            },
            // afterLabel: function (tooltipItem) {
            //   const dataIndex = tooltipItem.dataIndex;
            //   return [
            //     `Omega-3: ${omega3Data[dataIndex]}g`,
            //     `Omega-6: ${omega6Data[dataIndex]}g`,
            //     `Omega-9: ${omega9Data[dataIndex]}g`
            //   ];
            // }
          },
        },
      },
      scales: {
        x: {
          stacked: false, // Set to true if you want stacked bars
          ticks: {
            color: "#ffffff",
            font: {
              size: 15,
              weight: 700,
              family: "'Lora', sans-serif",
            },
          },
          border: {
            color: "#ffffff",
          },
          grid: {
            color: "#E0F7FA",
          },
          title: {
            display: true,
            text: userLanguage === "en" ? "Grams per 100g" : "Gramos por 100g",
            color: "#E0F7FA",
            font: {
              size: 14,
              weight: 600,
            }
          }
        },
        y: {
          stacked: false, // Set to true if you want stacked bars
          ticks: {
            color: "#E0F7FA",
            font: {
              size: 13,
              weight: 600,
              family: "'Lora', sans-serif",
            },
          },
          border: {
            color: "#ffffff",
          },
          grid: {
            display: false,
          },
        },
      },
    },
  };

  // Create the chart
  omegaChart = new Chart(ctx, config);

  // Show tooltip for the highest Omega-3 source
  omegaChart.render();
  omegaChart.tooltip.setActiveElements(
    [{ datasetIndex: 0, index: maxOmega3Index }],
    { x: 0, y: 0 }
  );
  omegaChart.update();
}

// Alternative version with stacked bars (uncomment if preferred)
/*
function createStackedOmegaChart(userLanguage) {
  // ... same setup code ...
  
  const config = {
    type: "bar",
    data: data,
    options: {
      indexAxis: "y",
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          stacked: true, // Enable stacking
        },
        y: {
          stacked: true, // Enable stacking
        },
      },
      // ... rest of options
    },
  };
}
*/

function createSeedsChart(userLanguage) {
  const canvasElement = document.getElementById("seedsChart");
  if (!canvasElement) return;

  const ctx = document.getElementById("seedsChart").getContext("2d");
  const labelText =
    userLanguage === "en"
      ? "Healthy Fats In Nuts and Seeds (%)"
      : "Grasas Saludables En Nueces y Semillas (%)";

  const labelsText = {
    sachaInchi: userLanguage === "en" ? "Sacha Inchi" : "Sacha Inchi",
    sunflower: userLanguage === "en" ? "Sunflower" : "Girasol",
    corn: userLanguage === "en" ? "Corn" : "Maiz",
    peanuts: userLanguage === "en" ? "Peanuts" : "Maní",
    pistachios: userLanguage === "en" ? "Pistachios" : "Pistachos",
    cashew: userLanguage === "en" ? "Cashew" : "Marañón",
    avocado: userLanguage === "en" ? "Avocado" : "Aguacate",
    macadamia: userLanguage === "en" ? "Macadamia" : "Macadamia",
    coconut: userLanguage === "en" ? "Coconut" : "Coco",
  };
  if (seedsChart) {
    seedsChart.destroy();
  }
  const data = {
    labels: [
      labelsText.sachaInchi,
      labelsText.sunflower,
      labelsText.corn,
      labelsText.peanuts,
      labelsText.pistachios,
      labelsText.cashew,
      labelsText.avocado,
      labelsText.macadamia,
      labelsText.coconut,
    ],
    datasets: [
      {
        label: labelText,
        data: [84.5, 69.0, 56.0, 33.2, 31.6, 17.7, 13.0, 1.8, 0.5],
        backgroundColor: [
          "#7ed957", // Sacha Inchi
          "#D2B4CC", // Sunflower
          "#F8DE7E", // Pale yellow for Corn
          "#d6cc99", // Peanuts
          "#93C572", // Pistachios
          "#8B5A2B", // Cashew
          "#304d30", // Olive grey
          "#F1D6BB", // Macadamia
          "#ffffff", // Coconut White
        ],
        borderColor: "#1b4d20",
        borderWidth: 1,
        borderRadius: 10,
        fontString: 20,
      },
    ],
  };
  const dataValues = [84.5, 69.0, 56.0, 33.2, 31.6, 17.7, 13.0, 1.8, 0.5];
  const maxValue = Math.max(...dataValues);
  const maxIndex = dataValues.indexOf(maxValue);
  const config = {
    type: "bar",
    data: data,
    options: {
      indexAxis: "y", // Horizontal bar configuration
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1500,
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: {
            color: "#E0F7FA",
            usePointStyle: false, // Enable point styles (necessary to customize)
            boxWidth: 0, // Set box width to 0 to hide the symbol
            boxHeight: 0, // Optional: Ensure no height for the symbol
            font: {
              size: 18,
              weight: 600,
              family: "'Playfair Display', sans-serif",
            },
          },
        },
        tooltip: {
          backgroundColor: "#fff9f0",
          titleColor: "#2A3D45",
          bodyColor: "#2A3D45",
          padding: 12,
          titleFont: { size: 16, weight: "bold" },
          bodyFont: { size: 14 },
          cornerRadius: 8,
          displayColors: true,
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.raw}% Healthy Fats`;
            },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#ffffff",
            font: {
              size: 15,
              weight: 700,
              family: "'Lora', sans-serif",
            },
          },
          border: {
            color: "#ffffff",
          },
          grid: {
            color: "#E0F7FA",
          },
        },
        y: {
          ticks: {
            color: "#E0F7FA",
            font: {
              size: 15,
              weight: 600,
              family: "'Lora', sans-serif",
            },
          },
          border: {
            color: "#ffffff",
          },
          grid: {
            display: false,
          },
        },
      },
    },
  };
  seedsChart = new Chart(ctx, config);
  // Show the fixed tooltip after rendering
  seedsChart.render(); // Ensure chart is rendered first
  seedsChart.tooltip.setActiveElements(
    [{ datasetIndex: 0, index: maxIndex }],
    { x: 0, y: 0 } // Dummy coordinates; chart auto-adjusts the tooltip
  );
  seedsChart.update();
}

function createProteinChart(userLanguage) {
  const canvasElement = document.getElementById("proteinChart");
  if (!canvasElement) return;

  const ctx = document.getElementById("proteinChart").getContext("2d");
  const labelText =
    userLanguage === "en"
      ? "Protein In Nuts, Seeds and Oil (%)"
      : "Proteina En Nueces, Cereales y Aceite (%)";

  const labelsText = {
    peanuts: userLanguage === "en" ? "Peanuts" : "Maní",
    sachaInchi: userLanguage === "en" ? "Sacha Inchi" : "Sacha Inchi",
    sunflower: userLanguage === "en" ? "Sunflower" : "Girasol",
    flaxseed: userLanguage === "en" ? "Flax Seed" : "Lino",
    sesame: userLanguage === "en" ? "Sesame" : "Sesamo",
    corn: userLanguage === "en" ? "Corn" : "Maiz",
    coconut: userLanguage === "en" ? "Coconut" : "Coco",
    avocado: userLanguage === "en" ? "Avocado" : "Aguacate",
    olive: userLanguage === "en" ? "Olives" : "Aceituna",
  };

  if (proteinChart) {
    proteinChart.destroy();
  }
  const data = {
    labels: [
      labelsText.peanuts,
      labelsText.sachaInchi,
      labelsText.sunflower,
      labelsText.flaxseed,
      labelsText.sesame,
      labelsText.coconut,
      labelsText.corn,
      labelsText.avocado,
      labelsText.olive,
    ],
    datasets: [
      {
        label: labelText,
        data: [25.8, 24.7, 20.8, 18.3, 17.3, 4.0, 3.0, 2.0, 2.0],
        backgroundColor: [
          "#d6cc99", // Peanuts
          "#7ed957", // Sacha Inchi
          "#D2B4CC", // Sunflower
          "#a6a6a6", // Flaxseed
          "#EEDFCC", // Sesame
          "#ffffff", // Coconut White
          "#F8DE7E", // Corn
          "#567D46", // Green for Avocado
          "#304d30", // Olive grey
        ],
        borderColor: "#1b4d20",
        borderWidth: 1,
        borderRadius: 10,
        fontString: 20,
      },
    ],
  };

  const labels = [
    labelsText.peanuts,
    labelsText.sachaInchi,
    labelsText.sunflower,
    labelsText.flaxseed,
    labelsText.sesame,
    labelsText.coconut,
    labelsText.corn,
    labelsText.avocado,
    labelsText.olive,
  ];
  const targetLabel = "Sacha Inchi";
  const targetIndex = labels.indexOf(targetLabel);

  const config = {
    type: "bar",
    data: data,
    options: {
      indexAxis: "y", // Horizontal bar configuration
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 1500,
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: {
            color: "#E0F7FA",
            usePointStyle: false, // Enable point styles (necessary to customize)
            boxWidth: 0, // Set box width to 0 to hide the symbol
            boxHeight: 0, // Optional: Ensure no height for the symbol
            font: {
              size: 18,
              weight: 600,
              family: "'Playfair Display', sans-serif",
            },
          },
        },
        tooltip: {
          backgroundColor: "#fff9f0",
          titleColor: "#2A3D45",
          bodyColor: "#2A3D45",
          padding: 12,
          titleFont: { size: 16, weight: "bold" },
          bodyFont: { size: 14 },
          cornerRadius: 8,
          displayColors: true,
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.raw}% Healthy Fats`;
            },
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#ffffff",
            font: {
              size: 15,
              weight: 700,
              family: "'Lora', sans-serif",
            },
          },
          border: {
            color: "#ffffff",
          },
          grid: {
            color: "#E0F7FA",
          },
        },
        y: {
          ticks: {
            color: "#E0F7FA",
            font: {
              size: 15,
              weight: 600,
              family: "'Lora', sans-serif",
            },
          },
          border: {
            color: "#ffffff",
          },
          grid: {
            display: false,
          },
        },
      },
    },
  };
  proteinChart = new Chart(ctx, config);

  proteinChart.render(); // Ensure chart is rendered first
  proteinChart.tooltip.setActiveElements(
    [{ datasetIndex: 0, index: targetIndex }],
    { x: 0, y: 0 } // Dummy coordinates; chart auto-adjusts the tooltip
  );
  proteinChart.update();
}
//Initial Chart rendering
createOmegaChart(userLanguage);
createSeedsChart(userLanguage);
createProteinChart(userLanguage);


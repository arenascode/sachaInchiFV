//* Sticky Nav Logic
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
const topOfNav = nav.offsetTop;

function fixNav() {
  const offsetTop = window.scrollY;
  console.log(nav.offsetHeight);
  
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
console.log({ dropdownBtns });

dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalContent =
      btn.parentNode.parentNode.querySelector(".dropdown-content");
    console.log(btn);

    console.log({ modalContent });

    console.log(btn);
    modalContent.style.display = "block";
  });
});

benefitCloseBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const modal = btn.parentNode;
    console.log(modal); // Logs current class list
    modal.style.display = "none";

    console.log(modal); // Logs updated class list
  });
});

//* ENGLISH/SPANISH SWITCH LOGIC

const translations = {
  en: {
    navBar: {
      home: "Home",
      moreInfo: "More Info",
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
      p1Strong2: "Often called the",
      p1Strong3: `"Indigenous Peanut".`,
      p2: "Sacha Inchi oil is the result of the cold pressing of Sacha Inchi raw seeds. It is an oil with a very high Omega 3, 6, and 9 content (up to 92%). No additives or preservatives are used. It also contains vitamin A, E, and tocopherols.",
    },
    infoSection2: {
      title: "Nutritional Powerhouse",
      //Product 1
      p1: "Sacha Inchi has a high nutritional quality due to their exceptionally high content of healthy fatty acids like Omega 3, 6 and 9 from 35 to 45% with 0% of cholesterol, 25% of proteins, and essential minerals such as Calcium, Magnesium, Zinc, and Potassium.",
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
    },
    infoSection5: {
      title: "Sustainability and Impact",
      p1: "Supporting Sacha Inchi means contributing to the preservation of the Amazon and earth ecosystem, a vital part of Earth's biosphere that regulates the planet's climate and houses unparalleled biodiversity. By choosing Sacha Inchi, you are empowering local communities through sustainable farming practices that harmonize with the delicate balance of the Amazon ecosystem.",
      p2: "This crop provides economic opportunities for indigenous farmers, enabling them to thrive while protecting their natural environment. In adition to that, cultivating Sacha Inchi encourages a deeper connection with the biosphere, which encompasses all the parts of Earth where life thrives. From the deepest root systems of trees to the dark depths of ocean trenches, and from lush rainforests to high mountaintops, the biosphere spans the full range of environments that sustain life.",
    },
    //*Mission Section **/
    mission: {
      title: "About Us",
      subtitle: "Our Mission",
      p1: "Our mission is to promote wellness from the inside out by providing the nutrient-rich benefits of organic Sancha-Inchi, nature's superfood. With its essential Omega 3, 6, and 9 fatty acids,Sancha-Inchi supports heart health, brain function, immune strength, and radiant skin.",
      p2: "We are committed to providing an all-natural, sustainable product that nourishes both people and the biosphere. It enhances daily nutrition while honoring the planet and helping people live healthier, more vibrant lives.",
    },

    footer: {
      description:
        "Discover the natural benefits of Sacha Inchi, the Amazonian treasure for your health and wellness.",
      home: "Home",
      moreInfo: "More Info",
      aboutUs: "Mission",
      followUs: "Follow Us",
    },
  },

  es: {
    navBar: {
      home: "Inicio",
      moreInfo: "Más Información",
      aboutUs: "Misión",
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
      p1Strong2: "Conocido como",
      p1Strong3: `"Maní Indígena".`,
      p2: "El aceite de Sacha Inchi es el resultado del prensado en frío de semillas crudas de Sacha Inchi. Es un aceite con un contenido muy alto de Omega 3, 6 y 9 (hasta un 92%). No se utilizan aditivos ni conservantes. También contiene vitamina A, E y tocoferoles.",
    },
    infoSection2: {
      title: "Potencia Nutricional",
      p1: "Sacha Inchi tiene una alta calidad nutricional gracias a su excepcional contenido de ácidos grasos saludables como Omega 3, 6 y 9, que varía entre un 35% y un 45%, con 0% de colesterol, 25% de proteínas y minerales esenciales como Calcio, Magnesio, Zinc y Potasio.",
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
        "Sacha Inchi es una poderosa fuente de ácidos grasos Omega 3, 6, 9 y vitamina E, que ofrece propiedades antiinflamatorias y antioxidantes.",
      benefit1Cardp2:
        "Estos nutrientes trabajan en conjunto para reducir la inflamación, aliviar el dolor articular, la rigidez muscular y los síntomas de afecciones como la artritis, además de proteger las células del estrés oxidativo y el daño.",
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
        "Sacha Inchi es una poderosa fuente de ácidos grasos Omega 3, 6, 9 y vitamina E, que ofrece propiedades anti-inflamatorias y antioxidantes.",
      benefit1Cardp2:
        "Estos nutrientes trabajan en conjunto para reducir la inflamación, aliviar el dolor articular, la rigidez muscular y los síntomas de afecciones como la artritis, además de proteger las células del estrés oxidativo y el daño.",
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
    },
    infoSection5: {
      title: "Sostenibilidad e Impacto",
      p1: "Apoyar el Sacha Inchi significa contribuir a la preservación del Amazonas y el ecosistema terrestre, una parte vital de la biosfera del planeta que regula el clima global y alberga una biodiversidad inigualable. Al elegir Sacha Inchi, estás empoderando a las comunidades locales a través de prácticas agrícolas sostenibles que armonizan con el delicado equilibrio del ecosistema amazónico.",
      p2: "Este cultivo proporciona oportunidades económicas para los agricultores indígenas, permitiéndoles prosperar mientras protegen su entorno natural. Además, el cultivo de Sacha Inchi fomenta una conexión más profunda con la biosfera, que abarca todas las partes de la Tierra donde la vida prospera. Desde los sistemas de raíces más profundos de los árboles hasta las oscuras profundidades de las trincheras oceánicas, y desde las exuberantes selvas tropicales hasta las altas cumbres montañosas, la biosfera abarca toda la gama de entornos que sostienen la vida.",
    },
    mission: {
      title: "Sobre Nosotros",
      subtitle: "Nuestra Misión",
      p1: "Nuestra misión es promover el bienestar desde adentro hacia afuera al ofrecer los beneficios ricos en nutrientes del Sacha Inchi orgánico, el superalimento de la naturaleza. Con sus ácidos grasos esenciales Omega 3, 6 y 9, el Sacha Inchi apoya la salud del corazón, la función cerebral, la fortaleza del sistema inmunológico y una piel radiante.",
      p2: "Estamos comprometidos a ofrecer un producto completamente natural y sostenible que nutre tanto a las personas como a la biosfera. Mejora la nutrición diaria mientras honra al planeta y ayuda a las personas a vivir vidas más saludables y llenas de vitalidad.",
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
  console.log(`activated`);

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
console.log(languageToggle);

languageToggle.addEventListener("change", (event) => {
  console.log(`clicked`);
  const selectedLanguage = event.target.checked ? "es" : "en";
  console.log("Selected Language:", selectedLanguage);
  updateTranslations(selectedLanguage); // Call your translation function
});

// Set default language
const userLanguage = navigator.language.startsWith("es") ? "es" : "en";

languageToggle.checked = userLanguage === "es";

updateTranslations(userLanguage);

window.addEventListener("load", () => updateTranslations(userLanguage));



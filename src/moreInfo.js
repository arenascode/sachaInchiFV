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
      p1: "This seed has been a vital part of Amazonian culture for centuries. Indigenous communities in Ecuador, Colombia, and Peru have cultivated this remarkable seed, cherishing it for its health benefits and sustainability. With its star-shaped seed and rich heritage, Sacha Inchi represents a deep connection between nature and tradition.",
      p1Strong1: "Sacha Inchi,",
      p1Strong2: "often called the",
      p1Strong3: `"Indigenous Peanut".`,
      p2: "The healthy fats (LA, ALA) found in Sacha Inchi seeds are more than just an energy source. These special fats, such as omega-3s, play a key role in keeping your body in balance. They support your heart by helping maintain healthy cholesterol levels and good circulation, they nourish your brain to keep memory and focus sharp, and they also have anti-inflammatory properties that can ease stress on your joints and muscles. Including them in your diet is like giving your body daily care from the inside out — protecting your long-term health in a simple and natural way.",
    },
    infoSection2: {
      title: "Nutritional Powerhouse",
      //Product 1
      p1: "Sacha Inchi is a highly nutritious superfood, rich in healthy fatty acids, including Omega 3, 6, and 9, which make up 35% to 45% of its composition—completely free of cholesterol. It also boasts 25% protein and is packed with essential minerals like calcium, magnesium, zinc, and potassium, making it a powerful addition to a balanced diet.",
      tableNote:
        "Note: The nutritional values presented are approximate and may vary slightly between harvests due to the natural, organic growing conditions of Sacha Inchi. These variations reflect the authenticity of a truly bio-organic product nurtured by nature.",
    },
    infoSection4: {
      title: "Sacha Inchi: A Superior Source of Healthy Fats (Omega 3, 6)",
      //Table 1
      chartOilTitle: "Healthy Fats (Omega 3, 6)",
      chartOilDescription:
        "Sacha Inchi stands out as one of the richest plant-based sources of essential fatty acids, delivering an unparalleled 48g of Omega-3 per 100g—far exceeding flaxseeds and chia seeds. While fish remains a quality source of Omega-3s, plant-based options like Sacha Inchi provide the highest concentrations alongside a superior balance of Omega-3, 6, and 9. Compared to other nuts and seeds, whose fat profiles vary widely, Sacha Inchi offers a unique nutritional advantage, making it a powerful ally for balanced, heart-healthy, and overall well-being.",
      table_oilBottom: "Percent of Healthy Fats Content",
      //Table 2
      chartSeedsTitle: "Nuts & Seeds",
      chartSeedsDescription:
        "Sacha Inchi stands out as an exceptional source of healthy fats, making it an ideal choice for those looking to incorporate essential fatty acids into their diet. While other nuts and seeds also provide beneficial fats, their lipid content varies significantly. This highlights the unique nutritional advantage of Sacha Inchi, offering a superior balance of Omega-3, 6, and 9 to support overall well-being.",
      table_seedsBottom: "Percent of Healthy Fats Content",
      //Table 3
      chartProteinTitle:
        "Beyond Healthy Fats: The Protein Advantage of Sacha Inchi",
      chartProteinDescription:
        "Sacha Inchi stands out as a highly protein-rich alternative, comparable to peanuts but with a healthier lipid profile. Nuts and seeds serve as key sources of plant-based protein, while oils and fruits like avocado and olives offer other nutritional benefits but are not particularly high in protein. This distinction reinforces the value of Sacha Inchi as a well-rounded superfood, providing both high-quality protein and essential healthy fats for a balanced diet.",
    },
    infoSection4_2: {
      chartProteinTitle:
        "Beyond Healthy Fats: The Protein Advantage of Sacha Inchi",
      chartProteinDescription:
        "Sacha Inchi stands out as a highly protein-rich alternative, comparable to peanuts but with a healthier lipid profile. Nuts and seeds serve as key sources of plant-based protein, while oils and fruits like avocado and olives offer other nutritional benefits but are not particularly high in protein. This distinction reinforces the value of Sacha Inchi as a well-rounded superfood, providing both high-quality protein and essential healthy fats for a balanced diet.",
    },
    //*Mission Section **/
    mission: {
      title: "Nourish Your Body From The Inside Out While Honoring The earth.",
      subTitle: "Our Mission",
      p1Sub1: "We're here to ",
      p1Sub2: "fuel your body and feed your soul",
      p1Sub3:
        "with the wholesome power of organic Sacha Inchi—nature's little superfood with a big heart. Every handful gives you clean, plant-based goodness while helping protect the Amazon and uplift sustainable farmers.",
      p2: "For us, it's about going back to the simple, natural ways of caring for ourselves—without taking more than Mother Earth can give. Because what makes you stronger should also make the planet thrive. 💚 We believe in keeping it simple: real food, real love, and zero harm to Mother Earth. 💕",
      p3: "Together, we can snack happy and grow a brighter future—one little seed at a time. 🌍🌸",
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
      tableNote:
        "Nota: Los valores nutricionales son estimativos y pueden cambiar levemente entre cosechas, ya que el Sacha Inchi crece bajo condiciones naturales y orgánicas. Estas diferencias son muestra de la pureza y autenticidad de un producto guiado por la naturaleza.",
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
    infoSection4_2: {
      chartProteinTitle:
        "Más allá de las grasas saludables: la ventaja proteica del Sacha Inchi",
      chartProteinDescription:
        "El Sacha Inchi se destaca como una alternativa excepcionalmente rica en proteínas, comparable al maní pero con un perfil lipídico más saludable. Los frutos secos y las semillas son fuentes clave de proteína vegetal, mientras que los aceites y frutas como el aguacate y las aceitunas ofrecen otros beneficios nutricionales, aunque no se caracterizan por su alto contenido proteico. Esta distinción refuerza el valor del Sacha Inchi como un superalimento integral, que aporta tanto proteínas de alta calidad como grasas saludables esenciales para una dieta equilibrada.",
    },
    mission: {
      title: "Nutre Tu Cuerpo Desde El Interior Mientras Honras A La Tierra",
      subTitle: "Nuestra Misión",
      p1Sub1: "Estamos aquí para",
      p1Sub2: "nutrir tu cuerpo y alimentar tu alma",
      p1Sub3:
        "con el poder nutritivo del Sacha Inchi orgánico: el pequeño superalimento de la naturaleza con un gran corazón. Cada puñado te ofrece bondad pura y vegetal, al tiempo que contribuye a proteger el Amazonas y a elevar a los agricultores sostenibles.",
      p2: "Para nosotros, la clave es volver a las formas simples y naturales de cuidarnos, sin exigir más de lo que la Madre Tierra puede darnos. Porque aquello que te fortalece, también debe permitir que el planeta prospere. 💚 Creemos en la simplicidad: comida real, amor sincero y cero impacto negativo en la Madre Tierra. 💕",
      p3: "Juntos, podemos disfrutar de snacks felices y cultivar un futuro más brillante, una pequeña semilla a la vez. 🌍🌸",
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
  if (selectedLanguage === "es") {
    document.body.classList.add(selectedLanguage);
  } else {
    document.body.classList.remove("es");
  }
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

// function createOmegaChart(userLanguage) {
//   const canvasElement = document.getElementById("omegaChart");
//   if (!canvasElement) return;

//   const ctx = document.getElementById("omegaChart").getContext("2d");

//   // Labels for different languages
//   const chartLabels = {
//     title: userLanguage === "en" ? "Omega Fatty Acids Content (g per 100g)" : "Contenido de Ácidos Grasos Omega (g por 100g)",
//     omega3: userLanguage === "en" ? "Omega-3" : "Omega-3",
//     omega6: userLanguage === "en" ? "Omega-6" : "Omega-6",
//     omega9: userLanguage === "en" ? "Omega-9" : "Omega-9"
//   };

//   const foodLabels = {
//     sachaInchi: userLanguage === "en" ? "Sacha Inchi" : "Sacha Inchi",
//     flaxseeds: userLanguage === "en" ? "Flaxseeds" : "Semillas de Lino",
//     chiaSeeds: userLanguage === "en" ? "Chia Seeds" : "Semillas de Chía",
//     walnuts: userLanguage === "en" ? "Walnuts" : "Nueces",
//     canolaOil: userLanguage === "en" ? "Canola Oil" : "Aceite de Canola",
//     hempSeeds: userLanguage === "en" ? "Hemp Seeds" : "Semillas de Cáñamo",
//     mackerel: userLanguage === "en" ? "Mackerel" : "Caballa",
//     salmon: userLanguage === "en" ? "Salmon (wild)" : "Salmón (salvaje)",
//     sardines: userLanguage === "en" ? "Sardines" : "Sardinas",
//     soybeans: userLanguage === "en" ? "Soybeans" : "Soja",
//     oliveOil: userLanguage === "en" ? "Olive Oil" : "Aceite de Oliva",
//     macadamiaOil: userLanguage === "en" ? "Macadamia Nut Oil" : "Aceite de Macadamia",
//     tuna: userLanguage === "en" ? "Tuna" : "Atún",
//     avocados: userLanguage === "en" ? "Avocados" : "Aguacates",
//     eggs: userLanguage === "en" ? "Eggs (pasture-raised)" : "Huevos (pastoreo)",
//     beef: userLanguage === "en" ? "Grass-fed Beef" : "Carne de Res"
//   };

//   // Destroy existing chart if it exists
//   if (typeof omegaChart !== 'undefined' && omegaChart) {
//     omegaChart.destroy();
//   }

//   // Data arrays for each omega type
//   const omega3Data = [48, 22.8, 17.8, 9.1, 9.1, 8.7, 4.6, 2.6, 1.5, 1.4, 0.8, 0.2, 0.2, 0.1, 0.1, 0.05];
//   const omega6Data = [36, 5.9, 5.8, 38.1, 19, 27.5, 0.9, 0.5, 0.5, 9.9, 9.8, 1.3, 0.05, 1.7, 1.2, 0.2];
//   const omega9Data = [9, 6, 6, 8.9, 61, 8.5, 6, 7, 6, 1.5, 70, 59, 7, 6.7, 4, 4];

//   const data = {
//     labels: [
//       foodLabels.sachaInchi,
//       foodLabels.flaxseeds,
//       foodLabels.chiaSeeds,
//       foodLabels.walnuts,
//       foodLabels.canolaOil,
//       foodLabels.hempSeeds,
//       foodLabels.mackerel,
//       foodLabels.salmon,
//       foodLabels.sardines,
//       foodLabels.soybeans,
//       foodLabels.oliveOil,
//       foodLabels.macadamiaOil,
//       foodLabels.tuna,
//       foodLabels.avocados,
//       foodLabels.eggs,
//       foodLabels.beef
//     ],
//     datasets: [
//       {
//         label: chartLabels.omega3,
//         data: omega3Data,
//         backgroundColor: "#4CAF50", // Green for Omega-3
//         borderColor: "#388E3C",
//         borderWidth: 1,
//         borderRadius: 4,
//       },
//       {
//         label: chartLabels.omega6,
//         data: omega6Data,
//         backgroundColor: "#FF9800", // Orange for Omega-6
//         borderColor: "#F57C00",
//         borderWidth: 1,
//         borderRadius: 4,
//       },
//       {
//         label: chartLabels.omega9,
//         data: omega9Data,
//         backgroundColor: "#2196F3", // Blue for Omega-9
//         borderColor: "#1976D2",
//         borderWidth: 1,
//         borderRadius: 4,
//       }
//     ],
//   };

//   // Find the food with highest Omega-3 content for tooltip
//   const maxOmega3Value = Math.max(...omega3Data);
//   const maxOmega3Index = omega3Data.indexOf(maxOmega3Value);

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
//             font: {
//               size: 16,
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
//               const omegaType = tooltipItem.dataset.label;
//               return `${omegaType}: ${tooltipItem.raw}g`;
//             },
//           },
//         },
//       },
//       scales: {
//         x: {
//           stacked: false, // Set to true if you want stacked bars
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
//           title: {
//             display: true,
//             text: userLanguage === "en" ? "Grams per 100g" : "Gramos por 100g",
//             color: "#E0F7FA",
//             font: {
//               size: 14,
//               weight: 600,
//             }
//           }
//         },
//         y: {
//           stacked: false, // Set to true if you want stacked bars
//           ticks: {
//             color: "#E0F7FA",
//             font: {
//               size: 13,
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

//   // Create the chart
//   omegaChart = new Chart(ctx, config);

//   // Show tooltip for the highest Omega-3 source
//   omegaChart.render();
//   omegaChart.tooltip.setActiveElements(
//     [{ datasetIndex: 0, index: maxOmega3Index }],
//     { x: 0, y: 0 }
//   );
//   omegaChart.update();
// }

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

function createOmegaChart(userLanguage) {
  const canvasElement = document.getElementById("omegaChart");
  if (!canvasElement) return;

  const ctx = document.getElementById("omegaChart").getContext("2d");

  // Labels for different languages
  const chartLabels = {
    title:
      userLanguage === "en"
        ? "Omega Fatty Acids Content (g per 100g)"
        : "Contenido de Ácidos Grasos Omega (g por 100g)",
    omega3: userLanguage === "en" ? "Omega-3" : "Omega-3",
    omega6: userLanguage === "en" ? "Omega-6" : "Omega-6",
    omega9: userLanguage === "en" ? "Omega-9" : "Omega-9",
  };

  const foodLabels = {
    sachaInchi: userLanguage === "en" ? "Sacha Inchi" : "Sacha Inchi",
    flaxseeds: userLanguage === "en" ? "Flaxseeds" : "Semillas de Lino",
    chiaSeeds: userLanguage === "en" ? "Chia Seeds" : "Semillas de Chía",
    walnuts: userLanguage === "en" ? "Walnuts" : "Nueces",
    hempSeeds: userLanguage === "en" ? "Hemp Seeds" : "Semillas de Cáñamo",
    soybeans: userLanguage === "en" ? "Soybeans" : "Soja",
    oliveOil: userLanguage === "en" ? "Olive Oil" : "Aceite de Oliva",
    avocados: userLanguage === "en" ? "Avocados" : "Aguacates",
  };

  // Destroy existing chart if it exists
  if (typeof omegaChart !== "undefined" && omegaChart) {
    omegaChart.destroy();
  }

  // Filtered data arrays for each omega type (only selected products)
  // Order: Sacha Inchi, Flaxseeds, Chia Seeds, Walnuts, Hemp Seeds, Soybeans, Olive Oil, Avocados, Grass-fed Beef
  const omega3Data = [48, 22.8, 17.8, 9.1, 8.7, 1.4, 0.8, 0.1];
  const omega6Data = [36, 5.9, 5.8, 38.1, 27.5, 9.9, 9.8, 1.7];
  // const omega9Data = [9, 6, 6, 8.9, 8.5, 1.5, 70, 6.7, 4];

  const data = {
    labels: [
      foodLabels.sachaInchi,
      foodLabels.flaxseeds,
      foodLabels.chiaSeeds,
      foodLabels.walnuts,
      foodLabels.hempSeeds,
      foodLabels.soybeans,
      foodLabels.oliveOil,
      foodLabels.avocados,
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
        backgroundColor: "#d6cc99", // Orange for Omega-6
        borderColor: "#d6cc99",
        borderWidth: 1,
        borderRadius: 4,
      },
      // {
      //   label: chartLabels.omega9,
      //   data: omega9Data,
      //   backgroundColor: "#2196F3", // Blue for Omega-9
      //   borderColor: "#1976D2",
      //   borderWidth: 1,
      //   borderRadius: 4,
      // },
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
            },
          },
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

  // Show tooltip for the highest Omega-3 source (Sacha Inchi)
  omegaChart.render();
  omegaChart.tooltip.setActiveElements(
    [{ datasetIndex: 0, index: maxOmega3Index }],
    { x: 0, y: 0 }
  );
  omegaChart.update();
}

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

const toggleBtn = document.getElementById("toggleLang");
const navLinks = document.querySelectorAll("#nav-links li");
const html = document.documentElement;

const translations = {
  ar: {
    about: "اعرف",
    post: "أعلن",
    search: "ابحث",
    langBtn: "English"
  },
  en: {
    about: "About",
    post: "Post",
    search: "Search",
    langBtn: "عربي"
  }
};

let currentLang = "ar";

toggleBtn.addEventListener("click", () => {
  currentLang = currentLang === "ar" ? "en" : "ar";
  html.lang = currentLang;
  html.dir = currentLang === "ar" ? "rtl" : "ltr";
  document.body.style.fontFamily = currentLang === "ar" ? "Cairo" : "Open Sans";

  navLinks.forEach((li) => {
    const key = li.dataset.key;
    li.querySelector("a").textContent = translations[currentLang][key];
  });

  toggleBtn.textContent = translations[currentLang].langBtn;
});

const cityFilter = document.getElementById("filter-city");
const priceFilter = document.getElementById("filter-price");
const properties = document.querySelectorAll(".property-card");

function filterProperties() {
  const city = cityFilter.value;
  const price = parseInt(priceFilter.value) || Infinity;

  properties.forEach((property) => {
    const propCity = property.dataset.city;
    const propPrice = parseInt(property.dataset.price);
    const matchCity = city === "" || propCity === city;
    const matchPrice = propPrice <= price;

    if (matchCity && matchPrice) {
      property.style.display = "block";
    } else {
      property.style.display = "none";
    }
  });
}

cityFilter.addEventListener("change", filterProperties);
priceFilter.addEventListener("change", filterProperties);



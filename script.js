document.querySelectorAll(".planets a").forEach(link => {
  link.addEventListener("click", function () {
    const selected = this.getAttribute("data-planet");
    if (planetsData[selected]) {
      currentPlanet = selected;
      currentTab = "overview";
      updateUI();
    }
  });
});

const planetsData = {
  mercury: {
    name: "MERCURY",
    image: "images/murcury.jpg",
    overview: "Mercury is the closest planet to the Sun and the smallest planet in our solar system.",
    structure: "Mercury has a large metallic core and a rocky mantle.",
    surface: "The surface is heavily cratered and similar to Earth's Moon.",
    source: "https://en.wikipedia.org/wiki/Mercury_(planet)",
    rotation: "58.6 DAYS",
    revolution: "88 DAYS",
    radius: "2,439.7 KM",
    temperature: "167°C"
  },
  venus: {
    name: "VENUS",
    image: "images/venus.jpg",
    overview: "Venus is the second planet from the Sun and has a dense, toxic atmosphere.",
    structure: "Venus has a central iron core and a rocky mantle.",
    surface: "Its surface is hot and covered with volcanic plains and mountains.",
    source: "https://en.wikipedia.org/wiki/Venus",
    rotation: "243 DAYS",
    revolution: "225 DAYS",
    radius: "6,051.8 KM",
    temperature: "464°C"
  },
  earth: {
    name: "EARTH",
    image: "images/earth.jpg",
    overview: "Earth is the third planet from the Sun and the only known planet to support life.",
    structure: "Earth has a solid inner core, liquid outer core, mantle, and crust.",
    surface: "70% of Earth’s surface is covered by water, with landmasses and varied terrain.",
    source: "https://en.wikipedia.org/wiki/Earth",
    rotation: "0.99 DAYS",
    revolution: "365.26 DAYS",
    radius: "6,371 KM",
    temperature: "16°C"
  },
  mars: {
    name: "MARS",
    image: "images/mars.jpg",
    overview: "Mars is the fourth planet and is known as the Red Planet due to iron oxide on its surface.",
    structure: "Mars has a core made of iron, nickel, and sulfur, surrounded by a rocky mantle.",
    surface: "Mars features valleys, deserts, polar ice caps, and the largest volcano in the solar system.",
    source: "https://en.wikipedia.org/wiki/Mars",
    rotation: "1.03 DAYS",
    revolution: "687 DAYS",
    radius: "3,390 KM",
    temperature: "-63°C"
  },
  jupiter: {
    name: "JUPITER",
    image: "images/jupiter.jpg",
    overview: "Jupiter is the largest planet in our solar system and is a gas giant.",
    structure: "It likely has a dense core surrounded by a layer of metallic hydrogen.",
    surface: "Jupiter has no solid surface and is covered in thick clouds and storms.",
    source: "https://en.wikipedia.org/wiki/Jupiter",
    rotation: "0.41 DAYS",
    revolution: "4,333 DAYS",
    radius: "69,911 KM",
    temperature: "-108°C"
  },
  saturn: {
    name: "SATURN",
    image: "images/saturn.jpg",
    overview: "Saturn is famous for its prominent ring system and is a gas giant.",
    structure: "Saturn has a small core surrounded by hydrogen and helium.",
    surface: "There is no solid surface; it has thick atmospheric layers and rings.",
    source: "https://en.wikipedia.org/wiki/Saturn",
    rotation: "0.45 DAYS",
    revolution: "10,756 DAYS",
    radius: "58,232 KM",
    temperature: "-139°C"
  },
  uranus: {
    name: "URANUS",
    image: "images/uranus.avif",
    overview: "Uranus is an ice giant with a pale blue color due to methane in its atmosphere.",
    structure: "It has a small rocky core and icy mantle of water, ammonia, and methane.",
    surface: "No solid surface; it has an icy cloud layer and faint rings.",
    source: "https://en.wikipedia.org/wiki/Uranus",
    rotation: "0.72 DAYS",
    revolution: "30,687 DAYS",
    radius: "25,362 KM",
    temperature: "-195°C"
  },
  neptune: {
    name: "NEPTUNE",
    image: "images/neptune.png",
    overview: "Neptune is the farthest planet from the Sun and has intense winds and storms.",
    structure: "Neptune has a core of rock and ice, surrounded by a thick fluid mantle.",
    surface: "The surface is a cold, dark atmosphere of hydrogen, helium, and methane.",
    source: "https://en.wikipedia.org/wiki/Neptune",
    rotation: "0.67 DAYS",
    revolution: "60,190 DAYS",
    radius: "24,622 KM",
    temperature: "-201°C"
  }
};

let currentPlanet = "earth";
let currentTab = "overview";

function updateUI() {
  const planet = planetsData[currentPlanet];
  document.getElementById("planet-name").innerText = planet.name;
  document.getElementById("planet-img").src = planet.image;
  document.getElementById("planet-desc").innerText = planet[currentTab];
  document.getElementById("source-link").href = planet.source;
  document.getElementById("rotation").innerText = planet.rotation;
  document.getElementById("revolution").innerText = planet.revolution;
  document.getElementById("radius").innerText = planet.radius;
  document.getElementById("temperature").innerText = planet.temperature;
}

document.querySelectorAll(".planets a").forEach(link => {
  link.addEventListener("click", function () {
    const selected = this.getAttribute("data-planet");
    if (planetsData[selected]) {
      currentPlanet = selected;
      currentTab = "overview";
      updateUI();
    }
  });
});

function changeTab(tab) {
  currentTab = tab;
  updateUI();
}

window.onload = updateUI;

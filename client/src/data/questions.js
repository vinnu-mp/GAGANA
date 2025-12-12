const QUESTION_BANK = [
  // 1
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },

  // 2
  {
    question: "What is the name of our galaxy?",
    options: ["Andromeda", "Milky Way", "Whirlpool", "Sombrero"],
    answer: "Milky Way",
  },

  // 3
  {
    question: "Who was the first person to walk on the Moon?",
    options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Alan Shepard"],
    answer: "Neil Armstrong",
  },

  // 4
  {
    question: "Which planet has the most moons?",
    options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    answer: "Saturn",
  },

  // 5
  {
    question: "What is the closest star to Earth?",
    options: ["Sirius", "Alpha Centauri", "The Sun", "Proxima Centauri"],
    answer: "The Sun",
  },

  // 6
  {
    question: "Which planet is known for its beautiful rings?",
    options: ["Uranus", "Neptune", "Saturn", "Jupiter"],
    answer: "Saturn",
  },

  // 7
  {
    question: "Which is the hottest planet in our solar system?",
    options: ["Mercury", "Venus", "Earth", "Mars"],
    answer: "Venus",
  },

  // 8
  {
    question: "What galaxy is closest to the Milky Way?",
    options: ["Sombrero Galaxy", "Andromeda Galaxy", "Cartwheel Galaxy", "Triangulum Galaxy"],
    answer: "Andromeda Galaxy",
  },

  // 9
  {
    question: "Which planet has a Great Red Spot?",
    options: ["Mars", "Jupiter", "Neptune", "Saturn"],
    answer: "Jupiter",
  },

  // 10
  {
    question: "What is the name of our natural satellite?",
    options: ["Luna", "Moon", "Selene", "Titan"],
    answer: "Moon",
  },

  // 11
  {
    question: "Which space agency landed humans on the Moon?",
    options: ["ISRO", "NASA", "ESA", "SpaceX"],
    answer: "NASA",
  },

  // 12
  {
    question: "What is the largest planet in our solar system?",
    options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
    answer: "Jupiter",
  },

  // 13
  {
    question: "What is the name of the force that keeps planets in orbit?",
    options: ["Magnetism", "Friction", "Gravity", "Inertia"],
    answer: "Gravity",
  },

  // 14
  {
    question: "Which planet is known as the Morning Star?",
    options: ["Mercury", "Venus", "Mars", "Jupiter"],
    answer: "Venus",
  },

  // 15
  {
    question: "What phenomenon causes seasons on Earth?",
    options: ["Earth’s tilt", "Earth’s rotation", "Moon’s gravity", "Sun’s movement"],
    answer: "Earth’s tilt",
  },

  // 16
  {
    question: "Which was the first satellite sent into space?",
    options: ["Apollo 11", "Sputnik 1", "Explorer 1", "Viking 1"],
    answer: "Sputnik 1",
  },

  // 17
  {
    question: "Which planet rotates on its side?",
    options: ["Neptune", "Uranus", "Saturn", "Jupiter"],
    answer: "Uranus",
  },

  // 18
  {
    question: "What is the name of the first Indian satellite?",
    options: ["RISAT", "Aryabhata", "Bhaskara", "INSAT"],
    answer: "Aryabhata",
  },

  // 19
  {
    question: "Which ISRO mission reached Mars?",
    options: ["Chandrayaan-1", "Mangalyaan", "Gaganyaan", "Aditya-L1"],
    answer: "Mangalyaan",
  },

  // 20
  {
    question: "Which NASA rover landed on Mars in 2021?",
    options: ["Curiosity", "Perseverance", "Spirit", "Opportunity"],
    answer: "Perseverance",
  },

  // 21
  {
    question: "What is the speed of light?",
    options: ["300,000 km/s", "150,000 km/s", "100,000 km/s", "1,000 km/s"],
    answer: "300,000 km/s",
  },

  // 22
  {
    question: "Which telescope is famous for deep-space images?",
    options: ["Spitzer", "Hubble", "Kepler", "James Webb"],
    answer: "Hubble",
  },

  // 23
  {
    question: "Which mission landed India near the lunar south pole?",
    options: ["Chandrayaan-2", "Chandrayaan-3", "Mangalyaan", "Gaganyaan"],
    answer: "Chandrayaan-3",
  },

  // 24
  {
    question: "What is the name of the first woman in space?",
    options: ["Kalpana Chawla", "Valentina Tereshkova", "Sunita Williams", "Peggy Whitson"],
    answer: "Valentina Tereshkova",
  },

  // 25
  {
    question: "Which object marks the boundary of our solar system?",
    options: ["Oort Cloud", "Kuiper Belt", "Alpha Centauri", "Asteroid Belt"],
    answer: "Oort Cloud",
  },

  // 26
  {
    question: "Which planet is called Earth’s Twin?",
    options: ["Mars", "Venus", "Mercury", "Neptune"],
    answer: "Venus",
  },

  // 27
  {
    question: "Which galaxy will collide with the Milky Way?",
    options: ["Triangulum", "Andromeda", "Whirlpool", "Sombrero"],
    answer: "Andromeda",
  },

  // 28
  {
    question: "What protects Earth from harmful solar radiation?",
    options: ["Stratosphere", "Ozone Layer", "Magnetosphere", "Atmosphere"],
    answer: "Magnetosphere",
  },

  // 29
  {
    question: "What is the term for a star that suddenly brightens?",
    options: ["Nebula", "Supernova", "Quasar", "Pulsar"],
    answer: "Supernova",
  },

  // 30
  {
    question: "Which planet has the fastest rotation?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    answer: "Jupiter",
  },

  // 31
  {
    question: "Which star is known as the North Star?",
    options: ["Polaris", "Sirius", "Rigel", "Betelgeuse"],
    answer: "Polaris",
  },

  // 32
  {
    question: "What is the name of our Sun’s outer atmosphere?",
    options: ["Corona", "Photosphere", "Chromosphere", "Magnetosphere"],
    answer: "Corona",
  },

  // 33
  {
    question: "Which planet has methane storms?",
    options: ["Jupiter", "Neptune", "Mars", "Earth"],
    answer: "Neptune",
  },

  // 34
  {
    question: "What is the name of the brightest star in the sky?",
    options: ["Sirius", "Polaris", "Arcturus", "Procyon"],
    answer: "Sirius",
  },

  // 35
  {
    question: "What shape is the Milky Way galaxy?",
    options: ["Elliptical", "Spiral", "Irregular", "Ring"],
    answer: "Spiral",
  },

  // 36
  {
    question: "Which mission discovered water on the Moon?",
    options: ["Chandrayaan-1", "Chandrayaan-2", "Apollo 11", "Luna 2"],
    answer: "Chandrayaan-1",
  },

  // 37
  {
    question: "What do we call a rock that enters Earth’s atmosphere?",
    options: ["Asteroid", "Meteoroid", "Meteor", "Comet"],
    answer: "Meteor",
  },

  // 38
  {
    question: "What planet is known as the Gas Giant?",
    options: ["Mars", "Saturn", "Jupiter", "Neptune"],
    answer: "Jupiter",
  },

  // 39
  {
    question: "Which country launched the first human into space?",
    options: ["USA", "Russia (USSR)", "China", "India"],
    answer: "Russia (USSR)",
  },

  // 40
  {
    question: "What is the name of the first human in space?",
    options: ["John Glenn", "Neil Armstrong", "Yuri Gagarin", "Alan Shepard"],
    answer: "Yuri Gagarin",
  },

  // 41
  {
    question: "Which ISRO rocket is known as the 'Workhorse'?",
    options: ["PSLV", "GSLV Mk III", "SSLV", "ASLV"],
    answer: "PSLV",
  },

  // 42
  {
    question: "What type of galaxy is Andromeda?",
    options: ["Irregular", "Spiral", "Elliptical", "Ring"],
    answer: "Spiral",
  },

  // 43
  {
    question: "What is a light-year?",
    options: ["Time", "Distance", "Speed", "Brightness"],
    answer: "Distance",
  },

  // 44
  {
    question: "Which planet has extreme winds up to 2000 km/h?",
    options: ["Jupiter", "Neptune", "Saturn", "Uranus"],
    answer: "Neptune",
  },

  // 45
  {
    question: "What is the nearest galaxy to the Milky Way?",
    options: ["Whirlpool", "Sombrero", "Andromeda", "Triangulum"],
    answer: "Andromeda",
  },

  // 46
  {
    question: "Which mission is India planning for human spaceflight?",
    options: ["Gaganyaan", "Aditya-L1", "Mangalyaan 2", "Shukrayaan"],
    answer: "Gaganyaan",
  },

  // 47
  {
    question: "What is the largest volcano in the solar system?",
    options: ["Mauna Kea", "Olympus Mons", "Mount Everest", "Erebus"],
    answer: "Olympus Mons",
  },

  // 48
  {
    question: "What is the name of frozen rocks orbiting the Sun?",
    options: ["Comets", "Asteroids", "Kuiper Objects", "Meteoroids"],
    answer: "Comets",
  },

  // 49
  {
    question: "What gives stars their energy?",
    options: ["Fusion", "Fission", "Combustion", "Gravity"],
    answer: "Fusion",
  },

  // 50
  {
    question: "What protects Earth from solar storms?",
    options: ["Atmosphere", "Magnetosphere", "Clouds", "Ozone Layer"],
    answer: "Magnetosphere",
  }
];

export default QUESTION_BANK;

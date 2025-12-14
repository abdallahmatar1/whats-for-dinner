let recipes = [
  {
    title: "French Onion Soup",
    img: "images/image1.avif",
    rating: 4.4,
    reviews: 267,
    prepTime: "15 min",
    cookTime: "60 min",
    servings: 4,
    level: "Intermediate",
    cuisine: "Mediterranean",
    descriptions: "fast food easy",
    timeWarning: true,

    ingredients: [
      "4 large onions, thinly sliced",
      "1/2 cup white wine",
      "1 liter beef broth",
      "4 tablespoons butter",
    ],
    instruction: [
      "Melt butter in a large pot and caramelize onions for 40 minutes.",
      "Add white wine and deglaze the pot.",
      "Add beef broth, bay leaves, and thyme. Simmer 20 minutes.",
      "Toast baguette slices.",
      "Top soup with bread and cheese, then broil 3-5 minutes.",
    ],
    nutrition: [
      {
        icon: "fa-fire",
        name: "Calories",
        number: " 320 kcal",
      },
      {
        icon: "fa-dumbbell",
        name: "Protein",
        number: " 32 kg",
      },
      {
        icon: "fa-droplet",
        name: "carbs",
        number: " 48g",
      },
      {
        icon: "fa-cube",
        name: "fat",
        number: " 12g",
      },
    ],
    tips: [
      "Rinse quinoa well to remove bitter coating",
      "Let quinoa cool before adding fresh ingredients",
      "Make extra tahini dressing - it keeps well in the fridge",
      "Add grilled chicken or chickpeas for extra protein",
    ],
  },

  {
    title: "Chicken Alfredo Pasta",
    rating: 4.8,
    reviews: 421,
    img: "images/image2.avif",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 3,
    level: "Easy",
    cuisine: "Italian",
    timeWarning: true,

    ingredients: [
      "250g fettuccine pasta",
      "2 chicken breasts, sliced",
      "1 cup heavy cream",
      "1 cup grated parmesan",
      "2 tablespoons butter",
    ],
    instruction: [
      "Cook pasta until al dente.",
      "Sauté chicken until golden.",
      "Melt butter, add cream and parmesan to form sauce.",
      "Mix pasta with sauce and chicken.",
      "Serve hot with parsley.",
    ],
    nutrition: [
      {
        icon: "fa-fire",
        name: "Calories",
        number: " 500 kcal",
      },
      {
        icon: "fa-dumbbell",
        name: "Protein",
        number: " 80 kg",
      },
      {
        icon: "fa-droplet",
        name: "carbs",
        number: " 60g",
      },
      {
        icon: "fa-cube",
        name: "fat",
        number: " 855g",
      },
    ],

    tips: [
      "Ensure the sauce is slightly runny to hydrate the noodles.",
      "Use fresh basil in the layers for maximum flavor.",
      "For extra richness, add a layer of béchamel sauce.",
    ],
  },

  {
    title: "Beef Tacos",
    rating: 4.2,
    reviews: 310,
    img: "images/image3.avif",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    level: "Easy",
    cuisine: "Mexican",
    timeWarning: false,

    ingredients: [
      "500g ground beef",
      "1 packet taco seasoning",
      "8 small tortillas",
      "1 cup shredded lettuce",
      "1 cup cheddar cheese",
    ],
    instruction: [
      "Brown beef in a skillet.",
      "Add taco seasoning and water; let simmer.",
      "Warm tortillas.",
      "Fill tortillas with beef, lettuce, and cheese.",
      "Serve immediately.",
    ],
    nutrition: [
      {
        icon: "fa-fire",
        name: "Calories",
        number: " 700 kcal",
      },
      {
        icon: "fa-dumbbell",
        name: "Protein",
        number: " 400 kg",
      },
      {
        icon: "fa-droplet",
        name: "carbs",
        number: " 20g",
      },
      {
        icon: "fa-cube",
        name: "fat",
        number: " 30g",
      },
    ],

    tips: [
      "Use creamy peanut butter for a smoother sauce.",
      "Adjust chili garlic sauce for desired heat level.",
      "Add firm tofu for more protein.",
    ],
  },

  {
    title: "Vegetable Stir Fry",
    rating: 4.6,
    reviews: 189,
    img: "images/image4.avif",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 2,
    level: "Easy",
    cuisine: "Asian",
    timeWarning: false,

    ingredients: [
      "1 bell pepper, sliced",
      "1 carrot, sliced",
      "1 broccoli head, chopped",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil",
    ],
    instruction: [
      "Heat oil in a wok.",
      "Add garlic then vegetables; stir fry 5 minutes.",
      "Add soy sauce and sesame oil.",
      "Cook another 2 minutes.",
      "Serve over rice or noodles.",
    ],
    nutrition: [
      {
        icon: "fa-fire",
        name: "Calories",
        number: " 660 kcal",
      },
      {
        icon: "fa-dumbbell",
        name: "Protein",
        number: " 50 kg",
      },
      {
        icon: "fa-droplet",
        name: "carbs",
        number: " 78g",
      },
      {
        icon: "fa-cube",
        name: "fat",
        number: " 56g",
      },
    ],
    tips: [
      "Do not overwork the meat when forming the patties to keep them tender.",
      "Make a small thumbprint in the center of the patty to prevent it from bulging while cooking.",
      "Toast the buns for a better texture.",
    ],
  },

  {
    title: "Margherita Pizza",
    rating: 4.9,
    reviews: 502,
    img: "images/image5.avif",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: 2,
    level: "Intermediate",
    cuisine: "Italian",
    timeWarning: false,

    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella",
      "Fresh basil leaves",
      "1 tablespoon olive oil",
    ],
    instruction: [
      "Spread pizza dough on a tray.",
      "Add tomato sauce evenly.",
      "Place mozzarella slices and basil.",
      "Bake at high heat for 12–15 minutes.",
      "Drizzle olive oil before serving.",
    ],
    nutrition: [
      {
        icon: "fa-fire",
        name: "Calories",
        number: " 120 kcal",
      },
      {
        icon: "fa-dumbbell",
        name: "Protein",
        number: " 302 kg",
      },
      {
        icon: "fa-droplet",
        name: "carbs",
        number: " 488g",
      },
      {
        icon: "fa-cube",
        name: "fat",
        number: " 122g",
      },
    ],
    tips: [
      "Marinating the fish for 15 minutes enhances flavor.",
      "Use a non-stick pan to warm the tortillas without oil.",
      "A squeeze of fresh lime juice on the finished taco adds brightness.",
    ],
  },
];

let rating = document.getElementById("rating");
let prepTime = document.getElementById("prepTime");
let cookTime = document.getElementById("cookTime");
let serving = document.getElementById("serving");
let diffeculty = document.getElementById("diffeculty");
let nationality = document.getElementById("nationality");
let tittle = document.getElementById("tittle");
let description = document.getElementById("description");
let image = document.getElementById("image");
let ingredients = document.getElementById("ulingredients");
let instruction = document.getElementById("ulinstruction");
let nutrition = document.getElementById("nutrition");
let tips = document.getElementById("tips");
let extendAlert = document.getElementById("alert");
let random, test;

function displayData() {
  image.src = recipes[random].img;
  rating.innerHTML = `${recipes[random].rating} (${recipes[random].reviews} reviews)`;
  prepTime.innerHTML = `   ${recipes[random].prepTime}`;
  cookTime.innerHTML = `   ${recipes[random].cookTime}`;
  serving.innerHTML = `   ${recipes[random].servings}`;
  diffeculty.innerHTML = `${recipes[random].level}`;
  nationality.innerHTML = `${recipes[random].cuisine}`;
  tittle.innerHTML = `${recipes[random].title}`;
  description.innerHTML = `${recipes[random].descriptions}`;
  displayIngredients();
  displayInstruction();
  displayNutrition();
  displayAlert()
  displayTips();
}

function displayIngredients() {
  let cartona = ``;
  for (let i = 0; i < recipes[random].ingredients.length; i++) {
    cartona += `
      <li class="d-flex align-items-center gap-2">
                    <div
                      style="width: 30px; height: 30px"
                      class="d-flex align-items-center justify-content-center text-white bg-danger rounded-circle"
                    >
                      ${i + 1}
                    </div>
                    <span>${recipes[random].ingredients[i]}</span>
                  </li>`;
  }
  ingredients.innerHTML = cartona;
}

function displayInstruction() {
  let cartona = "";
  for (let i = 0; i < recipes[random].instruction.length; i++) {
    cartona += ` 
      <li class="d-flex align-items-center g-3 gap-2">
                    <div style="width: 30px; height: 30px" class="d-flex align-itens-center justify-content-center bg-danger text-white rounded-2 ">${
                      i + 1
                    }</div>
                    <span>${recipes[random].instruction[i]}</span>
                  </li>`;
  }
  instruction.innerHTML = cartona;
}

function displayNutrition() {
  let cartona = "";
  for (let i = 0; i < recipes[random].nutrition.length; i++) {
    cartona += `         <div class="col-6">
                    <div class="d-flex justify-content-between gap-2">
                      <div class="d-flex gap-2">
                        <span
                          ><i
                            style="
                              width: 30px;
                              height: 30px;
                              background-color: #ffedd4;
                              color: red;
                            "
                            class="fa-solid ${recipes[random].nutrition[i].icon} fa-lg d-flex justify-content-center align-items-center rounded-1"
                          ></i
                        ></span>
                        <p class="m-random">${recipes[random].nutrition[i].name}</p>
                      </div>
                      <span class="fw-bold">${recipes[random].nutrition[i].number} </span>
                    </div>
                  </div>`;
  }
  nutrition.innerHTML = cartona;
}

function displayTips() {
  let cartona = ``;
  for (let i = 0; i < recipes[random].tips.length; i++) {
    cartona += `
                  <div
                    style="
                      width: 500px;
                      height: 45px;
                      background-color: #fffbeb;
                      border-left: 4px solid #ffba03;
                    "
                    class="shadows rounded-3 d-flex align-items-center  gap-1 m-3 p-random "
                  >
                    <div class="">
                      <i
                        style="color: #e17100"
                        class="fa-solid fa-circle-check"
                      ></i>
                      <span>${recipes[random].tips[i]} </span>
                    </div>
                  </div>
`;
  }
  tips.innerHTML = cartona;
}

function displayAlert() {
  if (recipes[random].timeWarning) {
    extendAlert.classList.replace('d-none','d-block')

  }else{
        extendAlert.classList.replace('d-block','d-none')

  }
}
function randomMath() {
  do {
    random = Math.floor(Math.random() * recipes.length);
  } while (test == random);
  index = random;
  displayData();
}

randomMath();

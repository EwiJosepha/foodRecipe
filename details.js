// const apidescription = "https://www.themealdb.com/api/json/v1/1/search.php?s="

import {
  getLocalStorage,
  getSessionStorage,
  saveToLocal,
  toggleFavorite,
} from "./utils.js";

import { formexport } from "./main.js";

const arra_ingrd = [];
const measuremt = [] // array to hold all ingredients
let resultt = null;

//update name
const updatemealname = document.querySelector(".strmeal");
function nameupdate(actual) {
  updatemealname.innerHTML = `<h1 id="berry">${actual}</h1>`;
  console.log(actual);
}

//related category
const divcard = document.querySelector(".card");
const div = document.createElement('div')

async function relatedcategory(actualll) {
  const catapi = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${actualll}`;
  const res = await fetch(catapi);
  const dataa = await res.json();
  console.log(dataa);
  const dat = dataa.meals.slice(0, 4);
  console.log(dat);

  dat.forEach((item) => {
    divcard.innerHTML += `
    <div class="divcard">
    <img src="${item.strMealThumb}">

    <div class="text">
          <div class="sta">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
    <p id="caramel">${item.strMeal}</p>

  </div>`;
    console.log(dat);
  });
}

//returning form from index html
const formm = document.querySelector('.formm')
formm.innerHTML = 
   `<h2 id="deliciousness">Deliciousness to your inbox</h2>
   <p id="enjoy">Enjoy weekly handpicked and recipes Recommendation</p>
  <input type="text" id="inputfooter" placeholder="Email">
  <button id="btnnfooter">Join</button>
  </div>
  <div class="divv">
  <span id="span">By joining our newsletter you aggree to terms and conditions</span>
  
  `
//play video

async function disvideo(actualvid) {

  const backgr = document.querySelector(".backgr");

  const splitactualvid = actualvid.split("v=");
  console.log(splitactualvid);
  const indexofsplitted = splitactualvid[1];
  console.log(indexofsplitted);

  console.log(actualvid);

  backgr.innerHTML = ` <iframe width="100%" height="480" src="https://www.youtube.com/embed/${indexofsplitted}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen id="vid"></iframe> `;
}

//display ingredients
const displayIngredients = () => {
  const displayIngr = document.getElementById("display-ingredients");
  arra_ingrd.forEach((ingr) => {
    if (ingr === null) {
      return;
    }
    displayIngr.innerHTML += `<li>${ingr}</li>`;
  });
};

let mealId;

async function description() {

  mealId = getSessionStorage("mealId");

  const desc_url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  const res = await fetch(desc_url);
  const data1 = await res.json();
  const current_meal = data1.meals[0];

  console.log({ current_meal });

  disvideo(current_meal.strYoutube);
  nameupdate(current_meal.strMeal);
  relatedcategory(current_meal.strCategory);
  

  const display = document.getElementById("instrucc");
  for (let key of Object.keys(current_meal)) {
    if (key.slice(0, 13) === "strIngredient" && current_meal[key] !== "") {
      arra_ingrd.push(current_meal[key]);
    }
  }

  console.log("arar", arra_ingrd);
  display.innerHTML += `
   <p id="forinstr">${current_meal.strInstructions}</p>
  `;

  displayIngredients();
}

description();

async function measuress() {

  mealId = getSessionStorage("mealId");

  const desc_url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  const res = await fetch(desc_url);
  const data1 = await res.json();
  const current_meal = data1.meals[0];

  console.log({ current_meal });

  for (let key of Object.keys(current_meal)) {
    if (key.slice(0, 10) === "strMeasure" && current_meal[key].trim() !== "") {
      measuremt.push(current_meal[key]);
    }

  }

  displaymeasures ()

}

measuress()

function displaymeasures () {
  const measurements = document.querySelector(".measurement")
  console.log(measuremt);
  measuremt?.forEach((measure) => {
    if (measure === null) {
      return;
    }
    measurements.innerHTML += `<p id="measurr">${measure}</p>`;
  })
}




const arrrelated = [];
async function related() {
  mealId = getSessionStorage("mealId");
  const relatedApi = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  const relatedres = await fetch(relatedApi);
  const relatedData = await relatedres.json();
  resultt = relatedData.meals
  console.log(resultt);
  resultt.forEach((rel) => {
    arrrelated.push(rel)
    const card = document.getElementById("cardd");

  });
 
}
related();
mealId = getSessionStorage("mealId");

const relatedApi = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

const glaa = document.getElementById("glaa");

const favor = document.getElementById("favor");
const atagg = document.createElement("a");


glaa.addEventListener("click", () => {
  const [current] = resultt;

  console.log({ current });

  toggleFavorite(current);
});

async function favoritz() {
  mealId = getSessionStorage("mealId");

  const relatedApi = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  const relatedres = await fetch(relatedApi);
  const relatedData = await relatedres.json();
  const resultt = relatedData.meals
  console.log(resultt);

  resultt.forEach((rel) => {
    arrrelated.push(rel)
    const card = document.getElementById("cardd");
    card.innerHTML += `<div class="divcard">
    <img src="${rel.strMealThumb}">
  </div>`;
  });
}

favoritz()

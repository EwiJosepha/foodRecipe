// const apidescription = "https://www.themealdb.com/api/json/v1/1/search.php?s="

import { getLocalStorage, getSessionStorage, saveToLocal, toggleFavorite } from "./utils.js";

const arra_ingrd = []; // array to hold all ingredients
let resultt = null;

//update name
const updatemealname = document.querySelector('.strmeal')
function nameupdate (actual) {
  updatemealname.innerHTML=
  `<h1 id="berry">${actual}</h1>`
  console.log(actual);
}

//related category
const divcard = document.querySelector(".divcard")

 async function relatedcategory() {
  const joshuaa = "ewo"
  console.log(joshuaa);
  const catapi =  "https://www.themealdb.com/api/json/v1/1/categories.php"
  const res = await fetch(catapi)
  const dataa= await res.json()
  console.log(dataa);

  divcard.innerHTML 
 
}

relatedcategory()



//play video

async function disvideo(actualvid) {
  //   const strvideoapi = "https://www.themealdb.com/api/json/v1/1/search.php?s="
  //   const apifetchh = await fetch(strvideoapi)
  //   const result = await apifetchh.json()
  //   const videoomeals  = result.meals
  //   console.log({videoomeals})
  //   let actualvid = videoomeals[7].strYoutube
  //   // console.log(Object.keys(actualvid));

  // // for(const key of videoomeals[key]){
  // //   console.log(key);
  // // }

  const backgr = document.querySelector(".backgr")

  const splitactualvid = actualvid.split('v=')
  console.log(splitactualvid);
  const indexofsplitted = splitactualvid[1]
  console.log(indexofsplitted);

  console.log(actualvid);

  backgr.innerHTML = ` <iframe width="100%" height="480" src="https://www.youtube.com/embed/${indexofsplitted}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> `;
}

const displayIngredients = () => {
  const displayIngr = document.getElementById("display-ingredients");
  arra_ingrd.forEach((ingr) => {
    if (ingr === null) {
      return
    }
    displayIngr.innerHTML += `<li>${ingr}</li>`
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
  nameupdate(current_meal.strMeal)
  // relatedcategory(current_meal.strCategory)

  const display = document.getElementById("instrucc");

  // const array_keys = Object.keys(dat);

  // const array_ingrd_keys = array_keys.filter(key => {
  //   const querry =  key.slice(0, 13);

  //   return querry === "strIngredient" && dat[key] !== "";
  // });

  for (let key of Object.keys(current_meal)) {
    if (key.slice(0, 13) === "strIngredient" && current_meal[key] !== "") {
      arra_ingrd.push(current_meal[key]);
    }
  }

  console.log("arar", arra_ingrd);
  display.innerHTML += `<div class="instruc">
    
    <p><span id="orange">1</span>${current_meal.strInstructions}</p>
   
   
    </div>`

  displayIngredients();
}

description();

const arrrelated = [];
// async function related() {
  // const strcategory = sessionStorage.getItem("strcategory");
  mealId = getSessionStorage("mealId");

  const relatedApi = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

//   const relatedres = await fetch(relatedApi);
//   const relatedData = await relatedres.json();
//   resultt = relatedData.meals
//   console.log(resultt);

//   resultt.forEach((rel) => {
//     arrrelated.push(rel)
//     const card = document.getElementById("cardd");
//     card.innerHTML += `<div class="divcard">
//     <img src="${rel.strMealThumb}">
//   </div>`;
//   });
//   // const currentRelated = relatedData.meals
//   // console.log(currentRelated);
// }

// related();

const glaa = document.getElementById("glaa");
const favor = document.getElementById("favor");
const atagg = document.createElement('a')


glaa.addEventListener('click', () => {
  const [current] = resultt;

  console.log({ current });

  toggleFavorite(current);

  //   favor.innerHTML += `<a href="/index.html" target="_blank"><i class="fa-solid fa-bookmark" id="glaa"></i>
  // </a>`

  console.log('helloyjufdx');
})

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
// atagg.href="/index.html".target="_blank"
// console.log(atagg);
// glaa.append(atagg)
// console.log('josf');
// atagg.appendChild(glaa)
// favor.append('atagg')
// console.log(atagg);

//   const ancor = document.createElement("a");

//   console.log("hello");
//   // mealId = sessionStorage.getItem("mealId");

//   ancor.href = "/index.html"
//   console.log(ancor);
//   ancor.appendChild(glaa);
//   console.log(glaa);
//   glaa.append(ancor);
// glaa.append(ancor)

// ancor.innerHTML = (glaa)
// console.log(ancor);


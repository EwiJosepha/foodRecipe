import { getLocalStorage } from "./utils.js"



const video = document.querySelector('.backgr')


const apikey = "https://www.themealdb.com/api/json/v1/1/search.php?s="

async function videodisplay () {
  const apifetch = await fetch(apikey)
  const responsss = await apifetch.json()
  const actualdata = responsss.meals
  
}














  'z6T7x6sCQoqofSxUH49y7JAPgvUYgK072xGpfNbJ2s8'
// "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
const latest = document.getElementById('latestt')
const bestmeal = document.getElementById('apiphotos')
const latestrec = document.getElementById('latestrecipee')
let keyword = "meal"
let page = 1
const mylink = " https://www.themealdb.com/api.php"



async function renderMeals() {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="
  const response = await fetch(url)
  const data = await response.json()
  console.log(data);

  data.meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    const aTag = document.createElement("a");
    const imageTag = document.createElement("img");
    const hTag = document.createElement("h6");

    mealDiv.className = "bestmeal";
    mealDiv.id = "bestmeall";
    aTag.href = "./deatails.html";

    imageTag.src = `${meal.strMealThumb}`;
    imageTag.alt = "popular Meals";
    hTag.innerHTML = `${meal.strMeal}`;

    aTag.appendChild(imageTag);
    mealDiv.appendChild(aTag);
    mealDiv.appendChild(hTag);

    latestrec.appendChild(mealDiv);

    aTag.addEventListener("click", () => {
      sessionStorage.setItem("mealId", meal.idMeal);

      // sessionStorage.setItem("strCategory", meal.strCategory)
    })

    document.getElementById('bestmeall').addEventListener('click', () => {
      console.log("item name: ", meal.strMeal);
    })


  })


  // const fevMealId = sessionStorage.getItem("mealId")

  // const favMeal = data.meals.find((meal)=> meal.idMeal === fevMealId)

  // console.log("favMeal: ", favMeal)


}



renderMeals()


async function renderpopular() {
  const url2 = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  const res = await fetch(url2)
  const data1 = await res.json()
  console.log(data1);
  const result = data1.meals
  console.log(result);
  const pop = document.getElementById('categoryimagess')

  result.forEach((meal) => {
    pop.innerHTML += `
      <div class="imagetitle">
        <img
          src="${meal.strMealThumb}"
          alt="popular Meals">
         
        <h5 id="popcatt">${meal.strMeal}</h5>
       
      </div>
  `
  });
}

renderpopular()


const displaySuperDelicious = async () => {
  const carousel = document.querySelector(".carousel");

  const favorites = getLocalStorage("favorites") || [];
  console.log(favorites);

  favorites.forEach(fav => {
    const newItem = document.createElement("div");
    newItem.className = "top";

    newItem.innerHTML = `
      <img
        src="${fav.strMealThumb}">
        

      <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <p id="delicious">Delicious Fancy GLAZES BLUEBERRY</p>

      <div class="imagetitll">
        <img
          src="https://media.istockphoto.com/id/182924845/fr/photo/spaghetti-%C3%A0-la-bolognaise-avec-feuilles-de-basilic.webp?b=1&s=170667a&w=0&k=20&c=g60SDvd1ZYj4PScloP5L0LSowPAvE64ANLbFsych864="
          alt="popular Meals" id="pi">
        <span>Tricia Albert</span>
      </div>
      <div class="date">
        <i class="fa-regular fa-message">Yesterday</i>
        <i class="fa-regular fa-calendar-minus">456</i>
      </div>
      
    `
    console.log(`${fav.strMealThumb}`);
    console.log(newItem);
    carousel.appendChild(newItem);
  })

  console.log({ favorites })
};

displaySuperDelicious();

export function formexport () {
return `< div class=" form">
<h1 id="deliciousness">Deliciousness to your inbox</h1>
<p id="enjoy">Enjoy weekly handpicked and recipes Recommendation</p>
<div class="footer-form">
<input type="text" id="inputfooter" placeholder="Email">
<button id="btnnfooter">Join</button>
</div>
<div class="divv">
<span id="span">By joining our newsletter you aggree to terms and conditions</span>

</div>`
}

formexport ()


const apikey =
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
    aTag.href = "/deatails.html";

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
  })



}




renderpopular()

document.querySelector('#app').innerHTML

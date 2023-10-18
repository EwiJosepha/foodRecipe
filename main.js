const apikey =
  'z6T7x6sCQoqofSxUH49y7JAPgvUYgK072xGpfNbJ2s8'
// "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
const latest = document.getElementById('latestt')
const bestmeal = document.getElementById('apiphotos')
const latestrec = document.getElementById('latestrecipee')
let keyword = "meal"
let page = 1


async function renderMeals() {

  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="
  const response = await fetch(url)
  const data = await response.json()
  console.log(data);
  let meal = data.meals
  console.log();
 meal.forEach((category)=> {

  latestrec.innerHTML +=  ` 
   
      <div class="bestmeal" id="bestmeall"> 
        <img
          src="${category.strMealThumb}"
          alt="popular Meals">
        <h6>${category.strMeal}</h6>
      </div>
`
  })

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
        <span>${meal.strMeal}</span>
      </div>
  `
  })



}



renderpopular()

document.querySelector('#app').innerHTML



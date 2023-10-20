// const apidescription = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const arra_ingrd = []; // array to hold all ingredients

const displayIngredients = () => {
  const displayIngr = document.getElementById('display-ingredients');
  arra_ingrd.forEach(ingr => {
    displayIngr.innerHTML += `<li>${ingr}</li>`
  })

}

let mealId
async function description() {
  mealId = sessionStorage.getItem("mealId");

  const desc_url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;


  const res = await fetch(desc_url)
  const data1 = await res.json()
  const current_meal = data1.meals[0]
  console.log(current_meal);

  const display = document.getElementById('instrucc');

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
  display.innerHTML +=
    `<div class="instruc">
    
    <p><span id="orange">1</span>${current_meal.strInstructions}</p>
   
    </div>`;

  displayIngredients()
}

description()



const arrrelated = []
async function related () {

  const strcategory = sessionStorage.getItem('strcategory')
  mealId = sessionStorage.getItem("mealId");


  const relatedApi = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${strcategory}`

  const relatedres = await fetch(relatedApi)
  const relatedData = await relatedres.json()
  const resultt = relatedData.meals
  console.log(resultt);
  resultt.forEach((rel)=>{
    const card = document.getElementById('cardd')
    card.innerHTML +=
    `<div class="divcard">
    <img src="${rel.strMealThumb}">
  </div>`
  })
  // const currentRelated = relatedData.meals
  // console.log(currentRelated);
}

related ()

const glaa = document.getElementById('glaa')
const ancor = document.createElement('a')
glaa.append(ancor)

glaa.addEventListener('click', ()=>{
console.log('hello');
mealId = sessionStorage.getItem("mealId");
const ancor = document.createElement('a')
ancor.href = "http://127.0.0.1:5500/index.html"
ancor.appendChild(glaa)
// console.log(ancor);

})


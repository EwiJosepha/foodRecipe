// const apidescription = "https://www.themealdb.com/api/json/v1/1/search.php?s="



async function description () {
  const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="
 const res = await fetch(url)
  const data1 = await res.json()
  console.log(data1);
  const descriptionn = data1.meals
   
  const resultt = descriptionn.forEach((dat, i)=>{
    const display = document.getElementById('instrucc');

    display.innerHTML += 
    `<div class="instruc">
    
    <p><span id="orange">${i + 1}</span>${dat.strMeal}</p>
   
    </div>`
  })




}

description ()


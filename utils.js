export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
}

export const saveToLocal = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
}

export const getSessionStorage = (key) => {
  return JSON.parse(sessionStorage.getItem(key));
}

export const saveSession = (key, value) => {
  return sessionStorage.setItem(key, JSON.stringify(value));
}

// export const saveSession = (key, value) => {
//   return sessionStorage.setItem(key, JSON.stringify(value));
// }

// export const toggleFavorite = (current) => {
//   const prev_favorites = getLocalStorage("favorites") || [];

//   const prev = prev_favorites.find((item) => item.idMeal == current?.idMeal);

//   if (prev) {
//     const update = prev_favorites.filter(item => item?.idMeal !== current?.idMeal);
//     saveToLocal("favorites", update);
//     alert(`${current.strArea} removed from delecious`);
//   } else {
//     saveToLocal("favorites", [...prev_favorites, current]);
//     alert(`${current.strArea} added to delicous`);
//   }
// }

export const toggleFavorite = (current) => {
  const prev_favorites = getLocalStorage("favorites") || [];
  const prev = prev_favorites.find((item) => item?.idMeal == current?.idMeal);
  if (prev) {
    const update = prev_favorites.filter(item => item?.idMeal !== current?.idMeal);
    saveToLocal("favorites", update);
    alert(`${current.strArea} removed from delecious`);
  } else {
    saveToLocal("favorites", [...prev_favorites, current]);
    alert(`${current.strArea} added to delicous`);
  }

}
// fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
//     .then(res => res.json())
//     .then(data => displayCountries(data));

// const displayCountries = countries => {
//     const countriesDiv = document.getElementById('countries');
//     countries.forEach(country => {
//         const countryDiv = document.createElement('div');
//         countryDiv.className = 'country';
//         const countryInfo = `
//         <img src ="${country.meals.strMealThumb}">
//         <h3 class = "country-name"> ${country.meals.strMeal} </h3>
       

//         `;
//         countryDiv.innerHTML = countryInfo;
//         countriesDiv.appendChild(countryDiv);
//     })};
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata')
.then(res => res.json())
.then(data => displayCountries(data));

const displayCountries = countries => {
const countriesDiv = document.getElementById('countries');
countries.forEach(country => {
    const countryDiv = document.createElement('div');
    countryDiv.className = 'country';
    const countryInfo = `
    <h3 class = "country-name"> ${country.name} </h3>
    <p> ${country.capital} </p>
    <button onclick = "displayCountryDetail('${country.name}')">Details</button>

    `;
    countryDiv.innerHTML = countryInfo;
    countriesDiv.appendChild(countryDiv);
})};
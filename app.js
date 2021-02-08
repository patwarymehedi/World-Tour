fetch('https://restcountries.eu/rest/v2/all')
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
    });

    // for (let i = 0; i < countries.length; i++) {
    //     const country = countries[i];
    //     const countryDiv = document.createElement('div');

    //     // const countryName = document.createElement('h3');
    //     // countryName.innerText = country.name;
    //     // const countryCapital = document.createElement('p');
    //     // countryCapital.innerText = country.capital;
    //     // countryDiv.appendChild(countryName);
    //     // countryDiv.appendChild(countryCapital);


    //     countryDiv.className = 'country';
    //     const countryInfo = `
    //     <h3 class = "country-name"> ${country.name} </h3>

    //     <p> ${country.capital} </p>

    //     `;
    //     countryDiv.innerHTML = countryInfo;
    //     countriesDiv.appendChild(countryDiv);
    // }
}

const displayCountryDetail = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => renderCountryInfo(data[0]))
}
const renderCountryInfo = country =>{
    const countryDiv = document.getElementById('countryDetails');
    countryDiv.innerHTML = `
        <h3>Name : ${country.name}</h3>
        <p>capital :${country.capital} </p>
        <p>Population : ${country.population}</p>
        <p>Area : ${country.area}</p>
        <p>Subregion : ${country.subregion}</p>
        <p>Currencies : ${country.currencies[0].name}</p>
        <img src ="${country.flag}">
    `
}
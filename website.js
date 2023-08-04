// apiCaller.js
// const axios = require('axios');

function fetchDataAndDisplay() {

    const apiUrl = 'https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=20230803&end_date=20230803&station=9410230&product=predictions&datum=MLLW&time_zone=lst_ldt&interval=hilo&units=english&format=json';

    axios.get(apiUrl)
        .then(response => {
            // Update the DOM with the API response data
            const responseDisplay = document.getElementById('responseDisplay');
            responseDisplay.textContent = JSON.stringify(response.data);
        })
        .catch(error => {
            // Handle errors if the API call fails
            console.error('Error fetching data:', error.message);
    });
}

// Call the function to fetch data and display it on button click
document.getElementById('fetchButton').addEventListener('click', fetchDataAndDisplay);
  
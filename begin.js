

let currentIndex = 0;

function moveGrid(direction) {
    const items = document.querySelectorAll('.grid-item');
    const totalItems = items.length;
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    const offset = -currentIndex * (items[0].clientWidth + 20); // 20 is for margin
    document.querySelector('.grid').style.transform = `translateX(${offset}px)`;
}


const ctx = document.getElementById('revenueChart').getContext('2d');
const revenueChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets: [{
                label: 'Revenue through Youtube Videos',
                data: [12000, 15000, 14000, 18000, 19000, 22000, 21000, 24000, 23000, 25000],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
});

// Chart.js Sales Performance Chart
const ctx2 = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Quater 1', 'Quater 2', 'Quater 3', 'Quater 4'],
        datasets: [{
                label: 'Sales through Online Store',
                data: [5000, 7000, 8000, 9500],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    
});

// Initialize the map and set its view to a global level
var map = L.map('map').setView([20, 0], 2); // Center on the equator, zoom level 2 for world view

// Load and display a tile layer on the map (OpenStreetMap tiles)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

// Define some GeoJSON data for a few countries
var countriesGeoJSON = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": { "name": "France" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [-4.59235, 42.70968],
                    [-1.46693, 43.03491],
                    [2.26577, 50.45786],
                    [8.03272, 48.63607],
                    [5.98752, 44.39449],
                    [-4.59235, 42.70968]
                ]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Brazil" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [-74.297333, -9.31899],
                    [-63.245218, -4.16212],
                    [-52.94472, -15.92491],
                    [-44.23868, -4.88113],
                    [-53.99932, -30.06392],
                    [-60.158203, -13.38029],
                    [-74.297333, -9.31899]
                ]]
            }
        },
        {
            "type": "Feature",
            "properties": { "name": "Australia" },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [114.20703, -28.07198],
                    [122.69531, -25.72073],
                    [137.10937, -29.01733],
                    [150.64453, -36.03133],
                    [146.29394, -43.68173],
                    [126.82617, -35.69299],
                    [114.20703, -28.07198]
                ]]
            }
        }
    ]
};

// Define color styles for the countries
function getCountryStyle(feature) {
    switch (feature.properties.name) {
        case 'France': return { color: "#2E8B57", fillColor: "#2E8B57", fillOpacity: 0.7 };
        case 'Brazil': return { color: "#FF6347", fillColor: "#FF6347", fillOpacity: 0.7 };
        case 'Australia': return { color: "#4682B4", fillColor: "#4682B4", fillOpacity: 0.7 };
    }
}

// Add the GeoJSON layer to the map and apply the styling
L.geoJSON(countriesGeoJSON, {
    style: getCountryStyle,
    onEachFeature: function (feature, layer) {
        layer.bindPopup("<b>" + feature.properties.name + "</b>"); // Popup with country name
    }
}).addTo(map);


// Get the context of the canvas element where the pie chart will be drawn
const ctxx = document.getElementById('myPieChart').getContext('2d');

// Create the pie chart using Chart.js
const myPieChart = new Chart(ctxx, {
    type: 'pie', 
    data: {
        labels: ['T-Shirts', 'Joggers', 'Gym Wear', 'Track Suit', 'Crop Tops'], 
        datasets: [{
            label: 'Sales Distribution',
            data: [30, 20, 15, 25, 10], 
            backgroundColor: [
                '#FF6384',  // Red
                '#36A2EB',  // Blue
                '#FFCE56',  // Yellow
                '#4BC0C0',  // Teal
                '#9966FF'   // Purple
            ],
            hoverOffset: 4  // Offset size when a segment is hovered
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',  // Display the legend at the top
            },
            tooltip: {
                enabled: true, // Enable tooltips on hover
            }
        }
    }
});


// Get the context of the canvas element where the doughnut chart will be drawn
const ctx3 = document.getElementById('myDoughnutChart').getContext('2d');

// Create the doughnut chart using Chart.js
const myDoughnutChart = new Chart(ctx3, {
    type: 'doughnut',  // Specify the chart type as 'doughnut'
    data: {
        labels: ['Budget Spent', 'Budget Remaining'],  // Labels for the slices
        datasets: [{
            label: 'Dataset 1',  // Label for the dataset
            data: [70, 30],  // Data values corresponding to the labels
            backgroundColor: [
                '#FF6384',  // Red
                '#36A2EB',  // Blue
                
            ],
            hoverOffset: 4  // Offset size when a segment is hovered
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',  // Display the legend at the top
            },
            tooltip: {
                enabled: true,  // Enable tooltips on hover
            }
        }
    }
});



# weather API's

1. '/weather'
- Request Method : POST
- Purpose: accepts req body and fetches data (based on lat,lon) and then save it to the database.
- Response: sends the weather data (saved in database table) as response.
- Response object example: 

    ````````
    {
    "success": true,
    "data": [{
            "id": 6,
            "sunrise": 1716003949,
            "sunset": 1716057583,
            "temp": "293.00",
            "feels_like": "292.45",
            "pressure": 1014,
            "humidity": 54,
            "uvi": "5.00",
            "wind_speed": "1.67",
            "lat": "44.3500",
            "lon": "10.9500"
        }]
        }
    ````````
2. '/weatherdata'
- Request Method: GET